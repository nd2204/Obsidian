tags: #Algorithm #DataScience

---
### BẢN CHẤT
---

> [!INFO]
> **Linear Regression** (Hồi quy tuyến tính) là một trong những thuật toán máy học (machine learning) phổ biến nhất được sử dụng để dự đoán giá trị của một biến số dựa trên giá trị của các biến số đầu vào khác: Dựa trên mối quan hệ tuyến tính giữa biến số đầu vào và biến số đầu ra, và cố gắng tìm một đường thẳng (hay siêu mặt phẳng trong không gian đa chiều) sao cho khoảng cách giữa các điểm dữ liệu và đường thẳng đó là nhỏ nhất.

![[LinearRegression]]

---
### THUẬT TOÁN
---
Phép toán line of regression: $$\boxed{\Large{y=mx+b}}$$
- $\large{m}$ là độ dốc (slope). Có nghĩa là mức độ mà giá trị $\large{y}$ tăng với mỗi giá trị $\large{x}$
- $\large{b}$ là giao điểm của đường thẳng với trục y (hay còn là độ rời của nó trên trục y)

Trong đó ta có thể xác định độ dốc $m$ bằng cách chọn ra hai điểm trên đường thẳng (p1 và p2) công thức: $$\boxed{\Large{\frac{\triangle y}{\triangle x}=\frac{y_2-y_1}{x_2-x_1}}=m}$$

![[LinearRegression1]]

Một khi máy tính đã tính xong đường thẳng nó sẽ được dùng để dự đoán giá trị cụ thể nào đó.

> [!Note] Lưu ý
> Ví dụ trên được đặt trong không gian 2D. Thực tế thì hầu hết những đường thẳng phù hợp sẽ lan ra các chiều không gian cao hơn và khi đó ta sẽ có thêm vô số các giá trị độ dốc $\large{m}$ 

---
### ỨNG DỤNG
---
Thuật toán Linear Regression thường được sử dụng trong các bài toán dự đoán giá cổ phiếu, giá nhà đất, doanh số bán hàng, chiều cao của một người dựa trên cân nặng, và nhiều bài toán khác. Thuật toán này có thể được áp dụng cho cả dữ liệu một chiều và dữ liệu đa chiều, tuy nhiên với dữ liệu đa chiều, thuật toán còn được gọi là Multiple Linear Regression.

---
### CÁC BƯỚC
---
Các bước chính trong thuật toán Linear Regression bao gồm: chuẩn bị dữ liệu, xác định hàm mất mát (loss function), tối ưu hàm mất mát (thông qua các phương pháp như Gradient Descent), và đánh giá hiệu quả của mô hình. Thuật toán Linear Regression có thể được triển khai bằng nhiều ngôn ngữ lập trình khác nhau, bao gồm Python, R, MATLAB, và Java.