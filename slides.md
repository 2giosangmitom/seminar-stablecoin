---
theme: seriph
transition: slide-down
background: https://cover.sli.dev
hideInToc: true
---

# Tìm hiểu về stablecoin

---
transition: slide-down
layout: intro
hideInToc: true
---

# Nội dung

<Toc />

---
transition: slide-down
---

# Stablecoin là gì?

## Định nghĩa cơ bản

Stablecoin là loại tiền kỹ thuật số được thiết kế để duy trì giá trị ổn định so với một tài sản cơ sở (thường là tiền pháp định như USD). Khác với tiền mã hóa biến động cao như BTC hay ETH, stablecoin cung cấp một mốc giá dễ dự đoán, giúp người dùng và ứng dụng on-chain thực hiện giao dịch hàng ngày, lưu trữ giá trị và triển khai các hợp đồng thông minh mà không chịu rủi ro biến động lớn.

## Nguyên tắc hoạt động

Stablecoin kết hợp độ tin cậy của tiền truyền thống với hiệu quả của công nghệ blockchain. Chúng được thiết kế để:

- Giảm thiểu biến động giá bằng cách neo với tài sản ổn định
- Giữ lại những lợi thế của blockchain như giao dịch nhanh, phí thấp và tính minh bạch
- Hoạt động 24/7 mà không phụ thuộc vào giờ làm việc của hệ thống tài chính truyền thống

---
hideInToc: true
---

## Các cơ chế duy trì ổn định

Có nhiều cách để stablecoin duy trì giá trị ổn định:

1. **Bảo chứng bằng tiền pháp định hoặc tài sản có giá trị tương đương** (ví dụ: USDC)
2. **Bảo chứng bằng tiền mã hóa với cơ chế thế chấp vượt mức** (ví dụ: DAI)
3. **Dùng thuật toán để điều chỉnh cung tiền** (ví dụ: UST - đã ngừng hoạt động)

Mỗi cách tiếp cận có ưu — nhược điểm khác nhau về minh bạch, độ tin cậy và rủi ro.

---
transition: slide-down
---

# Chuẩn token ERC-20

## ERC-20 là gì?

ERC-20 là tiêu chuẩn kỹ thuật phổ biến nhất để tạo và phát hành token trên blockchain Ethereum, ra mắt năm 2015. Tiêu chuẩn này định ra các quy tắc cụ thể mà một token phải tuân theo để hoạt động trên mạng Ethereum, bao gồm các chức năng cơ bản gồm chuyển giao token, truy vết giao dịch và tương tác với các hợp đồng thông minh.

ERC-20 định nghĩa chuẩn cho **Fungible Token** — tức là mỗi token hoàn toàn giống nhau về loại và giá trị. Ví dụ: 1 USDC luôn bằng 1 USDC bất kể ai đang nắm giữ nó.

## Tại sao ERC-20 quan trọng?

- **Khả năng tương tác**: Mọi ứng dụng DeFi, ví, sàn giao dịch đều có thể tích hợp bất kỳ token ERC-20 nào mà không cần code riêng
- **Nền tảng của stablecoin**: USDC, DAI, USDT... đều được xây dựng trên chuẩn ERC-20
- **Hệ sinh thái mở**: Developer có thể xây dựng ứng dụng tương thích với hàng nghìn token khác nhau ngay lập tức

---
hideInToc: true
---

## Các hàm và sự kiện chính của ERC-20

Một Smart Contract được gọi là ERC-20 khi triển khai đầy đủ các phương thức sau:

**Hàm truy vấn thông tin:**

- `name()` — Tên token (vd: "USD Coin")
- `symbol()` — Ký hiệu (vd: "USDC")
- `decimals()` — Số chữ số thập phân
- `totalSupply()` — Tổng lượng token đang lưu hành
- `balanceOf(address)` — Số dư của một địa chỉ

---

**Hàm giao dịch:**

- `transfer(to, value)` — Chuyển token trực tiếp
- `approve(spender, value)` — Ủy quyền cho bên thứ ba chi tiêu
- `transferFrom(from, to, value)` — Chuyển token thay mặt chủ sở hữu
- `allowance(owner, spender)` — Kiểm tra hạn mức được ủy quyền

**Sự kiện (Events):**

- `Transfer` — Phát ra khi token được chuyển
- `Approval` — Phát ra khi ủy quyền được thiết lập

---
hideInToc: true
---

## Hạn chế đáng chú ý của ERC-20

**Vấn đề mất token khi gửi vào smart contract**

Khi token ERC-20 được gửi đến một smart contract không được thiết kế để xử lý token, những token đó có thể bị mất vĩnh viễn. Tính đến tháng 6/2024, ước tính hơn **$83 triệu USD** giá trị token đã bị mất theo cách này.

**Nguyên nhân:**

- Hàm `transfer()` chuyển token ngay cả khi contract nhận không có cơ chế xử lý
- Không có cơ chế thông báo (callback) cho contract nhận
- ERC-20 không có hàm bắt buộc cho contract nhận phải triển khai

**Giải pháp thay thế:** ERC-223, ERC-1363 ra đời để giải quyết vấn đề này.

---
transition: slide-down
---

# Các loại stablecoin

## 1. Fiat-backed Stablecoins

- **Mô tả**: Bảo chứng bằng tiền pháp định và tài sản tương đương
- **Ví dụ**: USDC, EURC
- **Cơ chế**: Nhà phát hành giữ dự trữ bằng tiền pháp định và tài sản tương đương, cho phép đổi 1:1
- **Ưu điểm**: Đơn giản, dễ hiểu, độ tin cậy cao khi có minh bạch tốt
- **Nhược điểm**: Phụ thuộc vào bên trung gian và quản trị dự trữ

## 2. Commodity-backed Stablecoins

- **Mô tả**: Bảo chứng bằng hàng hóa
- **Ví dụ**: PAXG (token đại diện cho vàng)
- **Cơ chế**: Token đại diện cho tài sản vật chất (vàng, dầu...)
- **Ưu điểm**: Thích hợp cho đầu tư, cho phép truy cập hàng hóa qua blockchain
- **Nhược điểm**: Yêu cầu lưu trữ và kiểm toán vật lý

---
hideInToc: true
---

## 3. Crypto-backed Stablecoins

- **Mô tả**: Thế chấp bằng tiền mã hóa
- **Ví dụ**: DAI (thế chấp bằng ETH, USDC...)
- **Cơ chế**: Dùng tài sản tiền mã hóa làm thế chấp với tỷ lệ vượt mức để bù biến động
- **Ưu điểm**: Tự động hóa qua smart contract, phù hợp cho DeFi
- **Nhược điểm**: Rủi ro khi tài sản thế chấp giảm mạnh do biến động giá

## 4. Algorithmic Stablecoins

- **Mô tả**: Điều chỉnh bằng thuật toán
- **Ví dụ**: UST (TerraUSD - đã sụp đổ)
- **Cơ chế**: Giữ ổn định bằng thuật toán và cơ chế thị trường, không cần dự trữ truyền thống
- **Ưu điểm**: Tiềm năng về chi phí thấp và tự động hóa
- **Nhược điểm**: Rủi ro cơ chế cao, dễ mất niềm tin nếu thị trường biến động mạnh

---
transition: slide-down
layout: default
---

# USDC

## Tổng quan

USDC (USD Coin) là stablecoin loại fiat-backed được thiết kế để duy trì giá trị 1:1 với đô la Mỹ. Nó được phát triển trong khuôn khổ Centre (một consortium do Circle và Coinbase sáng lập) và được phát hành bởi Circle.

## Đặc điểm nổi bật

- **Fully reserved**: Được hỗ trợ 100% bởi tiền mặt và các công cụ thị trường tiền tệ có tính thanh khoản cao
- **1:1 redeemability**: Mỗi USDC có thể đổi lại chính xác 1 USD
- **Minh bạch**: Dự trữ được xác nhận qua các báo cáo (attestation) độc lập định kỳ
- **Tuân thủ quy định**: Được phát hành bởi các thực thể được cấp phép của Circle
- **Multi-chain**: Hoạt động trên hơn 30 mạng blockchain khác nhau

---
hideInToc: true
---

## Lịch sử phát triển

- **Tháng 9/2018**: Ra đời lần đầu trên blockchain Ethereum dưới dạng ERC-20 token
- **2020–2024**: Mở rộng sang nhiều blockchain khác bao gồm Solana, Arbitrum, Base, v.v.
- **Tháng 11/2023**: Circle công bố **Bridged USDC Standard** — chuẩn hóa quy trình triển khai USDC bridged trên các EVM blockchain mới
- **2023–nay**: Tích hợp **Cross-Chain Transfer Protocol (CCTP)** để cho phép chuyển native USDC trực tiếp giữa các chain thông qua cơ chế burn-and-mint
- **Hiện tại**: USDC là một trong những stablecoin được quản lý và sử dụng rộng rãi nhất trên thế giới với tổng vốn lưu hành trên 70 tỷ USD

---
transition: slide-down
---

# Cơ chế dự trữ và minh bạch của USDC

## Thành phần dự trữ

Dự trữ hỗ trợ USDC bao gồm:

- **Tiền mặt**: USD thực
- **Công cụ thị trường tiền tệ**: Chủ yếu là trái phiếu chính phủ Mỹ ngắn hạn (US Treasuries)
- **Các công cụ thanh khoản cao**: Overnight repurchase agreements với các ngân hàng hàng đầu thế giới

---
hideInToc: true
---

## Quy trình chứng minh

Circle áp dụng một hệ thống minh bạch đa tầng:

1. **Báo cáo hàng ngày**: Dự trữ được báo cáo công khai
2. **Attestation hàng tháng**: Công ty kiểm toán độc lập (thuộc nhóm Big Four) thực hiện theo chuẩn AICPA
3. **Báo cáo công khai**: Kết quả được đăng tải trên trang web của Circle
4. **Kiểm toán độc lập**: Thực hiện kiểm toán tài chính đầy đủ theo chuẩn quốc tế

## Circle Reserve Fund

- Được quản lý bởi BlackRock - một trong những nhà quản lý tài sản lớn nhất thế giới
- Là quỹ thị trường tiền tệ được quản lý bởi SEC
- Chứa các tài sản có rủi ro thấp và tính thanh khoản cao
- Cho phép đổi 1:1 bất kỳ lúc nào

---
transition: slide-down
---

# Bridged USDC Standard

## Vấn đề cần giải quyết

Khi một blockchain mới ra đời, Circle không thể phát hành **native USDC** ngay lập tức do quy trình thẩm định kỹ thuật và pháp lý mất thời gian. Tuy nhiên, cộng đồng thường tự tạo **bridged USDC** (USDC được bridge từ Ethereum sang) để bootstrap thanh khoản sớm.

Điều này dẫn đến vấn đề:

- Nhiều phiên bản bridged USDC khác nhau → trải nghiệm phân mảnh
- Khi Circle phát hành native USDC → cần migration tốn kém
- Bridged USDC không tương thích với CCTP và các sản phẩm Circle

---
hideInToc: true
---

## Bridged USDC Standard là gì?

**Bridged USDC Standard** là một đặc tả kỹ thuật và quy trình cho phép các team blockchain EVM triển khai bridged USDC với khả năng nâng cấp liền mạch lên native USDC trong tương lai.

|                      | Native USDC             | Bridged USDC                     |
| -------------------- | ----------------------- | -------------------------------- |
| **Phát hành bởi**    | Circle                  | Bên thứ ba                       |
| **Đảm bảo**          | Backed bởi USD, đổi 1:1 | Backed bởi USDC lock ở chain gốc |
| **Tương thích CCTP** | ✅ Có                   | ❌ Không                         |
| **Tính chính thức**  | Chính thức              | Không chính thức                 |

---

## Đặc điểm của chuẩn

- **Permissionless & Equitable**: Bất kỳ team L1/L2 nào đều có thể triển khai
- **Chuẩn hóa & Mở rộng được**: Quy trình chuyển giao ownership cho Circle được định nghĩa rõ ràng
- **Bảo mật & Đã kiểm toán**: Dựa trên cùng smart contract đã được audit của USDC gốc

---
hideInToc: true
---

## Quy trình hoạt động

```
1. Team blockchain triển khai bridged USDC theo chuẩn
        ↓
2. Bridged USDC bootstrap thanh khoản ban đầu cho ecosystem
        ↓
3. Bridged USDC đạt đủ supply, holders và app integrations
        ↓
4. Circle và team blockchain đồng thuận chuyển giao ownership
        ↓
5. Circle nâng cấp bridged USDC → native USDC
   (giữ nguyên contract address, số dư, tích hợp ứng dụng)
```

## Lợi ích cho các bên

- **Blockchain teams**: Có USDC sớm với lộ trình nâng cấp lên native
- **Developers**: Contract address không đổi, không cần sửa code
- **Users**: Token tự động nâng cấp, không cần swap sang asset mới
- **Toàn hệ sinh thái**: Tránh được quá trình migration phức tạp và tốn kém

---
transition: slide-down
---

# Cross-Chain Transfer Protocol (CCTP)

## CCTP là gì?

**Cross-Chain Transfer Protocol (CCTP)** là một giao thức on-chain permissionless cho phép chuyển **native USDC** trực tiếp giữa các blockchain thông qua cơ chế **burn-and-mint**.

Thay vì dùng bridge truyền thống (lock token ở chain gốc, mint wrapped token ở chain đích), CCTP:

- **Burn** USDC ở chain nguồn
- **Mint** USDC native tương đương ở chain đích

→ Không cần liquidity pool, không có wrapped token, không có rủi ro bridge hack.

---
hideInToc: true
---

## Cơ chế hoạt động

```
Chain A (nguồn)                    Chain B (đích)
─────────────────                  ─────────────────
User gọi burnUSDC()       →        Circle Attestation Service
USDC bị burn                       xác nhận burn hợp lệ
                                         ↓
                           User gọi mintUSDC() với attestation
                           USDC native được mint ở chain B
```

## Các tính năng nổi bật

- **Native USDC transfers**: Chuyển native USDC, không phải wrapped token
- **Fast Transfer**: Hoàn thành trong ~8–20 giây
- **Standard Transfer**: Chi phí thấp hơn, mất 15–19 phút (Ethereum/L2s)
- **Programmable Hooks**: Tự động trigger các hành động trên chain đích sau khi USDC đến (vd: deposit vào DeFi protocol)

---
hideInToc: true
---

## Các ứng dụng có thể xây dựng với CCTP

**Crosschain Liquidity Management**
Tái cân bằng USDC trên nhiều blockchain để đáp ứng nhu cầu thanh khoản hoặc tận dụng cơ hội thị trường với độ trễ tối thiểu.

**Crosschain Swaps**
Cho phép người dùng swap token trên một blockchain lấy token trên blockchain khác, routing qua USDC như một điểm trung chuyển.

**Crosschain Payments**
Nhận thanh toán USDC trên một chain và tự động chuyển sang chain khác nơi doanh nghiệp vận hành.

**Composable Crosschain Apps**
Dùng CCTP hooks để kết hợp nhiều hành động: chuyển USDC xuyên chain và tự động deposit vào DeFi, mua NFT hoặc thực thi smart contract logic.

---
transition: slide-down
---

# Ưu điểm của stablecoin

## Giá ổn định - Lợi thế cốt lõi

- **Giảm rủi ro biến động**: So với BTC có thể biến động ±10% trong một ngày, stablecoin thường duy trì trong khoảng ±0.5%
- **Phương tiện trao đổi**: Thích hợp cho thanh toán hàng ngày vì giá ổn định
- **Lưu trữ giá trị**: Giữ giá trị mà không lo biến động lớn
- **Đơn vị tính toán**: Đơn giản hóa việc định giá sản phẩm và dịch vụ trên blockchain

## Hiệu quả giao dịch

- **Tốc độ**: Xác nhận trong vài giây đến vài phút
- **Chi phí**: Phí giao dịch rất thấp (có thể dưới $0.01 trên nhiều mạng)
- **Không giới hạn địa lý**: Gửi tiền toàn cầu chỉ cần internet
- **Hoạt động 24/7**: Không phụ thuộc vào ngân hàng

---
hideInToc: true
---

## Tính lập trình (Programmability)

- **Tích hợp smart contract**
- **Tương thích DeFi**
- **Tự động hóa thanh toán**
- **Dễ tích hợp hệ thống**

## Tài chính toàn diện

- **Tiếp cận toàn cầu**
- **Không cần tài khoản ngân hàng**
- **Giảm rào cản gia nhập**
- **Hỗ trợ nền kinh tế mới nổi**

---
transition: slide-down
---

# Ứng dụng thực tế của stablecoin

## Thanh toán xuyên biên giới

- Giảm chi phí remittance từ 6–8% xuống dưới 1%
- Chuyển tiền trong vài phút
- Minh bạch qua blockchain
- Giảm phụ thuộc trung gian

## Ứng dụng trong DeFi

- Tài sản thế chấp
- Cung cấp thanh khoản
- Yield farming
- Ổn định danh mục đầu tư

---
hideInToc: true
---

## Thanh toán & Thương mại

- Thanh toán trực tuyến
- POS (mã QR)
- Thanh toán định kỳ
- Chuyển tiền nội bộ doanh nghiệp

## Tiết kiệm & Bảo toàn giá trị

- Bảo vệ trước lạm phát
- Quỹ dự phòng
- Kế hoạch tài chính ngắn hạn
- Chuyển giao tài sản

---
hideInToc: true
---

## Micropayments & Kinh tế sáng tạo

- Thanh toán nội dung
- Tip cho creator
- Giao dịch trong game
- Pay-per-use services

---
theme: seriph
transition: slide-down
background: https://cover.sli.dev
hideInToc: true
layout: cover
---

# Cảm ơn mọi người đã lắng nghe!
