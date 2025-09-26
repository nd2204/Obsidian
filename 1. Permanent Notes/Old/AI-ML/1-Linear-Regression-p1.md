tags: #DataScience #Programming #MachineLearning #AI

---
### DỮ LIỆU (DATA)
---

Trong hướng dẫn này ta sử dụng thuật toán [[Linear-Regression]] để đoán trước điểm tổng kết dựa vào các thuộc tính cho trước. Để làm được điều này ta cần phải có dữ liệu.

Ta sẽ dùng bộ dữ liệu về Trình độ cá nhân của học sinh ở [Đây]([UCI Machine Learning Repository: Student Performance Data Set](https://archive.ics.uci.edu/ml/datasets/Student+Performance)) ta tải xuống bộ dữ liệu này dùng link dười đây:

Tải xuống bộ dữ liệu: [STUDENT PERFORMANCE DATA SET](http://techwithtim.net/wp-content/uploads/2019/01/student-mat.csv)

- Bộ dữ liệu này bao gồm *33* thuộc tính / sinh viên
	- thuộc tính:![[Student Performance Data Set#**Attribute Information:**]]
- Thường thi ta không cân nhắc nhiều thuộc tính như vậy khi dự đoán điểm của học sinh. Do vậy ta sẽ cắt giảm bớt bộ dữ liệu này và để lại những thuộc tính ta cần.

---
# 1. Import Modules/Packages
---

trước khi code ta nên **import** những gói, môđun sau:

```python

import pandas as pd
import numpy as np
import sklearn
from sklearn import linear_model
from sklearn.utils import shuffle

```

### Problems when importing
1. sklearn is not recognized
- Nếu *sklearn* không được nhận diện trong pycharm, ta có thể sửa bằng những cách sau:
	- Hãy chắc rằng *scikit-learn* (*sklearn*) được cài dặt trong môi trường pycharm. Bạn thực hiện bằng cách dùng terminal trong pycharm (alt+F12) gõ `pip freeze`. Tìm *scikit-learn* bên trong danh sách. Nếu không có bạn tải bằng cách gõ `pip install scikit-learn` bên trong terminal.
	- Make sure that the Python interpreter you are using in PyCharm is the same one where `scikit-learn` is installed. To check this, go to `File -> Settings -> Project: <your project name> -> Project Interpreter`. Ensure that the Python interpreter listed here is the same one where `scikit-learn` is installed. 
	- If you are using a virtual environment, make sure that it is activated. You can do this by checking the terminal prompt. If it starts with `(venv)`, then the virtual environment is activated. If not, you can activate it by typing `source venv/bin/activate` (for a Linux or macOS environment) or `venv\Scripts\activate` (for a Windows environment) in the terminal.
	- If none of the above steps work, try restarting PyCharm and your computer.   
2. pandas, numpy is not recognized: fix tương tự sklearn

If you are still having issues with `sklearn` not being recognized in PyCharm, you may need to provide more information about your specific setup and error messages to troubleshoot further.

---
# 2. LOADING OUR DATA
---

Sau khi ta tải xuống bộ dữ liệu (Trương hợp này là file `student-mat.csv`) và đặt nó vào trong thư mục chính (main directory) và ta có thể load nó bằng cách dùng mô đun pandas:

```python
data = pd.read_csv("student-mat.csv", sep=";")
# Do dữ liệu của ta được ngăn cách bới dấu ; nên ta phải dung sep=";" (sep - separator)
```

để xem khung dữ liệu (data frame) vừa được load ta viết: 

```python
print(data.head())
```

---
# 3. TRIMMING OUR DATA
---

Ở trường hợp này ta có quá nhiều thuộc tính và không phải tất cả đều cần thiết nên ta sẽ chỉ chọn những thuộc tính mình muốn sử dụng, ta có thể chọn bằng cách:

```python
data = data[["G1","G2","G3","studytime","failures","absences"]]
```

bây giờ khung dữ liệu của ta chỉ còn gắn với 6 thuộc tính trên.

---
# 4. SEPARATING OUR DATA
---

Bây giờ chúng ta cần tách dữ liệu vừa cắt bớt thành 4 mảng (array). Tuy nhiên, trước khi ta có thể làm điều đó thì ta phải xác định thuộc tính mà ta muốn dự đoán (predict).
- Thuộc tính này được gọi là mác (label). 
- Những thuộc tính khác sẽ quyết định mác của ta được biết là tính năng (features).

Bây giờ ta sử dụng [numpy](https://numpy.org/doc/stable/user/index.html#user) để tạo hai mảng:
- Một để chứa mác (label)
- Một để chứa tính năng (feature)

```python
predict = "G3"

X = np.array(data.drop([predict],1)) #Features
y = np.array(data[predict]) #Labels
```

bạn có thể chạy thử print(X) và print(y) để hiểu rõ hơn đoạn code trên

Sau khi ta tách xong dữ liệu test và train. ta sẽ dùng 90% dữ liệu để train và 10% còn lại để test. Lý do là ta không muốn test model của mình với dữ liệu nó đã biết.ô

```python
x_train, x_test, y_train, y_test = sklearn.model_selection.train_test_split(X,y,test_size=0.1)
```

Bây giờ ta có thể sử dụng thuật toán Hồi quy tuyến tính ([[Linear-Regression]]) 

---

NEXT : [[2-Linear-Regression-p2]]