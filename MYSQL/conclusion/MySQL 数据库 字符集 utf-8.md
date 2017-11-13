# 如何 修改 mysql数据库字符集为UTF8？


### 如何找到MySQL 安装目录 ?

mysql> show variables like '%dir%';


### 如何找到 windows MySQL 数据数据文件目录及my.ini位置？

可通过windows服务所对应mysql启动项，查看其对应属性->可执行文件路径，获取my.ini路径。

"C:\Program Files\MySQL\MySQL Server 5.7\bin\mysqld.exe" --defaults-file="C:\ProgramData\MySQL\MySQL Server 5.7\my.ini" MySQL57



### 如何查看数据库编码格式？

show variables like "cha%";

show variables like 'character_set_database';

SHOW VARIABLES LIKE 'collation%';

SHOW VARIABLES WHERE Variable_name LIKE 'character_set_%' OR Variable_name LIKE 'collation%';


### 查看数据表的编码格式？

show create table <表名>;



### 修改数据库字符集

create database <数据库名> character set utf8;



### 修改数据库字符集

alter database <数据库名> character set utf8;



### 修改数据表格编码格式

alter table <表名> character set utf8;




# 字符集 


服务器(server) <!-- 支持 -->  字符集(Character set)
数据库(database) <!-- 支持 -->  字符集(Character set)
数据表(table) <!-- 支持 -->  字符集(Character set)
连接(connection) <!-- 支持 -->  字符集(Character set)





















