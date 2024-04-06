
tags: #computer_science #concurrent_programming #TODO

---

Một *luồng (thread)* đóng gói một phiên chạy của một dòng (stream) lệnh ngôn ngữ máy (machine language instruction). mỗi thread trong một tiến trình bao gồm:
- Một *thread id (TID)* độc nhất trong tiến trình của nó, nhưng có thể không độc nhất trên toàn bộ hệ điều hành.
- *Call stack của thread* - một khối liên tục bộ nhớ chứa *các khung ngăn xếp (stack frames)* của tất cả các hàm đang được thực thi.
- Giá trị của tất cả các *thanh ghi (registers)* đặc biệt và chung bao gồm cả *con trỏ lệnh (instruction pointer/IP)* được trỏ đến instruction hiện tại trong instruction stream của thread, *con 
  trỏ cơ sở (base pointer/BP)* và *con trỏ ngăn xếp (stack pointer/SP)* xác định stack frame hiện tại.
- Một *khối (block)* các bộ nhớ chung được liên kết với mỗi thread, được biết đến là *bộ nhớ cục bộ của luồng (thread local storage/TLS)*

Mặc định một tiến trình bao gồm một thread `main` và do đó thực thi một dòng lệnh duy nhất. Thread này sẽ bắt đầu thực thi tại *điểm vào (entry point)* của chương trình - Thường là hàm `main()`. Tuy nhiên, tất cả các hệ điều hành hiện đại đều có khả năng thực thi *nhiều dòng lệnh đồng thời (concurrent instruction stream)* trong *ngữ cảnh (context)* của một tiến trình đơn. 

---

#### Thư viện thread
Thread thường bao gồm các hoạt động cơ bản sau:
- **Create** - một *hàm (function)* hoặc *hàm tạo của lớp (class constructor)* để tạo một thread mới
- **Terminate** - một hàm để kết thúc thread gọi nó
- **Request to exit** - một hàm cho phép một thread yêu cầu thread khác thoát
- **Sleep** - một hàm khiến cho thread hiện tại ngủ trong một khoảng thời gian được chỉ định
- **Yeild** - một hàm nhường phần còn lại của lát cắt thời gian của thread để các thread khác có cơ hội để chạy
- **Join** - một hàm đặt thread gọi vào chế độ ngủ cho đến khi một luồng khác hoặc một nhóm các luồng đã kết thúc

---
##### Tạo và Hủy thread
Ta có thể tạo thread bằng cách sử dụng *pthread_create()* (POSIX threads), *CreateThread()* (Windows), hay bằng cách tạo một *thể hiện (Instance)* của lớp Thread như là *std::thread* (C++11) -> Chương trình sẽ bắt đầu thực thi tại *hàm điểm vào (entry point function)* có địa chỉ được cung cấp bởi người gọi.

Khi được tạo ra, một luồng sẽ tiếp tục tồn tại cho đến khi nó kết thúc. Việc thực thi của một luồng có thể kết thúc theo một số cách sau:

- Nó có thể kết thúc "tự nhiên" bằng cách trả về từ hàm điểm nhập của nó. (Trong trường hợp đặc biệt của luồng chính, việc trả về từ *main()* không chỉ kết thúc luồng, mà còn kết thúc toàn bộ quá trình.)
- Nó có thể gọi một hàm như *pthread_exit()* để kết thúc một cách rõ ràng việc thực thi của nó trước khi trả về từ hàm điểm nhập của nó.
- Nó có thể bị hủy bỏ bên ngoài bởi một luồng khác. Trong trường hợp này, luồng bên ngoài đưa ra yêu cầu hủy bỏ luồng cụ thể, nhưng luồng đó có thể không phản ứng ngay lập tức vào yêu cầu, hoặc nó có thể bỏ qua yêu cầu hoàn toàn. Khả năng hủy bỏ của một luồng được xác định khi luồng đó được tạo ra.
- Nó có thể bị hủy bỏ một cách bắt buộc vì quá trình của nó đã kết thúc. (Một quá trình kết thúc khi luồng chính trả về từ hàm điểm nhập main(), khi bất kỳ luồng nào gọi exit() để chấm dứt quá trình một cách rõ ràng, hoặc khi một đối tác bên ngoài hủy bỏ quá trình

---

##### Nhập Thread
