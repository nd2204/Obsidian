a. Khai báo

```cpp
class <tên lớp>
{
	[quyền_truy_xuất:]
	
}
```

`[quyền_truy_xuất:]`
- Khả năng truy xuất thành phần dữ liệu
- Ngầm định là private
*private*: trong phạm vi lớp đó
*public*: ở mọi nơi nếu đối tượng tồn tại
*protected*: trong phạm vi lớp và các lớp con kế thừa

**Khai báo thành phần**
- Tương tự khai báo biến
- Chú ý: Không được khởi tạo giá trị ban đầu

**Khai báo phương thức**
- Phương thức
- Cách 1: Khai báo trong lớp và định nghĩa ngoài lớp
```cpp
<kiểu trả về> tên_lớp::tên_hàm([đối_số])
{
	// Thân hàm
}
```
- Cách 2: Khai báo, định nghĩa trong lớp

**Khai báo đối tượng:**
- Cú pháp `<tên_lớp> <tên_đối_tượng>`

**Truy xuất thành phần:**
- Cú pháp: 
	- Thành phần dữ liệu: `<tên_đối_tượng>.<tên_thành_phần>`
	- Phương thức: `<tên_đối_tượng>.<tên_hàm>([đối_số])`

