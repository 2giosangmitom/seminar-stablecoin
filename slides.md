---
theme: seriph
transition: slide-down
background: https://cover.sli.dev
hideInToc: true
---

# Tìm hiểu về stablecoin và USDC

---
transition: slide-left
layout: intro
hideInToc: true
---

# Nội dung

<Toc />

---
transition: slide-up
---

# Stablecoin là gì?

## Định nghĩa cơ bản

Stablecoin là loại tiền kỹ thuật số được thiết kế để duy trì giá trị ổn định so với một tài sản cơ sở (thường là tiền pháp định như USD). Khác với tiền mã hóa biến động cao như BTC hay ETH, stablecoin cung cấp một mốc giá dễ dự đoán, giúp người dùng và ứng dụng on-chain thực hiện giao dịch hàng ngày, lưu trữ giá trị và triển khai các hợp đồng thông minh mà không chịu rủi ro biến động lớn.

## Nguyên tắc hoạt động

Stablecoins kết hợp độ tin cậy của tiền truyền thống với hiệu quả của công nghệ blockchain. Chúng được thiết kế để:

- Giảm thiểu biến động giá bằng cách neo với tài sản ổn định
- Giữ lại những lợi thế của blockchain như giao dịch nhanh, phí thấp và tính minh bạch
- Hoạt động 24/7/365 mà không phụ thuộc vào giờ làm việc của hệ thống tài chính truyền thống

## Các cơ chế duy trì ổn định

Có nhiều cách để stablecoin duy trì giá trị ổn định:

1. **Bảo chứng bằng tiền pháp định hoặc tài sản có giá trị tương đương** (ví dụ: USDC)
2. **Bảo chứng bằng tiền mã hóa với cơ chế thế chấp vượt mức** (ví dụ: DAI)
3. **Dùng thuật toán để điều chỉnh cung tiền** (ví dụ: UST - đã ngừng hoạt động)

Mỗi cách tiếp cận có ưu — nhược khác nhau về minh bạch, độ tin cậy và rủi ro.

---
transition: slide-left
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

## 3. Crypto-backed Stablecoins

- **Mô tả**: Thế chấp bằng tiền mã hóa
- **Ví dụ**: DAI (đóng góp ETH, USDC...)
- **Cơ chế**: Dùng tài sản tiền mã hóa làm thế chấp với tỷ lệ vượt mức để bù biến động
- **Ưu điểm**: Tự động hoá qua smart contract, phù hợp cho DeFi
- **Nhược điểm**: Rủi ro khi tài sản thế chấp lao dốc do biến động giá

## 4. Algorithmic Stablecoins

- **Mô tả**: Điều chỉnh bằng thuật toán
- **Ví dụ**: UST (TerraUSD - đã sụp đổ)
- **Cơ chế**: Giữ ổn định bằng thuật toán và cơ chế thị trường, không cần dự trữ truyền thống
- **Ưu điểm**: Tiềm năng về chi phí thấp và tự động hoá
- **Nhược điểm**: Rủi ro cơ chế cao, dễ mất niềm tin nếu thị trường biến động mạnh

---
transition: slide-left
layout: default
---

# USDC - Stablecoin được tin cậy nhất thế giới

## Tổng quan

USDC (USD Coin) là stablecoin loại fiat-backed được thiết kế để duy trì giá trị 1:1 với đô la Mỹ. Nó được phát triển trong khuôn khổ Centre (một consortium sáng lập bởi Circle và Coinbase) và được phát hành bởi Circle.

### Đặc điểm nổi bật

- **Fully reserved**: Được hỗ trợ 100% bởi tiền mặt và các công cụ thị trường tiền tệ có tính thanh khoản cao
- **1:1 redeemability**: Mỗi USDC có thể đổi lại được chính xác 1 USD
- **Chứng minh minh bạch**: Dự trữ được xác nhận qua các báo cáo/attestation độc lập định kỳ
- **Tuân thủ quy định**: Được phát hành bởi các thực thể được cấp phép của Circle
- **Multi-chain**: Hoạt động trên hơn 30 mạng blockchain khác nhau

## Lịch sử phát triển

- **Tháng 9/2018**: Ra đời lần đầu trên blockchain Ethereum
- **2020-2024**: Mở rộng sang nhiều blockchain khác bao gồm Solana, Arbitrum, Base, v.v.
- **2025-2026**: Tích hợp Cross-Chain Transfer Protocol (CCTP) để cải thiện khả năng tương tác giữa các chain
- **Hiện tại**: USDC là stablecoin được регулируемый và được sử dụng rộng rãi nhất trên toàn thế giới với tổng vốn lưu hành trên 70 tỷ USD

---
transition: slide-right
---

# Cơ chế réserves và minh bạch của USDC

## Thành phần réserves

Dự trữ hỗ trợ USDC bao gồm:

- **Tiền mặt**: USD thực dụng
- **Công cụ thị trường tiền tệ**: Chủ yếu là trái phiếu chính phủ Mỹ ngắn hạn (US Treasuries)
- **Các công cụ thanh khoản cao**: Overnight repurchase agreements với ngân hàng hàng đầu thế giới

## Quy trình chứng minh

Circle áp dụng một hệ thống minh bạch đa tầng:

1. **Báo cáo hàng ngày**: Dự trữ được báo cáo công khai hàng ngày qua BlackRock
2. **Attestation hàng tháng**: Công ty kiểm toán độc lập (hiện là một trong các công ty Big Four) thực hiện attestation theo chuẩn AICPA
3. **Báo cáo công khai**: Kết quả attestation được đăng tải trên trang web của Circle
4. **Kiểm toán độc lập**: Thực hiện kiểm toán tài chính đầy đủ theo chuẩn quốc tế

## Circle Reserve Fund

- Được quản lý bởi BlackRock - một trong những nhà quản lý tài sản lớn nhất thế giới
- Là một quỹ tiền thị trường регулируемыйโดย SEC
- Chứa các tài sản có độ stt 위험 thấp và tính thanh khoản cao
- Cho phép đổi 1:1 bất kỳ lúc nào

---
transition: slide-left
---

# Ưu điểm của stablecoin (phần mở rộng)

## Giá ổn định - Lợi thế cốt lõi

- **Giảm rủi ro biến động**: So với BTC có thể biến động ±10% trong một ngày, stablecoin thường duy trì trong khoảng ±0.5%
- **Làm phương tiện trao đổi**: Thích hợp cho thanh toán hàng ngày vì giá không thay đổi nhiều trong thời gian ngắn
- **Kho lưu trữ giá trị**: Cho phép giữ giá trị mà không lo mất giá do biến động thị trường
- **Đơn vị tính toán**: Đơn giản hóa việc định giá sản phẩm và dịch vụ trên blockchain

## Hiệu quả giao dịch

- **Tốc độ**: Giao dịch stablecoin thường được xác nhận trong vài giây đến vài phút (so với 3-5 ngày làm việc cho chuyển khoản quốc tế truyền thống)
- **Chi phí**: Phí giao dịch thường dưới $0.01 trên hầu hết các mạng blockchain hiện đại (so với $25-$50 cho chuyển khoản SWIFT)
- **Không giới hạn địa lý**: Có thể gửi tiền bất kỳ đâu trên thế giới chỉ cần kết nối internet
- **Hoạt động 24/7**: Không phụ thuộc vào giờ làm việc của ngân hàng hoặc ngày lễ

## Tính lập trình (Programmability)

- **Tích hợp với smart contract**: Cho phép tự động hóa các giao dịch tài chính phức tạp
- **DeFi compatibility**: Là nguyên liệu cơ bản cho các giao dịch vay, cho thuê, yield farming
- **Tự động hoá thanh toán**: Thiết lập lịch trả tiền, thanh toán định kỳ mà không cần can thiệp con người
- **Tích hợp với các dịch vụ khác**: Dễ dàng kết nối với các ứng dụng tài chính, thương mại điện tử, game

## Tài chính bao trùm

- **Tiếp cận toàn cầu**: Có thể sử dụng ở hơn 180 quốc gia và vùng lãnh thổ
- **Không cần tài khoản ngân hàng**: Chỉ cần ví điện tử và smartphone
- **Giảm rào cản vào:** Giúp người chưa có tài khoản ngân hàng tham gia vào hệ thống tài chính toàn cầu
- **Hỗ trợ các nền kinh tế mới nổi**: Đặc biệt hữu ích ở các quốc gia có tiền tệ bất ổn hoặc hệ thống banking kurang phát triển

---
transition: fade
---

# Ứng dụng thực tế của stablecoin (phần mở rộng)

## Thanh toán xuyên biên giới

- **Giải quyết vấn đề remittance**: Giảm chi phí từ trung bình 6-8% (theo World Bank) xuống dưới 1%
- **Tăng tốc độ**: Chuyển tiền trong vài phút thay vì 3-5 ngày làm việc
- **Tăng tính minh bạch**: Người gửi và người nhận có thể theo dõi giao dịch trên blockchain
- **Giảm phụ thuộc vào trung gian**: Loại bỏ nhu cầu phải qua các ngân corrispondent

## Ứng dụng trong DeFi (Decentralized Finance)

- **Nền tảng vayCho thuê**: Dùng làm collateral để vay tiền hoặc cho thuê để lãi suất
- **Nguồn thanh khoản**: Cung cấp thanh khoản ổn định cho các sàn giao dịch phi tập trung (DEX)
- **Yield farming**: Đầu tư vào các pool thanh khoản để nhận phần thưởng
- **Tài sản ổn định trong danh mục**: Giảm độ biến động tổng thể của danh mục đầu tư crypto

## Thanh toán & Thương mại

- **Thanh toán trực tuyến**: Được chấp nhận bởi nhiều nền tảng thương mại điện tử
- **Point-of-sale (POS)**: Sử dụng trong các cửa hàng thực tế qua mã QR hoặc thiết bị chuyên dụng
- **Hóa đơn & thanh toán định kỳ**: Tích hợp vào hệ thống kế toán để tự động hoá thanh toán
- **Chuyển tiền nội bộ trong doanh nghiệp**: Tối ưu hóa luồng tiền giữa các chi nhánh quốc tế

## Tiết kiệm & Bảo toàn giá trị

- **Bảo vệ trước lạmุด**: Ở các quốc gia có lạmudia cao, USDC là cách bảo tồn giá trị
- **Quỹ phòng ngừa**: Tạo ra nguồn tiềnReady để sử dụng khi cần thiết
- **Kế hoạch tài chính ngắn hạn**: Lưu trữ tiền cho các mục tiêu trong vòng 1-2 năm
- **Di sản & przekazка**: Chuyển giaสิน qua lại các thế hệ một cách dễ dàng và tài chi phí

## Micropayments & Kinh tế sáng tạo

- **Thanh toán nội dung**: Cho người đọc trả tiền cho bài viết, video, âm nhạc từng Mỗi phần
- **Tip cho créator**: Gửi tiền nhỏ về creator mà không mất quá много vào phí giao dịch
- **Trong game**: Mua sắm vật phẩm trong game, thanh toán cho trải nghiệm đặc biệt
- **Dịch vụ trả theo sử dụng**: Thanh toán cho từng lần sử dụng dịch vụ thay vì gói đăng ký cố định

---
transition: slide-right
---

# Tổng kết và khuyến nghị sử dụng

## Stablecoin là cầu nối

- **Kết nối 2 thế giới**: Liên hệ giữa hệ thống tài chính truyền thống và thế giới blockchain
- **Giữ lại lợi thế của cả hai**: Độ ổn định của tiền fiat + hiệu quả và mở rộng của blockchain
- **Cải thiện truy cập tài chính**: Mở rộng dịch vụ tài chính tới những người chưa được phục vụ đầy đủ

## USDC - Lựa chọn hàng đầu

- **Uy tín cao nhất**: Stablecoin được регулируемый và minh bạch nhất trên thị trường
- **Khả năng tương tác rộng**: Hoạt động trên hơn 30 mạng blockchain khác nhau
- **Hệ sinh thái phát triển**: Được hỗ trợ bởi hàng ngàn ứng dụng, ví, sàn giao dịch
- **Tích hợp liên tục**: Đang phát triển tính năng mới như CCTP để nâng cao trải nghiệm người dùng

## Rủi ro cần lưu ý

- **Rủi ro tập trung**: Phụ thuộc vào Circle để quản lý và phát hành USDC
- **Rủi ro pháp luật**: Thay đổi trong môi trường quy định có thể ảnh hưởng đến hoạt động
- **Rủi ro dự trữ**: Mặc dù rất hiếm, nhưng có thể có vấn đề về chất lượng dự trữ
- **Rủi ro smart contract**: Lỗi trong mã nguồn của các ứng dụng sử dụng USDC
- **Rủi ro hoạt động**: Thất bại trong quá trình nạp/rút từ các đối tác

## Hướng dẫn lựa chọn stablecoin

- **Đối với thanh toán hàng ngày**: Chọn fiat-backed như USDC vì ổn định và được chấp nhận rộng
- **Đối với đầu tư DeFi**: Xem xét cả fiat-backed (an toàn) và crypto-backed (tiềm năng lợi nhuận cao hơn)
- **Đối với các ứng dụng cần tối ulti phi tập trung**: Ưu tiên stablecoin có cơ chế minh bạch tốt
- **Luôn kiểm tra**: Độ minh bạch của dự trữ, lịch sử hoạt động, và sự uy tín của nhà phát hành

---
transition: slide-left
layout: thank-you
---

# Cảm ơn bạn đã lắng nghe!

## Tài nguyên tham khảo thêm

- **Trang web chính thức USDC**: https://www.usdc.com
- **Báo cáo minh bạch Circle**: https://www.circle.com/transparency
- **Hướng dẫn sử dụng USDC**: https://www.usdc.com/learn
- **Tài liệu cho nhà phát triển**: https://www.circle.com/developer
