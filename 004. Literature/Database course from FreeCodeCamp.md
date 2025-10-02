---
id: ca05b1ed-01fe-4431-9b00-ff3dca79573b
created_date: 2025-10-02T18:48:36
type: literature
tags:
  - Uncategorized
links:
references:
  - https://www.youtube.com/watch?v=4cWkVbC2bNE&t=186s
---
#### Database Management System (DBMS)
---

Hệ quản trị cơ sở dữ liệu hay (DBMS) là phần mềm chuyên dụng để giao tiếp với cơ sở dữ liệu.
- DBMS Cho phép người dùng thực hiện các hành động như tạo, duy trì, quản lý và kiểm soát truy cập vào cơ sở dữ liệu.
- Nếu DBMS không tồn tại thì việc tương tác với DB sẽ rất bất tiện do bản chất của database chỉ là dữ liệu được cấu trúc nằm trong bộ nhớ
- Có rất nhiều phần mềm DBMS với các tính năng khác nhau để phục vụ cho nhu cầu lưu trữ dữ liệu hiệu quả và phù hợp với trường hợp sử dụng (VD: PostgreSQL, MySQL, MSSQL, ...)


> [!important] Phân biệt giữa DBMS và Database
> Database là **dữ liệu** còn DBMS là phần mềm để tương tác với database. DBMS là các phần mềm như MySQL, MongoDB, PostgreSQL, còn Database là dữ liệu được quản lý thông qua DBMS.

---
###### Các thành phần của DBMS bao gồm:
- Kết nối mạng (Connections) - Ám chỉ việc DBMS hoạt động như một ứng dụng độc lập được kết nối mạng và cho phép các thiết bị mạng khác kết nối đến nó
- Bảo mật (Security) - Một số các cơ sở dữ liệu không bao gồm cơ chế bảo mật (VD: SQLite) vì một số lý do (xem thêm:[[Why use SQLite | Tại sao sử dụng SQLite?]]). Ở các DBMS phổ biến luôn bao gồm cơ chế bảo mật do nó cho phép nhiều người dùng truy cập DB và thường được sử dụng trên không gian mạng.
- Các tiện ích (Utilities) - Một số DBMS cung cấp cho người dùng các tính năng mà các DBMS khác không có điều này cũng tạo nên vô số các cuộc tranh luận cho việc sử dụng DBMS nào phù hợp nhất.
- Trình xử lý truy vấn (Query Processor) - Xử lý truy vấn dựa trên **Ngôn ngữ truy vấn** mà DBMS hỗ trợ. Các DBMS có chứa "SQL" ở tên của nó thường hỗ trợ ngôn ngữ SQL (duhh) "tiêu chuẩn" và có thể cung cấp các syntax mà các DBMS khác không có
	- Query Parser
	- Query Rewriter
	- Query Optimizer
	- Query Executor
- Storage Manager
	- Data Access
	- Transaction Manager
	- Buffer Manager
	- Recovery Manager

---
#### Structured Query Language (SQL)

Ngôn ngữ truy vấn cấu trúc (SQL) là một thành phần của [[6.1. Database Management System (DBMS)]]