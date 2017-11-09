
### MySQL自带库作用

information_schema <!-- 提供 --> 访问数据库元数据的方式
information_schema <!-- 是 --> MySQL自带
information_schema <!-- 可以看作 --> 信息数据库
information_schema <!-- 保存着 --> 关于MySQL服务器所维护的所有其他数据库的信息


元数据（Metadata），<!-- 又称 -->中介数据、中继数据 描述数据的数据（data about data）
元数据（Metadata） <!-- 是 --> 描述数据属性（property）的信息


mysql库 <!-- 是 --> 存储mysql用户信息的库，不能删除

performance_schema库 <!-- 是 --> 5.5新增一个存储引擎
performance_schema库 <!-- 主要用于 --> 收集数据库服务器性能参数
performance_schema库 <!-- 不能创建 --> 表
performance_schema库 <!-- 提供 --> 进程等待的详细信息，包括锁、互斥变量、文件信息
performance_schema库 <!-- 提供 --> 保存历史的事件汇总信息，为提供MySQL服务器性能做出详细的判断
performance_schema库 <!-- 提供 --> 对于新增和删除监控事件点都非常容易，并可以随意改变mysql服务器的监控周期


sys库 <!-- 是 --> 5.7新增
sys库 <!-- 包含 --> 存储过程、自定义函数以及视图
sys库 <!-- 帮助我们 --> 快速的了解系统的元数据信息



|
|
|
|
***
///\\\完善成熟的结论///\\\
***
|
|
|
|

















|
|
|
|
***
///\\\问题的堆栈///\\\
***
|
|
|
|





















|
|
|
|
***
///\\\正在解决的问题///\\\
***
|
|
|
|





 
Python Flask Todo 应用 需要的数据  <!-- 是 --> id - description - category - priority - create - date

MySQL 创建数据 <!-- 是 --> CREATE DATABASE todo;

MySQL 创建数据表 <!-- 需要 --> 表名 表字段名 定义每个表字段

MySQL 创建数据表的SQL通用语法 <!-- 是 --> CREATE TABLE table_name (column_name column_type);



CREATE TABLE todo_item (
	item_id INT NOT NULL AUTO_INCREMENT,
);




### MySQL 字符串类型有什么区别?


> 二进制字符串和非二进制字符串的区别

BINARY, VARBINARY, BLOB <!-- is --> 二进制字符串  
二进制字符串 <!-- 是包含 --> 字节字符串  
二进制字符串 排序 <!-- is --> 基于列值字节的数值值  


HAR, VARCHAR, TEXT <!-- is --> 非二进制字符串  
非二进制字符串 <!-- 是包含 --> 字符字符串  
字符字符串 <!-- 可以定义 --> 字符集  
非二进制字符串 排序 <!-- is --> 根据字母顺序进行排序或比较  


TINYBLOB、BLOB、MEDIUMBLOB、LONGBLOB
<!-- is 对应 -->
TINYTEXT、TEXT、MEDIUMTEXT、LONGTEXT



> CHAR 和 VARCHAR (BINARY 和 VARBINARY 同理)

CHAR 和 VARCHAR <!-- 可以定义 --> 字符串的长度

CHAR 和 VARCHAR 保存 值 超过最大长度 <!-- 会裁剪 --> 值


CHAR 定义的列的长度 <!-- is --> 固定的 取值可以为0～255之间  
CHAR 保存  <!-- is --> 在它们的右边填充空格以达到指定的长度  
CHAR 检索  <!-- is --> 尾部的空格被删除掉  
CHAR  <!-- is --> 不进行大小写转换  


VARCHAR 定义的列的长度 <!-- is --> 可变长字符串 取值可以为0~65535之间  
CHAR 保存  <!-- is --> 只保存需要的字符数, 另加一个字节来记录长度 不进行填充  
CHAR 保存 检索  <!-- is --> 尾部的空格仍保留  


TEXT 和 VARCHAR  <!-- is --> 类似 

















