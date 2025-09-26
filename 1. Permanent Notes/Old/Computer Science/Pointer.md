tags: #Programming 

### CON TRỎ LÀ GÌ

> [!important] Con trỏ (Pointer) là một biến (variable) đặc biệt có khả năng chứa *địa chỉ bộ nhớ*

giả sử ta có biến `i` chiếm 2 byte (2 ô bộ nhớ trong ví dụ này) và con trỏ `p` chỉ đến `i` -> nó sẽ chỉ đến địa chỉ của i mà byte thứ nhất (ô thứ nhất) được lưu

![[Pointer0]]

- Con trỏ được sử dụng rộng rãi trong các [[ProgrammingLanguage#LOW LEVEL PROGRAMMING LANGUAGE|Ngôn ngữ bậc thấp]] như C và C++ để làm việc trực tiếp với bộ nhớ khiến nó trở thành công cụ mạnh mẽ trong việc tối ưu code

### KHAI BÁO KIỂU DỮ LIỆU CHO CON TRỎ
- Bản thân biến con trỏ không có kiểu dữ liệu riêng nào cho nên ta phải khai báo cho nó kiểu dữ liệu nào đó ```kieu_du_lieu *ten_con_tro``` 
	- kieu_du_lieu: kiểu dữ liệu mà con trỏ sẽ chỉ tới
	- ten_con_trỏ: tên cho biến con trỏ


### CÁCH SỬ DỤNG CON TRỎ

- Một con trỏ được khai báo bằng cách sử dụng ký tự ngôi sao "``*``" như sau: `int* ptr` hoặc `int *ptr`
	- Ở đây chúng ta đã khai báo một *biến con trỏ kiểu nguyên* được dùng để chỉ tới một giá trị cùng kiểu nguyên chưa xác định (ta sẽ gán giá trị ở đoạn sau).
- Để truy cập giá trị của biến được chỉ tới ta sử dụng "Toán tử tham chiếu (Dereferece Operator)" cũng sử dụng ký tự "``*``"
	- Ví dụ nếu `ptr` chỉ tới biến nguyên `x`, ta truy cập *giá trị* của `x` bằng cách dùng biểu thức `*ptr*`.
```c
#include <stdio.h>
int main() {
	int x = 10;
	int* ptr; //Hoặc int *ptr bản chất chúng là như nhau viết như này tốt hơn cho việc đọc code
	ptr = &x
	// Ở đây nếu ta in ra màn hình ptr sẽ bằng địa chỉ của x còn *ptr sẽ bằng giá trị của x
	printf("%d",*ptr);
}
```

