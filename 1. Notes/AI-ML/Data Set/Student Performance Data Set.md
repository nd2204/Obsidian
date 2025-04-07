<table><tbody><tr><td><p><b>Data Set Characteristics:&nbsp;&nbsp;</b></p></td><td><p>Multivariate</p></td><td><p><b>Number of Instances:</b></p></td><td><p>649</p></td><td><p><b>Area:</b></p></td><td><p>Social</p></td></tr><tr><td><p><b>Attribute Characteristics:</b></p></td><td><p>Integer</p></td><td><p><b>Number of Attributes:</b></p></td><td><p>33</p></td><td><p><b>Date Donated</b></p></td><td><p>2014-11-27</p></td></tr><tr><td><p><b>Associated Tasks:</b></p></td><td><p>Classification, Regression</p></td><td><p><b>Missing Values?</b></p></td><td><p>N/A</p></td><td><p><b>Number of Web Hits:</b></p></td><td><p>1308384</p></td></tr></tbody></table>

**Source:**

Paulo Cortez, University of Minho, GuimarÃ£es, Portugal, [http://www3.dsi.uminho.pt/pcortez](http://www3.dsi.uminho.pt/pcortez)  

### **Data Set Information:**

This data approach student achievement in secondary education of two Portuguese schools. The data attributes include student grades, demographic, social and school related features) and it was collected by using school reports and questionnaires. Two datasets are provided regarding the performance in two distinct subjects: Mathematics (mat) and Portuguese language (por). In \[Cortez and Silva, 2008\], the two datasets were modeled under binary/five-level classification and regression tasks. Important note: the target attribute G3 has a strong correlation with attributes G2 and G1. This occurs because G3 is the final year grade (issued at the 3rd period), while G1 and G2 correspond to the 1st and 2nd period grades. It is more difficult to predict G3 without G2 and G1, but such prediction is much more useful (see paper source for more details).

### **Attribute Information:**

\# Attributes for both student-mat.csv (Math course) and student-por.csv (Portuguese language course) datasets:  

| no  | attributes | descriptions                                                   | types   | possible values                                                                                          |
| --- | ---------- | -------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------- |
| 1   | school     | student's school                                               | binary  | 'GP' - Gabriel Pereira or 'MS' - Mousinho da Silveira                                                    |
| 2   | sex        | student's sex                                                  | binary  | 'F' - female or 'M' - male)                                                                              |
| 3   | age        | student's age                                                  | numeric | 15 to 22                                                                                                 |
| 4   | address    | student's home address type                                    | binary  | 'U' - urban or 'R' - rural                                                                               |
| 5   | famsize    | family size                                                    | binary  | 'LE3' - less or equal to 3 or 'GT3' - greater than 3                                                     |
| 6   | Pstatus    | parent's cohabitation status                                   | binary  | 'T' - living together or 'A' - apart                                                                     |
| 7   | Medu       | mother's education                                             | numeric | 0 - none, 1 - primary education (4th grade), 2 - 5th to 9th grade, 3 - secondary education, 4 - higher   |
| 8   | Fedu       | father's education                                             | numeric | 0 - none, 1 - primary education (4th grade), 2 - 5th to 9th grade, 3 - secondary education, 4 - higher   |
| 9   | Mjob       | mother's job                                                   | nominal | 'teacher', 'health' care related, civil 'services' (e.g. administrative or police), 'at_home' or 'other' |
| 10  | Fjob       | father's job                                                   | nominal | 'teacher', 'health' care related, civil 'services' (e.g. administrative or police), 'at_home' or 'other' |
| 11  | reason     | reson to choose this school                                    | nominal | close to 'home', school 'reputation', 'course' preference or 'other'                                     |
| 12  | guardian   | student's guardian                                             | nominal | 'mother', 'father' or 'other'                                                                            |
| 13  | traveltime | home to shcool travel time                                     | numeric | 1: <15m, 2: 15-30m, 3: 30m - 1h, 4: >1h                                                                  |
| 14  | studytime  | weekly study time                                              | numeric | 1: <2h, 2: 2-5h, 3: 5-10h, 4: >10h                                                                       |
| 15  | failures   | number of past class failures                                  | numeric | n(failures count) if i<=n<3, else 4                                                                      |
| 16  | schoolsup  | extra educational support                                      | numeric | yes or no                                                                                                |
| 17  | famsup     | family educational support                                     | numeric | yes or no                                                                                                |
| 18  | paid       | extra paid classes within the course subject (Math/Portuguese) | binary  | yes or no                                                                                                |
| 19  | activities | extra-curricular activities                                    | binary  | yes or no                                                                                                |
| 20  | nursery    | attended nursery school                                        | binary  | yes or no                                                                                                |
| 21  | higher     | wants to take higher education                                 | binary  | yes or no                                                                                                |
| 22  | internet   | Internet access at home                                        | binary  | yes or no                                                                                                |
| 23  | romantic   | with a romantic relationship                                   | binary  | yes or no                                                                                                |
| 24  | famrel     | quality of family relationships                                | numeric | from 1 - very low to 5 - very high                                                                       |
| 25  | freetime   | free time after school                                         | numeric | from 1 - very low to 5 - very high                                                                       |
| 26  | goout      | going out with friends                                         | numeric | from 1 - very low to 5 - very high                                                                       |
| 27  | Dalc       | workday alcohol consumption                                    | numeric | from 1 - very low to 5 - very high                                                                       |
| 28  | Walc       | weekend alcohol consumption                                    | numeric | from 1 - very low to 5 - very high                                                                       |
| 29  | health     | current health status                                          | numeric | from 1 - very bad to 5 - very good                                                                       |
| 30  | absences   | number of school absences                                      | numeric | from 0 to 93                                                                                             |

these grades are related with the course subject, Math or Portuguese:

| no  | attributes | descriptions        | types   | possible values             |
| --- | ---------- | ------------------- | ------- | --------------------------- |
| 31  | G1         | first period grade  | numeric | from 0 to 20                |
| 31  | G2         | second period grade | numeric | from 0 to 20                |
| 32  | G3         | final grade         | numeric | from 0 to 20, output target |


### **Relevant Papers:**

P. Cortez and A. Silva. Using Data Mining to Predict Secondary School Student Performance. In A. Brito and J. Teixeira Eds., Proceedings of 5th FUture BUsiness TEChnology Conference (FUBUTEC 2008) pp. 5-12, Porto, Portugal, April, 2008, EUROSIS, ISBN 978-9077381-39-7.  
Available at: [Web Link](http://www3.dsi.uminho.pt/pcortez/student.pdf)

  

### **Citation Request:**

Please include this citation if you plan to use this database:

P. Cortez and A. Silva. Using Data Mining to Predict Secondary School Student Performance. In A. Brito and J. Teixeira Eds., Proceedings of 5th FUture BUsiness TEChnology Conference (FUBUTEC 2008) pp. 5-12, Porto, Portugal, April, 2008, EUROSIS, ISBN 978-9077381-39-7.  
[Web Link](http://www3.dsi.uminho.pt/pcortez/student.pdf)