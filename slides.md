---
theme: seriph
transition: slide-down
background: https://cover.sli.dev
hideInToc: true
---

# Tìm hiểu về stablecoin và USDC

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
- Hoạt động 24/7/365 mà không phụ thuộc vào giờ làm việc của hệ thống tài chính truyền thống

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

# USDC - Stablecoin được tin cậy nhất thế giới

## Tổng quan

USDC (USD Coin) là stablecoin loại fiat-backed được thiết kế để duy trì giá trị 1:1 với đô la Mỹ. Nó được phát triển trong khuôn khổ Centre (một consortium do Circle và Coinbase sáng lập) và được phát hành bởi Circle.

### Đặc điểm nổi bật

- **Fully reserved**: Được hỗ trợ 100% bởi tiền mặt và các công cụ thị trường tiền tệ có tính thanh khoản cao
- **1:1 redeemability**: Mỗi USDC có thể đổi lại chính xác 1 USD
- **Minh bạch**: Dự trữ được xác nhận qua các báo cáo (attestation) độc lập định kỳ
- **Tuân thủ quy định**: Được phát hành bởi các thực thể được cấp phép của Circle
- **Multi-chain**: Hoạt động trên hơn 30 mạng blockchain khác nhau

---
hideInToc: true
---

## Lịch sử phát triển

- **Tháng 9/2018**: Ra đời lần đầu trên blockchain Ethereum
- **2020–2024**: Mở rộng sang nhiều blockchain khác bao gồm Solana, Arbitrum, Base, v.v.
- **2025–2026**: Tích hợp Cross-Chain Transfer Protocol (CCTP) để cải thiện khả năng tương tác giữa các chain
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
transition: slide-down
---

# Tổng kết

## Stablecoin là cầu nối

- Kết nối tài chính truyền thống và blockchain
- Kết hợp ổn định + hiệu quả
- Mở rộng tiếp cận tài chính

## USDC - Lựa chọn hàng đầu

- Uy tín cao, minh bạch
- Khả năng tương tác rộng
- Hệ sinh thái lớn
- Liên tục cải tiến

---
theme: seriph
transition: slide-down
background: https://cover.sli.dev
hideInToc: true
layout: cover
---

# Cảm ơn mọi người đã lắng nghe!
