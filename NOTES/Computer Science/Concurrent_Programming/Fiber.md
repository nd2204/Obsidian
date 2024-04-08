tags: #computer_science #concurrent_programming #TODO

***
## Fiber

***
[[#Fiber]]
- [[#Tạo và Hủy Fiber]]
- [[#Trạng thái của Fiber]] 
- [[#Di chuyển Fiber]]
- [[#Debug với Fibers]]
- [[#Đọc thêm về Fiber]]

***

Trong hệ thống *đa nhiệm không chiếm quyền (preemptive multitasking)*, lập lịch luồng được xử lý tự động bởi kernel. Điều này thường khá tiện, nhưng thỉnh thoảng lập trình viên muốn có kiểm soát về việc lập lịch của các công việc trong chương trình của họ. Ví dụ, như khi triển khai *hệ thống công việc (job system)* cho một game engine (nhắc đến ở đây [TODO://add_external_link_here]), chúng ta có thể muốn cho phép công việc nhường lại rõ ràng CPU cho công việc khác, mà không phải lo đến khả năng chiếm quyền "rút ván gỗ" khỏi chân của các tiến trình khi nó đang chạy. Nói cách khác, thỉnh thoảng chúng ta muốn sử dụng *đa nhiệm hợp tác (cooperative multitasking)* thay vi *đa nhiệm chiếm quyền*.


> [!important]
Một số hệ điều hành cung cấp cơ chế đa nhiệm hợp tác: Chúng được biết đến là fiber. Một fiber rất giống với một thread, trong đó nó đại diện cho một phiên bản đang chạy của một dòng lệnh ngôn ngữ máy.

- Một fiber có một call stack và trạng thái thanh ghi (một ngữ cảnh thực thi) giống như thread. Tuy nhiên, điểm khác biệt lớn đó là fiber không bao giờ được lập lịch trực tiếp bởi kernel. Thay vào đó, fibers chạy trong ngữ cảnh của một thread, và được lên lịch một cách hợp tác với nhau.

Dưới đây, chúng ta sẽ nói cụ thể về fibers của HĐH Windows. Một số HĐH khác, như là PlayStation 4 SDK của Sony, cung cấp API cho fiber khá tương đồng.

***
### Tạo và Hủy Fiber

Ta chuyển từ tiến trình dạng thread sang dạng fiber kiểu gì? Mọi tiến trình đều bắt đầu với một thread khi nó mới chạy; do đó các tiến trình mặc định ở dạng thread. Khi một thread gọi hàm *ConvertThreadToFiber()*, một fiber mới được tạo trong ngữ cảnh của thread gọi nó. Điều này "bootstrap"[^1], 

How do we convert a thread-based process into a fiber-based one? Every
process starts with a single thread when it first runs; hence processes are thread-based by default. When a thread calls the function ConvertThreadTo Fiber(), a new fiber is created within the context of the calling thread. This “bootstraps” the process so that it can create and schedule more fibers. Other fibers are created by calling CreateFiber() and passing it the address of a function that will serve as its entry point. Any running fiber can cooperatively schedule a different fiber to run within its thread by calling SwitchTo Fiber(). When a fiber is no longer needed, it can be destroyed by calling DeleteFiber().



***
### Trạng thái của Fiber 
A fiber can be in one of two states: Active or Inactive. When a fiber is in its Active state, it is assigned to a thread, and executes on its behalf. When a fiber is in its Inactive state, it is sitting on the sidelines, not consuming the resources of any thread, just waiting to be activated. Windows calls an Active fiber the “selected” fiber for a given thread. An Active fiber can deactivate itself and make another fiber active by calling SwitchToFiber(). This is the only way that fibers can switch between the Active and Inactive states.
Whether or not an Active fiber is actively executing on a CPU core is determined by the state of its enclosing thread. When an Active fiber’s thread is in the Running state, that fiber’s machine language instructions are being executed on a core. When an Active fiber’s thread is in the Runnable or Blocked state, its instructions of course cannot execute, because the entire thread is sitting on the sidelines, either waiting to be scheduled on a core or waiting for a condition to become true.
It’s important to understand that fibers don’t themselves have a Blocked state, the way threads do. In other words, it’s not possible to put a fiber to sleep waiting on a condition. Only its thread can be put to sleep. Because of this restriction, whenever a fiber needs to wait for a condition to become true, it either busy-waits or it calls SwitchToFiber in order to yield control to another fiber while it waits. Making a blocking OS call from within a fiber is usually a pretty big no-no. Doing so would put the fiber’s enclosing thread to sleep, thereby preventing that fiber from doing anything—including scheduling other fibers to run cooperatively.

***
### Di chuyển Fiber
A fiber can migrate from thread to thread, but only by passing through its Inactive state. As an example, consider a fiber F that is running within the context of thread A. Fiber F calls SwitchToFiber(G) to activate a different fiber named G inside thread A. This puts fiber F into its Inactive state (meaning it is no longer associated with any thread). Now let’s assume that another thread named B is running fiber H. If fiber H calls SwitchToFiber(F), then fiber F has effectively migrated from thread A to thread B.

***
### Debug với Fibers
Because fibers are provided by the OS, debugging tools and profiling tools should be able to “see” them, just the way they can “see” threads. For example, when debugging on the PS4 using SN Systems’ Visual Studio debugger plugin for Clang, fibers automatically show up in the Threads window as if they were threads. You can double-click a fiber to activate it within the Watch and Call Stack windows, and then walk up and down its call stack just as you normally would with a thread.
If you’re considering using fibers in your game engine, it’s a good idea to check out your debugger’s capabilities on your target platform before you commit a lot of time and effort to a fiber-based design. If your debugger and/or target platform doesn’t provide good tools for debugging fibers, that could be a deal breaker.

***
### Đọc thêm về Fiber
You can read more about Windows fibers here: https://msdn.microsoft.com/
en-us/library/windows/desktop/ms682661(v=vs.85).aspx.


[^1]:  khi nói về "bootstrapping" như một động từ, thì nó thường ám chỉ đến quá trình khởi đầu hoặc khởi tạo một hệ thống, một ứng dụng, hoặc một dự án phần mềm từ đầu, thường thông qua việc sử dụng một tập hợp các công cụ, framework hoặc các nguyên tắc được thiết kế để giúp việc này trở nên dễ dàng và hiệu quả hơn. Bootstrapping cũng có thể ám chỉ đến việc tự động hóa quy trình khởi đầu hoặc việc cấu hình một hệ thống. Trong ngữ cảnh này, "bootstrapping" thường được sử dụng để chỉ các hoạt động như cài đặt, khởi chạy, hoặc chuẩn bị môi trường làm việc cho một ứng dụng hoặc một hệ thống.