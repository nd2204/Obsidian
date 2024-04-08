
tags: #computer_science #concurrent_programming

***
## Luồng (Thread)

---
[[#Luồng (Thread)]]
- [[#Thư viện thread (Thread Libraries)]]
- [[#Tạo và Hủy thread (Thread Creation and Termination)]]
- [[#Nhập Thread (Joining Threads)]]
- [[#Dò, Chặn và Nhường lại (Polling, Blocking and Yielding)]]
	- [[#Dò (polling)]]
	- [[#Chặn (Blocking)]]
	- [[#Nhường lại (Yielding)]]
- [[#Chuyển đổi ngữ cảnh (Context Switching)]]
- [[#Ưu tiên và liên kết của luồng (Thread priority and affinity)]]
- [[#Bộ nhớ cục bộ của luồng (Thread Local Storage/TLS)]]
***

> [!important] Khái niệm
Một *luồng (thread)* đóng gói một phiên chạy của một dòng (stream) lệnh ngôn ngữ máy (machine language instruction). mỗi thread trong một *tiến trình (process)* bao gồm:

- Một *thread id (TID)* độc nhất trong tiến trình của nó, nhưng có thể không độc nhất trên toàn bộ hệ điều hành.
- *Call stack của thread* - một khối liên tục bộ nhớ chứa *các khung ngăn xếp (stack frames)* của tất cả các hàm đang được thực thi.
- Giá trị của tất cả các *thanh ghi (registers)* đặc biệt và chung bao gồm cả *con trỏ lệnh (instruction pointer/IP)* được trỏ đến instruction hiện tại trong instruction stream của thread, *con 
  trỏ cơ sở (base pointer/BP)* và *con trỏ ngăn xếp (stack pointer/SP)* xác định stack frame hiện tại.
- Một *khối (block)* các bộ nhớ chung được liên kết với mỗi thread, được biết đến là *bộ nhớ cục bộ của luồng (thread local storage/TLS)*

Mặc định một tiến trình bao gồm một thread `main` và do đó thực thi một dòng lệnh duy nhất. Thread này sẽ bắt đầu thực thi tại *điểm vào (entry point)* của chương trình - Thường là hàm `main()`. Tuy nhiên, tất cả các hệ điều hành hiện đại đều có khả năng thực thi *nhiều dòng lệnh đồng thời (concurrent instruction stream)* trong *ngữ cảnh (context)* của một tiến trình đơn. 
***
### Thư viện thread (Thread Libraries)
Thread thường bao gồm các hoạt động cơ bản sau:
- **Create** - một *hàm (function)* hoặc *hàm tạo của lớp (class constructor)* để tạo một thread mới
- **Terminate** - một hàm để kết thúc thread gọi nó
- **Request to exit** - một hàm cho phép một thread yêu cầu thread khác thoát
- **Sleep** - một hàm khiến cho thread hiện tại ngủ trong một khoảng thời gian được chỉ định
- **Yield** - một hàm nhường phần còn lại của lát cắt thời gian của thread để các thread khác có cơ hội để chạy
- **Join** - một hàm đặt thread gọi vào chế độ ngủ cho đến khi một luồng khác hoặc một nhóm các luồng đã kết thúc

---
### Tạo và Hủy thread (Thread Creation )

> [!important] Tạo thread
Ta có thể tạo thread bằng cách sử dụng *pthread_create()* (POSIX threads), *CreateThread()* (Windows), hay bằng cách tạo một *thể hiện (Instance)* của lớp Thread như là *std::thread* (C++11) -> Chương trình sẽ bắt đầu thực thi tại *hàm điểm vào (entry point function)* có địa chỉ được cung cấp bởi người gọi.

> [!important] Hủy thread
Khi được tạo ra, một luồng sẽ tiếp tục tồn tại cho đến khi nó kết thúc. Việc thực thi của một luồng có thể kết thúc theo một số cách sau:

- Nó có thể kết thúc "tự nhiên" bằng cách nhường về từ hàm điểm nhập của nó. (Trong trường hợp đặc biệt của luồng chính, việc trả về từ *main()* không chỉ kết thúc luồng, mà còn kết thúc toàn bộ quá trình.)
- Nó có thể gọi một hàm như *pthread_exit()* để kết thúc một cách rõ ràng việc thực thi của nó trước khi trả về từ hàm điểm nhập của nó.
- Nó có thể bị hủy bỏ bên ngoài bởi một luồng khác. Trong trường hợp này, luồng bên ngoài đưa ra yêu cầu hủy bỏ luồng cụ thể, nhưng luồng đó có thể không phản ứng ngay lập tức vào yêu cầu, hoặc nó có thể bỏ qua yêu cầu hoàn toàn. Khả năng hủy bỏ của một luồng được xác định khi luồng đó được tạo ra.
- Nó có thể bị hủy bỏ một cách bắt buộc vì quá trình của nó đã kết thúc. (Một quá trình kết thúc khi luồng chính trả về từ hàm điểm nhập main(), khi bất kỳ luồng nào gọi exit() để chấm dứt quá trình một cách rõ ràng, hoặc khi một đối tác bên ngoài hủy bỏ quá trình

***
### Nhập Thread (Joining Threads)

> [!important]
Không hiếm để một thread tạo ra một hoặc nhiều thread con, tự nó thực hiện một số công việc hữu ích và đợi cho thread con của nó hoàn thành công việc của mình.

VD: Giả sử thread main muốn thực hiện 1000 phép tính, và hãy cho rằng chương trình này được chạy trên một hệ thông 4 nhân cpu. Cách tiếp cận hiệu quả nhất sẽ là chia công việc thành 4 mảng bằng nhau, và tạo 4 thread để xử lý song song. Một khi việc tính toán hoàn tất, hãy giả sử rằng luồng main muốn thực hiện *kiểm tra tổng (checksum)* của kết quả. Code mẫu sẽ trông như sau: 

```cpp
ComputationResult g_aResult[1000];
void Compute(void* arg)
{
	uintptr_t startIndex = (uintptr_t)arg;
	uintptr_t endIndex = startIndex + 250;
	for (uintptr_t i = startIndex; i < endIndex; ++i) {
		g_aResult[i] = ComputeOneResult(...);
	}
}

void main() {
	pthread_t tid[4];
	for (int i = 0; i < 4; ++i) {
		const uintptr_t startIndex = i * 250;
		pthread_create(&tid[i], nullptr,
		Compute, (void*)startIndex);
	}
	// perhaps do some other useful work...
	// wait for computations to be done
	for (int i = 0; i < 4; ++i) {
		pthread_join(&tid[i], nullptr);
	}
	// all threads are done, so we can do our checksum
	unsigned checksum = Sha1(g_aResult, 1000*sizeof(ComputationResult));
	// ...
}
```

***
### Dò, Chặn và Nhường lại (Polling, Blocking and Yielding)

> [!important]
Thông thường thì một thread chạy cho đến khi nó kết thúc. Nhưng thỉnh thoảng một thread đang chạy cần phải đợi một số *sự kiện (event)* xảy ra.

Ví dụ: Một thread có thể cần phải đợi một hoạt động tốn thời gian hoàn tất, hay để một số tài nguyên trở nên có sẵn. Trong trường hợp đó, chúng ta có 3 lựa chọn:

- Thread có thể *dò (poll)*,
- Nó có thể *chặn (block)*, hay
- Nó có thể *Nhường lại (yield)* khi đang *dò*

#### Dò (polling)

- Việc *dò* thường liên quan đến một thread đang nằm trong vòng lặp chặt, đợi một điều kiện trở thành true:

```cpp
// wait for condition to become true
while (!checkCondition()) {
	// twiddle thumbs
}
// The condition is now true and we can continue 
```

- *spin-wait / busy-wait*: Cách tiếp cận này có vẻ đơn giản, nhưng lại có khả năng đốt cháy các *chu kỳ cycle* của CPU một cách không cần thiết. 
#### Chặn (Blocking)

- busy-wait không phải là một lựa chọn tốt nếu chúng ta mong đợi thread đợi một điều kiện trở thành true trong một khoảng thời gian tương đối lâu. Thay vào đó ta có thể đưa thread về trạng thái ngủ để nó không tốn tài nguyên CPU, và dựa vào kernel để gọi nó dậy khi mà điều kiện trở thành true ở một thời điểm trong tương lại. Đây gọi là *chặn* thread. - Thread được block bởi một OS call được biết đến là hàm chặn *(blocking function)*. Nếu điều kiện đã trở thành true tại thời điểm hàm chặn được gọi, thì hàm đó sẽ không thực sự chặn - nó sẽ chỉ đơn giản là *trả về (return)* ngay lập tức. Nhưng nếu điều kiện là false, thì kernel sẽ đưa thread đi ngử, và thêm thread với điều kiện mà nó đang chờ vào một bảng. Về sau, nếu điều kiện trở thành true, thì kernel sẽ sử dụng bảng nội bộ này để xác định và đánh thức bất cứ thread nào đang đợi điều kiện đó.
- Một số ví dụ cho các hàm của Hệ điều hành có thể dùng để chặn là:
	- *Mở file* - Hầu hết các hàm như *fopen()* sẽ chặn thread gọi nó cho đến khi file được mở (điều này có thể chiếm hàng trăm hoặc hàng nghìn chu kỳ CPU)
	- *Sử dụng hàm ngủ* - Một số hàm đưa thread gọi nó vào trạng thái ngủ trong một khoảng thời gian chỉ định. vd: *usleep()* (linux), *Sleep()* (Windows), *std::this_thread::sleep_until()* (C++) và *pthread_sleep()* (POSIX threads).
	- *Nhập với các thread khác*
	- *Đợi khóa mutex* - Hàm giống như *pthread_mutex_wait()* sẽ cố đạt được một khóa độc quyền trên một tài nguyên thông qua một đối tượng hệ điều hành như là *mutex*. Nếu không có thread nào khác giữ khóa đấy, thì hàm sẽ cung cấp một khóa đến thread gọi và trả về ngay lập tức; nếu không, thread gọi sẽ được cho ngủ cho đến khi khóa được nhận.

#### Nhường lại (Yielding)

- Kĩ thuật này rơi vào giữa *dò* và *chặn*.  Thread sẽ dò điều kiện ở trong một vòng lặp, nhưng với mỗi vòng lặp nó sẽ bỏ khoảng dư thời gian cắt của nó bằng cách gọi *pthread_yield()* (POSIX), *Sleep(0)* hay *SwitchToThread()* (Windows), hay một system call tương ứng. VD:

```cpp
// Đợi một điều kiện trở thành true
while (!checkCondition()) {
	// Nhường phần dư của thời gian cắt của thread này
	pthread_yield(nullptr);
}
// Điều kiện trở thành true và ta có thể tiếp tục...
```

- Cách tiếp cận này đem lại lợi ích là ít chu kỳ bị lãng phí và đỡ tốn hao điện hơn là vòng lặp thuần busy-wait.

***
### Chuyển đổi ngữ cảnh (Context Switching)

Mỗi Thread được duy trì bởi kernel tồn tại ở một trong 3 trạng thái:
- *Đang chạy (Running)* - Thread đang chủ động chạy trên một nhân (core)
- *Có thể chạy (Runnable)* - Thread có thể chạy, nhưng đang đợi khoảng cắt thời gian trên một nhân
- *Bị chặn (Blocked)* - Thread đang ngủ, đợi một điều kiện trở thành true

Chuyển đổi ngữ cảnh xảy ra bất cứ khi nào khi kernel khiến thread chuyển tử trạng thái này sang trạng thái khác. Chủ yếu là để phản hồi những *gián đoạn từ phần cứng (Hardware interrupts)*, Chặn kernel call, Hay chuyển đổi điều kiện

Trong quá trình chuyển đổi ngữ cảnh, nội dung trong các thanh ghi của CPU của thread hiện tại sẽ được lưu vào bộ nhớ, và nếu về sau thread chuyển về trạng thái Đang chạy thì những nội dung được lưu sẽ được phục hồi

> [!note]
Call stack của thread sẽ được lưu *ngầm định (implicitly)* và được phục hồi khi chuyển đổi ngữ cảnh, nằm trong một vùng riêng của *bộ nhớ ánh xạ ảo (vỉrtual memory map)* của tiến trình. Hơn nữa, nếu một thread chuyển giữa các tiến trình, kernel cũng sẽ phải lưu và phục hồi trạng thái của bộ nhớ ánh xạ ảo, bao gồm cả *bảng trang ảo (virtual page table)* và *bộ nhớ cục bộ của thread (TLB)*, khiến cho việc chuyển đổi qua các tiến trình đắt đỏ hơn là trong tiến trình. 

---
### Ưu tiên và liên kết của luồng (Thread priority and affinity)

Đa phần, kernel của hệ điều hành xử lý việc lên lịch cho các luồng chạy trên các lõi có sẵn trong máy. Tuy nhiên, các lập trình viên có hai cách để ảnh hưởng đến cách các luồng được lên lịch: *ưu tiên (priority)* và *liên kết (affinity)*.

*Ưu tiên* của một luồng kiểm soát cách nó được lên lịch so với các luồng chạy được khác trong hệ thống. Các luồng có ưu tiên cao thường được ưu tiên hơn so với các luồng có ưu tiên thấp hơn.
- *Các hệ điều hành khác nhau cung cấp các cấp độ ưu tiên khác nhau. Ví dụ, các luồng Windows có thể thuộc một trong sáu lớp ưu tiên, và có bảy cấp độ ưu tiên riêng biệt trong mỗi lớp. Hai giá trị này được kết hợp để tạo ra tổng cộng 32 "ưu tiên cơ bản" khác nhau được sử dụng khi lên lịch cho các luồng.*

Quy tắc *lập lịch luồng (thread scheduling)* đơn giản nhất là: Miễn là ít nhất một luồng chạy có ưu tiên cao hơn tồn tại, không có luồng có ưu tiên thấp hơn nào sẽ được lên lịch chạy. Ý tưởng đằng sau cách tiếp cận này là hầu hết các luồng trong hệ thống sẽ được tạo ra ở một mức độ ưu tiên mặc định nào đó, và do đó sẽ chia sẻ tài nguyên xử lý một cách công bằng. Nhưng đôi khi, một luồng có ưu tiên cao hơn có thể chuyển sang trạng thái đang chạy. Khi đó, nó chạy gần như ngay lập tức, hy vọng rằng nó sẽ thoát sau một khoảng thời gian tương đối ngắn và trả lại kiểm soát cho tất cả các luồng có ưu tiên thấp hơn.
- Một quy tắc lập lịch dựa trên ưu tiên đơn giản như vậy có thể dẫn đến tình huống mà một số lượng nhỏ các luồng có ưu tiên cao chạy liên tục, do đó ngăn chặn bất kỳ luồng có ưu tiên thấp hơn nào khác chạy. Điều này được gọi là *đói (starvation)*. Một số hệ điều hành cố gắng giảm thiểu tác động tiêu cực của đói bằng cách giới thiệu các ngoại lệ cho quy tắc lập lịch đơn giản nhằm cung cấp ít nhất một thời gian CPU cho các luồng có ưu tiên thấp hơn đang đói.

Một cách khác mà các lập trình viên có thể kiểm soát lập lịch luồng là thông qua liên kết của một luồng. Cài đặt này yêu cầu kernel hoặc khóa một luồng vào một lõi cụ thể, hoặc ít nhất là nó sẽ ưu tiên một hoặc nhiều lõi hơn so với các lõi khác khi lên lịch cho luồng.\

***
### Bộ nhớ cục bộ của luồng (Thread Local Storage/TLS)

Tất cả các luồng trong một tiến trình chia sẻ các tài nguyên của tiến trình đó, bao gồm không gian bộ nhớ ảo của nó. Tuy nhiên, có một ngoại lệ cho quy tắc này - mỗi luồng được cấp một khối bộ nhớ riêng biệt được gọi là *bộ nhớ cục bộ của luồng (TLS)*. Điều này cho phép các luồng theo dõi dữ liệu mà không nên được chia sẻ với các tiến trình khác. Ví dụ, mỗi luồng có thể duy trì một *trình phân bổ bộ nhớ (memory allocator)* riêng. Chúng ta có thể nghĩ về khối bộ nhớ TLS như là một phần của ngữ cảnh thực thi của luồng.

Trong thực tế, các khối bộ nhớ TLS thường có thể nhìn thấy bởi tất cả các luồng trong một tiến trình. Thông thường, chúng không được bảo vệ, giống như các trang bộ nhớ ảo của hệ điều hành. Thay vào đó, hệ điều hành cấp mỗi luồng một khối TLS riêng của nó, tất cả đều được ánh xạ vào không gian địa chỉ ảo của tiến trình tại các địa chỉ số khác nhau, và một cuộc gọi hệ thống được cung cấp cho phép bất kỳ luồng nào lấy địa chỉ của khối TLS riêng của mình.

---
#### REFERENCES
1. Game Engine Architecture - 3nb