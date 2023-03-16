tags: #Programming #

---

> [!info] About Make 
> - **Make** là một chương trình tiện ích được sử dụng để tự động hóa quá trình xây dựng ứng dụng phầm mềm (bao gồm các lệnh cần thiết để compile, link các source code)
> - **Make** đọc các chỉ dẫn từ *Makefile*

> [!example] Use Case
Make phần lớn được sử dụng cho ngôn ngữ C/C++ 

---
# **MAKEFILE**

> [!info] Makefile
> là một file bao gồm những thông tin hay chỉ dẫn (code) về cách build một phầm mềm

---
#### I. CẤU TRÚC CỦA MAKEFILE
---

Makefile thường có quy luật sau:

```makefile
targets: prequisites
	command
	command
	command
```

- **targets** là những tên file ngăn cách nhau bởi dấu cách. Khi chạy make thì sẽ tạo ra file có tên tương tự (Thông thường chỉ có 1 tên / rule)
- **commands** là một dãy các *bước* để make `target(s)` chúng phải được lùi dòng bằng TAB thay vì SPACE
- **prerequisites** cũng là những tên file ngăn cách nhau bởi dấu cách. Không giống như `targets` những file này phải tồn tại trước khi ta thực hiện các câu lệnh `command`. chúng được gọi là *dependencies*

---
#### II. BẢN CHẤT CỦA MAKE
---
```makefile
hello: 
	echo "Hello, World" 
	echo "Till always print, because the file hello does not exist."
```

- Ta có `target` tên là hello -> chỉ chạy các `command` khi và chỉ khi file tên là hello không tồn tại. Cùng lúc đó tạo một file cùng tên là hello

Trường hợp thông dụng:

- Ta có / tạo một file tên là `main.c` có nội dung bên trong như sau:
```c
//main.c
int main() {
	return 0;
}
```

- Sau đó tạo file Makefile:
```makefile
main:
	gcc main.c -o main
```

- Lần này ta chạy thử make trong terminal. Vì `target` của ta không được cung cấp tệp cho câu lệnh make 
	- Lần đầu tiên ta chạy, file tên main sẽ được tạo
	- Lần thứ hai ta sẽ thấy thông báo `make: 'main' is up to date` ngay cả khi ta cập nhật nội dung bên trong file `main.c` đó là do file main đã tồn tại
- Để khắc phục ta thêm `prerequisite`
```makefile
main: main.c
	gcc main.c -o main
```

- Khi ta chạy make một lần nữa những bước sau sẽ được thực hiện:
	- *target* đầu tiên được chọn, bởi vì nó là mặc định
	- *target* này bao gồm 1 *prerequisite* `main.c`
	- **Make** sẽ quyết định nếu nó phải chạy *target* `main`. Nó sẽ chỉ chạy khi tệp `main` không tồn tại hoặc `main.c` mới hơn `main`

> [!important] 
> Phần cuối này chính là **bản chất của make**. Những gì nó đang làm là prerequisites của `main` có thay đổi sau lần cuối `main` được compile không.
> - Nếu có: lệnh make sẽ compile lại tệp
> - Nếu không: nó sẽ không bị compile lại

>[!info]
>Make so sánh file mới với file cũ bằng cách dùng mốc thời gian khi ta thay đổi / cập nhật file

 ---
#### III. VÍ DỤ THIẾT LẬP TRONG MAKEFILE*** 
----

> [!Note] 
> - Ta chỉ được phép dùng TAB để lùi đầu dòng thay vì dùng SPACE nếu không makefile sẽ không chạy được 

```makefile
all: myprogram

myprogram: main.c
	$(CC) $(CFLAGS) -o myprogram main.c
```

- trong Makefile: 
	- gán giá trị cho biến `CC` tương ứng với trình biên dịch ta dùng (VD: CC=[gcc](C-And-Cpp-Compiler.md)).
	- gán giá trị cho biến `CFLAGS` tương ứng với [flag](Compiler-Flag.md) của trình biên dịch (VD: CFLAGS=-s -g).


Makefile dưới đây chạy 3 *target*. Khi ta dùng make trong terminal, nó sẽ build chương trình tên là `main` trong chuỗi các bước dưới đây:
	1. **Make** chọn target `main`, bởi vì *target đầu tiên là target mặc định*
	2. `main` yêu cầu `main.o`, nên make sẽ tìm *target* tên `main.o` 
	3. `main.o` yêu cầu `main.c`, nên make sẽ tìm *target* tên `main.c`
	4. `main.c` không phụ thuộc vào tệp nào nên lệnh `echo` được chạy
	5. Lệnh `gcc -c` được chạy do tất cả dependencies của `main.o` đã chạy
	6. Câu lệnh `gcc` trên cùng được chạy do tất cả dependencies của `main` đã chạy
	7. `main` đã được biên dịch
 
```makefile
main: main.o
	gcc main.o -o main #Chạy cuối
main.o: main.c
	gcc -c main.c -o main.o #Chạy thứ hai

#Thông thường thì file main.c đã tồn tại
main.c:
	echo "int main() {return 0;}" > main.c #Chạy đầu
```

---
# **MAKE SYNTAX**
--- 

### *BIẾN TRONG MAKEFILE*

- Biến trong make chỉ có thể là xâu (string). thường thì bạn cần dùng `:=` hoặc `=` 
Đây là ví dụ của việc dùng biến:
```makefile
files := file1 file2

some_file: $(files)
	echo "Look at thí variable: " $(files)
	touch some_file

file1:
	touch file1
file2:
	touch file2

clean:
	rm -f file1 file2 some_file
```

- Ngoặc đơn hoặc ngoặc kép không có ý nghĩa gì trong makefile. Chúng đơn giản chỉ là những ký tự được gán cho biến (Trong shell/bash thì ngược lại chúng rất hữu ích vd ta dùng nó trong câu lệnh printf):
```makefile
a:= one two # a được gán cho xâu "one two"
b:= 'one two' # không nên làm như này vì b sẽ được gán cho xâu "'one two'"

all: 
	printf '$a'
	printf $b
```

- Ta sử dụng biến bằng cách `${Ten_bien}` hoặc `$(Ten_bien)`
```makefile

all:
	echo $(x)
	echo ${x}
```

### *TARGETS*
##### THE ALL TARGET
- khi ta có nhiều *target* mà ta muốn chạy tất cả, ta sử dụng target tên all. Rule này luôn nằm trên tất cả target còn lại nên nó sẽ được chạy mặc định khi ta không gán target khi chạy câu lệnh make trong terminal:
```makefile
all: one two three

one: 
	touch one
two:
	touch two
three:
	touch three

clean:
	rm -f one two three
```
##### MULTIPLE TARGETS
- Khi ta có nhiều *target* trên 1 rul, các câu lệnh bên trong nó sẽ chạy cho mỗi *target*
	- `$@` là một ==biến tự động== nó sẽ chứa tên của target.
```makefile
all: f1.o f2.o

f1.o f2.o:
	echo $@
```

- Câu lệnh trên tương đương với
``` makefile
f1.o:
	echo f1.o
f2.o:
	echo f2.o
```

### *AUTOMATIC VARIABLE AND WILDCARDS*
`*` và `%` được gọi là ký tự đại diện (wildcard)
##### WILDCARD `*`
- `*` được dùng để tìm kiếm những tệp có cùng tên

> [!important] 
> Ta nên bọc `*` bên trong hàm wildcard để có thể tránh được những rủi ro phía dưới

```makefile
# In ra màn hình thông tin của mỗi tệp có đuôi .c
print: $(wildcard *.c)
	ls -la $? # Biến tự động này sẽ trả về những tệp prerequisite mới hơn target
```

- `*` Được phép sử dụng cho tên của targets, prerequisites, hoặc trong hàm wildcard

> [!danger] 
> - Không nên sử dụng `*` như một giá trị của biến
> - Khi `*` không khớp với bất cứ tệp nào, nó để nguyên ở đó (trừ khi ta dùng hàm wildcard)

``` makefile
sai  := *.o # Không nên làm điều này bởi vì `*` sẽ không được mở rộng
dung := $(wildcard *.o) 

all: one two three four

# Lỗi, bởi vì $(sai) chính là xâu "*.o"
one: $(sai)

# Sẽ dữ nguyên là *.o khi không có tệp nào khớp
two: *.o

# Hoạt động đúng như mong đợi, trong trường hợp này nó không làm gì cả.
three: $(dung)

# Y hệt rule 3
four: $(wildcard *.o)
```



---
# **MAKE TERMINAL COMMANDS**
---
### BASIC COMMANDS
---

1. Trong [Terminal Window](Terminal.md) (Cửa sổ chương trình đầu cuối) [cd](Terminal.md) đến thư mục chứa các tệp mã nguồn và Makefile.
2. nhập `make` -> `enter` : câu lệnh "make" sẽ đọc tệp Makefile và build chương trình theo chỉ dẫn trong đó.
3. Khi hoàn tất, ta sẽ thấy một file [thực thi được](Executable.md) tương ứng với tên file output bạn đặt trong chương trình (VD: myprogram)

---
#### MAKE CLEAN 
---
`clean` thường được sử dụng như một target để xóa bỏ đầu ra (output) của các target khác 

---
# MAKEFILE COOKBOOK
---
> [!help] 
> Dưới đây là mẫu file Makefile hoạt động tốt với những dự án tầm trung
> Tất cả những gì bạn cần làm là cho file .c .cpp vào bên trong thư mục `src/`
```makefile
# Thanks to Job Vranish (https://spin.atomicobject.com/2016/08/26/makefile-c-projects/) TARGET_EXEC := final_program 

BUILD_DIR := ./build 
SRC_DIRS := ./src 

# Find all the C and C++ files we want to compile 
# Note the single quotes around the * expressions. The shell will incorrectly expand these otherwise, but we want to send the * directly to the find command. 
SRCS := $(shell find $(SRC_DIRS) -name '*.cpp' -or -name '*.c' -or -name '*.s') 

# Prepends BUILD_DIR and appends .o to every src file 
# As an example, ./your_dir/hello.cpp turns into ./build/./your_dir/hello.cpp.o 
OBJS := $(SRCS:%=$(BUILD_DIR)/%.o) 

# String substitution (suffix version without %). 
# As an example, ./build/hello.cpp.o turns into ./build/hello.cpp.d 
DEPS := $(OBJS:.o=.d) 

# Every folder in ./src will need to be passed to GCC so that it can find header files 
INC_DIRS := $(shell find $(SRC_DIRS) -type d) 
# Add a prefix to INC_DIRS. So moduleA would become -ImoduleA. GCC understands this -I flag 
INC_FLAGS := $(addprefix -I,$(INC_DIRS)) 

# The -MMD and -MP flags together generate Makefiles for us! 
# These files will have .d instead of .o as the output. CPPFLAGS := $(INC_FLAGS) -MMD -MP 

# The final build step. 
$(BUILD_DIR)/$(TARGET_EXEC): $(OBJS) 
	$(CXX) $(OBJS) -o $@ $(LDFLAGS) 
 
# Build step for C source 
$(BUILD_DIR)/%.c.o: %.c 
	mkdir -p $(dir $@) 
	$(CC) $(CPPFLAGS) $(CFLAGS) -c $< -o $@ 

# Build step for C++ source 
$(BUILD_DIR)/%.cpp.o: %.cpp 
	mkdir -p $(dir $@) 
	$(CXX) $(CPPFLAGS) $(CXXFLAGS) -c $< -o $@ 
	
.PHONY: clean 
clean: rm -r $(BUILD_DIR) 

# Include the .d makefiles. The - at the front suppresses the errors of missing 
# Makefiles. Initially, all the .d files will be missing, and we don't want those # errors to show up. 
-include $(DEPS)
```

---
# Preference(s)
---

1. https://makefiletutorial.com/