---
id: 94ebc12c-c1a6-416f-b8d3-4a4377971fc9
created_date: 2025-09-26T23:50:14
type: literature
tags:
  - "#EmbeddedProgramming"
links:
parent:
references: https://docs.arduino.cc/learn/microcontrollers/analog-output/
---
###### Cơ sở lý thuyết:
Pulse Width Modulation hay PWM, là một kỹ thuật được sử dụng để tạo tín hiệu analog bằng digital.

- Digital control được sử dụng để tạo sóng vuông (tín hiệu giữa bật và tắt).
- Có thể được sử dụng để mô phỏng điện áp trong khoảng giữa VCC của board (vd: 3.3V ở ESP32) với 0V bằng cách thay đổi tỉ lệ thời gian của tín hiệu bật trên tín hiệu tắt (vd: 20% bật và 80% tắt)
- Khoảng thời gian điện áp "bật" được gọi là *pulse width*.
- Tỉ lệ phần trăm của tín hiệu bật trên một chu kỳ được gọi là *duty cycle*
###### Nguyên Lý:
- Để lấy được giá trị analog, ta điều chỉnh (modulate) pulse width.
- Nếu ta lặp lại việc bật tắt đủ nhanh thì có thể đạt được điện áp di chuyển từ từ trong khoảng 0 và VCC.
###### Ví dụ:
In the graphic below:
- the green lines represent a regular time period.
	- This duration or period is the inverse of the PWM frequency. In other words, with Arduino's PWM frequency at about 500Hz, the green lines would measure 2 milliseconds each. A call to [analogWrite](https://arduino.cc/en/Reference/AnalogWrite)() is on a scale of 0 - 255, such that `analogWrite(255)` requests a 100% duty cycle (always on), and `analogWrite(127)` is a 50% duty cycle (on half the time) for example.

![[Pasted image 20250927101603.png]]