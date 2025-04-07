tags: #DataScience #Programming #MachineLearning #AI 

---
# HOW DOES IT WORK
---

> [!important] Linear Regression
> Hồi quy tuyến tính (Linear Regression) đơn giản chỉ là một đường thẳng ngắn nhất phù hợp nhất. khi được cung cấp dữ liệu thuật toán này sẽ ra đường thẳng tốt nhất di qua những dữ liệu đó

![[Linear-Regression#THUẬT TOÁN]]

---
# IMPLEMENTING THE ALGORITHM
---

Bây giờ chúng ta đã hiểu cách hoạt động của thuật toán giờ ta có thể sử dụng nó để dự đoán điểm tổng kết của học sinh:
- Bắt đầu với việc xác định model:
```python
linear = linear_model.LinearRegression()
```
- Sau đó ta sẽ train và chấm điểm model sử dụng mảng mà ta đã tạo ở bài trước ([[1-Linear-Regression-p1]]):
```python
linear.fit(x_train, y_train)
acc = linear.score(x_test, y_test) #acc stands for accuracy
```
- In ra màn hình điểm số (theo %):
```python
print(acc)
```
- Với bộ dữ liệu này đạt được điểm trên 80% là khá tốt 

---
# VIEWING THE CONSTANT
---

Nếu ta muốn thấy các hằng số được dùng để tạo đường thẳng ta có thể viết:
```python
print('Coefficient: \n', linear.coef_) # Đây là giá trị cho độ dốc
print('Intercept: \n', linear.intercept_) # Đây là giao điểm b
```

---
# PREDICTING ON SPECIFIC STUDENTS
---

Để biết được độ tin cậy thuật toán này được dùng cho một học sinh cụ thể. Ta cần in ra tất cả các dự liệu được dùng dể test. Sau đó ta in cả điểm thật lẫn điểm được model này dự đoán

```python
predictions = linear.predict(x_test) # Gets a list of all predictions

for x in range(len(predictions)):
    print(predictions[x], x_test[x], y_test[x])
```

---

PREV: [[1-Linear-Regression-p1]]
NEXT: [[3-Saving-Model-and-Plotting-Data]]







