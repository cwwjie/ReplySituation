

|
|
|
|
***
///\\\已完成///\\\
***
|
|
|
|

Node.js TypeScript 

编译

Visual Studio 肯定可以使用 TypeScript




### TypeScript 是什么?

TypeScript <!-- is --> JavaScript的超集

TypeScript 特点 <!-- is --> 类型系统
TypeScript 类型系统 <!-- is --> 实际上是最好的文档，大部分的函数看看类型的定义就可以知道如何使用了
TypeScript 特点 <!-- is --> 可以在编译阶段就发现大部分错误，这总比在运行时候出错好
TypeScript 特点 <!-- is --> 增强了编辑器和 IDE 的功能 ( Visual Studio )，包括代码补全、接口提示、跳转到定义、重构等




### greeting: string; -------------------------- 这个是什么?
定义一个 字符串类似 公有(public) 属性 greeting


### Object.seal() 方法 有什么用?


Object.seal() 方法 <!-- 是 --> 密封对象
Object.seal() 方法 <!-- 并返回 --> 封后的对象

密封对象 <!-- 会阻止 --> 对象添加新的属性
密封对象 <!-- 会将 --> 所有已有属性的可配置性（configurable）置为不可配置（false）

密封对象 <!-- 不可修改 --> 属性的描述
密封对象 <!-- 不可删除 --> 属性

密封对象 可写性描述（writable）为可写（true）的属性的值 <!-- 是 --> 仍然可以被修改的


但是可写性描述（writable）为可写（true）的属性的值仍然可以被修改。


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




### 装饰器（Decorators） 是什么?

TypeScript 和 python 的 装饰器 <!-- 是 --> 类似的


装饰器 <!-- 是 --> 特殊类型的声明

类 装饰器 <!-- 能够附加到 --> 类声明 上
类 装饰器 <!-- 作用 --> 监视 修改 或 替换类定义
类 装饰器 <!-- 是 --> 在运行时当作函数被调用
类 装饰器 参数(唯一) <!-- 是 --> 类的构造函数
类 装饰器 返回值 <!-- 可以 --> 替换类的声明


* 类声明是什么?
—— 类声明 <!-- 是 --> 告诉编译器有这么一个类（有哪些成员函数，哪些成员变量）

* 什么是 TypeScript 声明文件？
—— 声明文件 <!-- 是 --> 匹配 JavaScript 中一个库的使用方式








* ES6 constructor 是什么? 什么是构造函数? 




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





### function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) { ------------------------- <> 是啥?

[回答这个问题](https://segmentfault.com/q/1010000011906979)

"extends" 是关键字, 这个关键字可以实现泛型约束。
"{new(...args:any[]):{}}" 是用来描述约束条件的。

"new (...args: any[])" 表示 a mixin constructor type, 是 [TypeScript 2.2 新增](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html)
":{}" 表示 这个 a mixin constructor type 返回值类型 是 对象


### 泛型

泛型 <!-- 目的是为了 --> 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型

泛型 <!-- 可以看做 --> 类型变量T 的函数

其他方案 <!-- is --> any 类型

类型变量 T <!-- 是 --> 特殊的变量
类型变量 T <!-- 只用于 --> 表示类型
类型变量 T <!-- 可以跟踪 --> 类型的信息
类型变量 T <!-- 也可以 --> 类型的一部分使用

尖括号（<>） <!-- 可以用来明确 --> 传入的类型 例如 string

T[] <!-- is --> Array<T> <!-- is --> 元素类型是T的数组


泛型函数 类型 <!-- 区别 --> 非泛型函数 类型





属性名

对象 里获取 这个属性



### 返回值类型
function add(x: number, y: number): number { return x + y; }
<!-- 是 -->
这个函数的返回值类型 为 number


### 泛型约束 是什么

extends 关键字 <!-- 可以实现 --> 泛型约束

泛型约束 <!-- 目的是 --> 具体列出对于T的约束要求


一定要用 接口 来描述 约束条件 吗?



### Interfaces 接口

接口的作用 <!-- 是 --> 定义 契约 (类型命名 代码 第三方代码)




































