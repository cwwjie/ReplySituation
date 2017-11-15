### SQL 和 NoSQL 的区别

关系型数据库 SQL (Structured Query Language)  <!-- 储存 --> 特定结构的表中


关系型数据库 SQL 特定结构的表 <!-- 可定义 --> 表的主键(primary key)
关系型数据库 SQL 特定结构的表 <!-- 可定义 --> 索引(index)
关系型数据库 SQL 特定结构的表 <!-- 可定义 --> 触发器(trigger)
关系型数据库 SQL 特定结构的表 <!-- 可定义 --> 存储过程(stored procedure)

关系型数据库 SQL 特定结构的表 <!-- 可以 --> 更新

关系型数据库 SQL (Structured Query Language) <!-- 可以 --> 外部数据存储 外键

关系型数据库 SQL (Structured Query Language)  <!-- 可以使用 --> JOIN表链接方式
JOIN表链接方式  <!-- 可以将 --> 多个关系数据表中的数据用一条简单的查询语句查询出来

关系型数据库 SQL (Structured Query Language)  <!-- 不允许删除 --> 已经被使用的 外部存储数据

关系型数据库 SQL (Structured Query Language)  <!-- 拥有 --> 事务


关系型数据库 SQL (Structured Query Language)  <!-- 是 --> 明确的定义
关系型数据库 SQL (Structured Query Language)  <!-- 适合 --> 精确规范的独立项目 例如: 商城和银行系统


非关系型数据库 NoSQL（Not Only SQL） <!-- 是 --> 更加灵活和可扩展
非关系型数据库 NoSQL（Not Only SQL） <!-- 是 --> JSON文档 哈希表

非关系型数据库 NoSQL（Not Only SQL） <!-- 暂未提供 --> 多个数据集中的数据查询

非关系型数据库 NoSQL（Not Only SQL） <!-- 适合 --> 无固定要求的组织数据  例如: 社交网络，客户管理和网络分析系统




### 创建联结

等值联结

SELECT [所有列] FROM [所有表] WHERE [字段] = [字段]

内联结(正确规范)

SELECT [所有列] FROM [某个表] INNER JOIN [某个表] ON [字段] = [字段]

高级联结

自联结(self-join) 自然联结(natrua-join) 外联结(outer-join) 




聚集函数的功能 <!-- 类似 --> 确定一张表的行数
聚集函数的功能 <!-- 类似 --> 获得表中某些行的和；
聚集函数的功能 <!-- 类似 --> 获得最大值、最小值、平均值




联结(join)表 / 关系表 <!-- 是 --> SQL最强大的功能之一

联结(join)表 / 关系表 <!-- 目的是设计 --> 信息分解 抽象 关联



UNION 操作符 <!-- 可以组合 --> 数条SQL查询
UNION 操作符 <!-- 可以使用 --> 多条select语句
UNION 操作符 的 多条select语句 的 结果 <!-- 可以组合 --> 结果集



group by 的作用 <!-- 是 --> 排序



INSERT <!-- 可以 --> 插入完整行
INSERT <!-- 可以 --> 插入行 的一部分
INSERT <!-- 可以 --> 插入某些查询结果


视图 <!-- 可以简化 --> 某些SQL操作

commit 语句 <!-- 可以管理 --> 事物处理
rollback 语句 <!-- 可以管理 --> 事物处理

事物处理（transaction processing） <!-- 可以确保 --> 成批的SQL操作 完全执行 或 完全不执行

游标的作用 （cursor） <!-- is --> 在检索出来的行中前进或后退一行或多行


约束、索引、和触发器 <!-- is --> 高级SQL特性


|
|
|
|
***
///\\\优秀结论///\\\
***
|
|
|
|

### 创建用户

创建用户 <!-- 是 --> CREATE USER 'username'@'host' IDENTIFIED BY 'password';

host  <!-- 是 -->  指定该用户在哪个主机上可以登陆
localhost <!-- 是 --> 指该用户只能在本地登录，不能在另外一台机器上远程登录
% <!-- 表示 --> 在任何一台电脑上都可以登录; 也可以指定某台机器可以远程登录

### 授权

授权 <!-- 是 --> GRANT privileges ON databasename.tablename TO 'username'@'host'

privileges <!-- 是 --> 用户的操作权限
用户的操作权限 <!-- 有 --> SELECT , INSERT , UPDATE , ALL 等

databasename <!-- 是 --> 数据库名
tablename <!-- 是 --> 表名
*（星号）  <!-- 表示 --> 授予该用户对 所有 数据库/表 相应操作权

### 查看限权

show grants for 'username'@'host';


### [建议限权](https://dev.mysql.com/doc/refman/5.7/en/privileges-provided.html)

ALTER √
CREATE √
DELETE √
INDEX √
INSERT √
SELECT √
SHOW √
UPDATE √

DROP ×
EVENT ×
EXECUTE ×
GRANT ×
LOCK ×
REFERENCES ×
TRIGGER ×

USAGE ?
FILE ?
PROCESS ?
PROXY ?
RELOAD ?
REPLICATION ?
SHUTDOWN ?
SUPER ?









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





















