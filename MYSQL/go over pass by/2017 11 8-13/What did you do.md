### 为什么在mysql上面查出来的汉字都是乱码？

charset='utf8' --- √



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
























### python func(* args, ** kwargs)   参数作用？


带 *  前缀的参数 <!-- 可以接收 --> 可变数量的参数 类似 tuple

带 ** 前缀的参数 <!-- 可以接收 --> 所有正常形参之外的其他的关键字参数 类似 dict











### python 装饰器


“装饰器”（Decorator） <!-- 可以 --> 函数调用前后 增加功能
“装饰器”（Decorator） <!-- 本质 is --> 返回 函数 的函数（高阶函数）
“装饰器”（Decorator） <!-- is --> 定义复杂
“装饰器”（Decorator） <!-- is --> 使用非常灵活和方便


@Decorator
def fun():

<!-- 相当于 -->

fun = Decorator(fun)













### Flask 应用环境

Flask <!-- 拥有 --> 两种环境 （Context）

Flask <!-- 拥有 --> 应用环境 （Application Context）
Flask <!-- 拥有 --> 请求环境 （Request Context）

Flask  两种环境（Context） <!-- 拥有 --> 不同的特殊变量


flask.g <!-- is --> 应用环境（Application Context）的全局变量

在 flask.g 存储数据库连接 <!-- 可以确保 --> 同一时刻只有一个请求使用这个连接 = 安全的


Flask 设计理念之一 <!-- is --> 代码在执行时会处于两种不同的“状态”


Flask对象被实例化后 模块层次上 <!-- is --> 应用 处于 配置状态

配置状态 <!-- 可以认为 --> 程序员可以安全地修改应用对象
配置状态 <!-- 可以认为 --> 目前还没有处理任何请求
配置状态 <!-- 可以认为 --> 你必须得有一个指向应用对象的引用来修改它。不会有某个神奇的代理变量指向你刚创建的或者正在修改的应用对象的

请求处理状态 <!-- 可以认为 --> 上下文的本地对象（ flask.request 和其它对象等）指向当前的请求
请求处理状态 <!-- 可以认为 --> 你可以在任何时间里使用任何代码与这些对象通信

flask.current_app <!-- is --> 指向正在处理请求的应用









### 为什么会有 Flask 应用环境?

Flask 设计的初衷之一 <!-- is --> 一个 Python 进程中拥有多个应用

显式地到处传递数据到应用 <!-- is --> 与其他库的设计理念冲突












### python连接MySQL数据库的方法

python 游标对象 cursor  <!-- 作用是 --> 执行 结果。 查询 结果。获取 结果。 

python 游标对象 cursor execute 方法  <!-- 作用是 --> 执行一个数据库的查询和命令 。 结果 返回 到缓冲区中

python 游标对象 cursor fetch 方法  <!-- 作用是 --> 执行一个数据库的查询和命令 。 结果 返回 到缓冲区中













### flask-sqlalchemy 一直乱码报错, 网上的方案都没用怎么办?

方案 —— 用个屁的ORM框架

会就行了!











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




### 数据库连接

SQLAlchemy <!-- is --> Python 最有名的ORM框架
SQLAlchemy <!-- is --> Object-Relational Mapping技术  ORM框架
SQLAlchemy <!-- is --> 建立在数据库API之上
SQLAlchemy <!-- is --> 把关系数据库的表结构映射到对象上 = 关系对象映射进行数据库操作
SQLAlchemy <!-- is --> 将对象转换成SQL 使用数据API执行SQL并获取执行结果

mongoose <!-- is too --> ORM框架

Flask-SQLAlchemy <!-- 有 --> 两种 初始化方法 启动flask 的 app_context 相关











### SQLAlchemy 怎么学?

结论 <!-- is --> 看别人写的教程比官网好多了..

Engine  <!-- 可能是 代指 --> sqlalchemy 
ConnectionPooling <!-- is --> 连接池
Dialect <!-- is --> 执行语句
Schema Type <!-- is --> 表结构
SQL Expression Language <!-- is --> 将该对象转换成SQL语句












### [flask-sqlalchemy 支持字段类型有哪些? ](http://flask-sqlalchemy.pocoo.org/2.1/models/#simple-example)

类型名     python类型     说明
---------------------------------------------------------
Integer    int            普通整数，32位
Float      float          浮点数
String     str            变长字符串
Text       str            变长字符串，对较长字符串做了优化
Boolean    bool           布尔值
PickleType 任何python对象 自动使用Pickle序列化



常用的配置选项如下：

选项名      说明
------------------------------------------------
primarykey  如果设为True，表示主键
unique      如果设为True，这列不重复
index       如果设为True，创建索引，提升查询效率
nullable    如果设为True，允许空值
default     为这列定义默认值







### [基本增删查改操作 ](http://flask-sqlalchemy.pocoo.org/2.1/queries/)

flask-sqlalchemy 如何插入数据?

1. 实例化 一个表结构 Schema Type
2. 添加到 db.session.add( Schema Type ) 中
3. 提交 db.session.commit()

flask-sqlalchemy 如何查询数据?


SchemaType.query.SQLAlchemy查询过滤器(条件).SQL查询执行函数()


SQLAlchemy查询过滤器:

过滤器      说明
----------------------------------------------------------
filter()    把过滤器添加到原查询，返回新查询
filter_by() 把等值过滤器添加到原查询，返回新查询
limit()     使用指定值限制原查询返回的结果数量，返回新查询
offset()    偏移原查询返回的结果，返回新查询
order_by()  排序返回结果，返回新查询
groupby()   原查询分组，返回新查询


SQL查询执行函数:

方法            说明
----------------------------------------------------------
all()           以列表形式返回结果
first()         返回第一个结果，如果没有返回None
first_or_404()  返回第一个结果，如果没有抛出404异常
get()           返回主键对应记录，没有则返回None
get_or_404()    返回主键对应记录，如果没有抛出404异常
count()         返回查询结果数量
paginate()      返回paginate对象，此对象用于分页





















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







































