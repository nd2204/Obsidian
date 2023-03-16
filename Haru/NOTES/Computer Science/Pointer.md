tags: #Programming 

### CON TRỎ LÀ GÌ

> [!tip] KHÁI NIỆM
> Con trỏ (Pointer) là một biến (variable) đặc biệt có khả năng chứa *địa chỉ bộ nhớ*

![[Pointer0]]

giả sử ta có

- Con trỏ được sử dụng rộng rãi trong các [[ProgrammingLanguage#LOW LEVEL PROGRAMMING LANGUAGE|Ngôn ngữ bậc thấp]] như C và C++ để làm việc trực tiếp với bộ nhớ khiến nó trở thành công cụ mạnh mẽ trong việc tối ưu code

### CÁCH SỬ DỤNG CON TRỎ

- Một con trỏ được khai báo bằng cách sử dụng ký tự ngôi sao "``*``" như sau: `int* ptr` hoặc `int *ptr`
	- Ở đây chúng ta đã khai báo một *biến con trỏ kiểu nguyên* được dùng để chỉ tới một giá trị cùng kiểu nguyên chưa xác định (ta sẽ gán giá trị ở đoạn sau).
- Để truy cập giá trị của biến được chỉ tới ta sử dụng "Toán tử tham chiếu (Dereferecing Operator)" cũng sử dụng ký tự "``*``"
	- Ví dụ nếu `ptr` chỉ tới biến nguyên `x`, ta truy cập *giá trị* của `x` bằng cách dùng biểu thức `*ptr*`.
```c
#include <stdio.h>
int main() {
	int x = 10;
	int* ptr; //Hoặc int *ptr bản chất chúng là như nhau viết như này tốt hơn cho việc đọc code
	ptr = &x
	// Ở đây nếu ta in ra màn hình ptr sẽ bằng địa chỉ của x còn *ptr sẽ bằng giá trị của x
	printf("%d",)
}
```