import { createWalletClient, http, encodeFunctionData } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { arcTestnet, sepolia } from "viem/chains";

interface AttestationMessage {
  message: string;
  attestation: string;
  status: string;
}

interface AttestationResponse {
  messages: AttestationMessage[];
}

// ============ Configuration Constants ============
// Authentication
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const account = privateKeyToAccount(PRIVATE_KEY as `0x${string}`);

// Contract Addresses
const ETHEREUM_SEPOLIA_USDC = "0x1c7d4b196cb0c7b01d743fbc6116a902379c7238";
const ETHEREUM_SEPOLIA_TOKEN_MESSENGER =
  "0x8fe6b999dc680ccfdd5bf7eb0974218be2542daa";
const ARC_TESTNET_MESSAGE_TRANSMITTER =
  "0xe737e5cebeeba77efe34d4aa090756590b1ce275";

// Transfer Parameters
const DESTINATION_ADDRESS = account.address; // Address to receive minted tokens on destination chain
const AMOUNT = 1_000_000n; // 1 USDC (1 USDC = 1,000,000 subunits)
const maxFee = 500n; // 0.0005 USDC (500 subunits)

// Bytes32 Formatted Parameters
const DESTINATION_ADDRESS_BYTES32 = `0x000000000000000000000000${DESTINATION_ADDRESS.slice(
  2,
)}`; // Destination address in bytes32 format
const DESTINATION_CALLER_BYTES32 =
  "0x0000000000000000000000000000000000000000000000000000000000000000"; // Empty bytes32 allows any address to call MessageTransmitterV2.receiveMessage()

// Chain-specific Parameters
const ETHEREUM_SEPOLIA_DOMAIN = 0; // Source domain ID for Ethereum Sepolia
const ARC_TESTNET_DOMAIN = 26; // Destination domain ID for Arc testnet

// Set up wallet clients
const sepoliaClient = createWalletClient({
  chain: sepolia,
  transport: http(),
  account,
});
const arcClient = createWalletClient({
  chain: arcTestnet,
  transport: http(),
  account,
});

// ============ CCTP Flow Functions ============
async function approveUSDC() {
  console.log("Approving USDC transfer...");
  const approveTx = await sepoliaClient.sendTransaction({
    to: ETHEREUM_SEPOLIA_USDC,
    data: encodeFunctionData({
      abi: [
        {
          type: "function",
          name: "approve",
          stateMutability: "nonpayable",
          inputs: [
            { name: "spender", type: "address" },
            { name: "amount", type: "uint256" },
          ],
          outputs: [{ name: "", type: "bool" }],
        },
      ],
      functionName: "approve",
      args: [ETHEREUM_SEPOLIA_TOKEN_MESSENGER, 10_000_000n], // 10 USDC allowance
    }),
  });
  console.log(`USDC Approval Tx: ${approveTx}`);
}

async function burnUSDC() {
  console.log("Burning USDC on Ethereum Sepolia...");
  const burnTx = await sepoliaClient.sendTransaction({
    to: ETHEREUM_SEPOLIA_TOKEN_MESSENGER,
    data: encodeFunctionData({
      abi: [
        {
          type: "function",
          name: "depositForBurn",
          stateMutability: "nonpayable",
          inputs: [
            { name: "amount", type: "uint256" },
            { name: "destinationDomain", type: "uint32" },
            { name: "mintRecipient", type: "bytes32" },
            { name: "burnToken", type: "address" },
            { name: "destinationCaller", type: "bytes32" },
            { name: "maxFee", type: "uint256" },
            { name: "minFinalityThreshold", type: "uint32" },
          ],
          outputs: [],
        },
      ],
      functionName: "depositForBurn",
      args: [
        AMOUNT,
        ARC_TESTNET_DOMAIN,
        DESTINATION_ADDRESS_BYTES32 as `0x${string}`,
        ETHEREUM_SEPOLIA_USDC,
        DESTINATION_CALLER_BYTES32,
        maxFee,
        1000, // minFinalityThreshold (1000 or less for Fast Transfer)
      ],
    }),
  });
  console.log(`Burn Tx: ${burnTx}`);
  return burnTx;
}

async function retrieveAttestation(transactionHash: string) {
  console.log("Retrieving attestation...");
  const url = `https://iris-api-sandbox.circle.com/v2/messages/${ETHEREUM_SEPOLIA_DOMAIN}?transactionHash=${transactionHash}`;
  while (true) {
    try {
      const response = await fetch(url, { method: "GET" });

      if (!response.ok) {
        if (response.status !== 404) {
          const text = await response.text().catch(() => "");
          console.error(
            "Error fetching attestation:",
            `${response.status} ${response.statusText}${
              text ? ` - ${text}` : ""
            }`,
          );
        }
        await new Promise((resolve) => setTimeout(resolve, 5000));
        continue;
      }

      const data = (await response.json()) as AttestationResponse;

      if (data?.messages?.[0]?.status === "complete") {
        console.log("Attestation retrieved successfully!");
        return data.messages[0];
      }
      console.log("Waiting for attestation...");
      await new Promise((resolve) => setTimeout(resolve, 5000));
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error("Error fetching attestation:", message);
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }
  }
}

async function mintUSDC(attestation: AttestationMessage) {
  console.log("Minting USDC on Arc testnet...");
  const mintTx = await arcClient.sendTransaction({
    to: ARC_TESTNET_MESSAGE_TRANSMITTER,
    data: encodeFunctionData({
      abi: [
        {
          type: "function",
          name: "receiveMessage",
          stateMutability: "nonpayable",
          inputs: [
            { name: "message", type: "bytes" },
            { name: "attestation", type: "bytes" },
          ],
          outputs: [],
        },
      ],
      functionName: "receiveMessage",
      args: [
        attestation.message as `0x${string}`,
        attestation.attestation as `0x${string}`,
      ],
    }),
  });
  console.log(`Mint Tx: ${mintTx}`);
}

// ============ Main Execution ============
async function main() {
  await approveUSDC();
  const burnTx = await burnUSDC();
  const attestation = await retrieveAttestation(burnTx);
  await mintUSDC(attestation);
  console.log("USDC transfer completed!");
}

main().catch(console.error);
