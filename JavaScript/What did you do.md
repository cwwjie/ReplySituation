### Thunk 函数 是什么?

Thunk 函数 <!-- is --> 临时函数

Thunk 函数 临时函数 <!-- is --> 放置参数
Thunk 函数 临时函数 <!-- 是将要 --> 传入函数体

### Thunk 函数 与  async函数 Generator函数 有什么关系?

Thunk 函数 <!-- 可以用于 --> Generator 函数的自动流程管理
Thunk 函数 <!-- 可以用于 --> 自动执行 Generator 函数



### Co 函数 是什么?

co 函数库 <!-- 是 --> 著名程序员 TJ Holowaychuk 于2013年6月发布的一个小工具

co 函数库本质 <!-- 是 --> 将两种自动执行器（Thunk 函数和 Promise 对象），包装成一个库。


### Co 函数 与  async函数 Generator函数 有什么关系?

co 函数库 <!-- 用于 --> Generator 函数的自动执行。

co 函数库 <!-- 可以 --> 让你不用编写 Generator 函数的执行器。


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


### Generator函数的含义与用法



Generator <!-- is --> 流水线生产的意思
Generator 最大特点 <!-- is --> 交出函数的执行权 （即暂停执行）

Generator 函数 <!-- 可以看做 --> 封装的异步任务
Generator 函数 <!-- 可以看做 --> 异步任务的容器

yield 语句 <!-- 是标记 --> 异步操作需要暂停的地方

Generator 函数 <!-- 不会 --> 返回结果
Generator 函数 <!-- 返回 --> 指针对象

Generator 函数 的 指针对象 <!-- = --> {
	value: yield语句后面表达式的值
	done: true/false
}


	function* Generator(x){
	  yield x + 2;
	  yield x + 3;
	  yield x + 4;
	  yield x + 5;
	  yield x + 6;
	  yield x + 7;
	}

	var mygenerator = Generator(1);
	g.next(); // { value: 3, done: false }
	g.next(); // { value: 4, done: false }
	g.next(); // { value: 5, done: false }
	g.next(); // { value: 6, done: false }
	g.next(); // { value: 7, done: false }
	g.next(); // { value: 8, done: false }
	g.next(); // { value: undefined, done: true }



### async 函数的含义和用法

async 函数 <!-- 是 --> Generator 函数 语法糖

星号  <!-- 可以看做 --> async
yield <!-- 可以看做 --> await

async 函数 <!-- 是 --> 自带执行器

async 函数 本质 <!-- 是 --> 将 Generator 函数和自动执行器，包装在一个函数里。


### Node.js EventEmitter

EventEmitter <!-- 是 --> 事件触发 器功能 的封装
EventEmitter <!-- 是 --> 事件监听 器功能 的封装
EventEmitter <!-- 大部分是 --> 不会直接使用

EventEmitter 对象 实例化 发生错误 <!-- 会触发 --> error 事件 
EventEmitter 对象 添加 新的监听器 <!-- 会触发 --> newListener 事件
EventEmitter 对象 监听 被移除 <!-- 会触发 --> removeListener 事件

EventEmitter 对象 <!-- 可以有 --> N个事件

EventEmitter 对象 的一个事件 <!-- 仅 --> 一个事件名
EventEmitter 对象 的一个事件 <!-- 可以注册 --> N个函数/若干个参数
EventEmitter 事件 注册 函数 <!-- 是 --> 依次调用


### RxJS 

RxJS <!-- 是 --> 一个库
RxJS <!-- 可以看作是 --> 用来处理事件的 Lodash库

RxJS 使用方法 <!-- 是 --> 使用被排成一列的 observable 对象 来编写 异步程序
RxJS 使用方法 <!-- 是 --> 使用被排成一列的 observable 对象 来编写 基于事件的程序

RxJS 核心类型 <!-- 是 --> Observable
RxJS 附属类型  <!-- 是 --> Observer、 Schedulers、 Subjects
RxJS 操作符  <!-- 是 --> map、filter、reduce、every、 等数组操作符

RxJS map、filter、reduce、every、 等数组操作符 <!-- 可以将 --> 异步事件作为集合来处理

RxJS <!-- 可以管理 --> 事件序列
RxJS 管理 事件序列 <!-- 使用了 --> 观察者模式
RxJS 管理 事件序列 <!-- 使用了 --> 迭代器模式
RxJS 管理 事件序列 <!-- 使用了 --> 使用集合的函数式编程

RxJS Observable (可观察对象) <!-- 是 --> 一个可调用的未来值 的概念
RxJS Observable (可观察对象) <!-- 是 --> 一个可调用的未来事件的集合 的概念

RxJS Observable (可观察对象) <!-- 是 --> 多个值的 惰性 (延迟) 推送集合 的概念
promise <!-- 是 --> 单个值的 惰性 (延迟) 推送集合 的概念
推送 <!-- 是 --> 控制反转
惰性 (计算) <!-- 是 --> 严格计算

RxJS Observer  (观察者) <!-- 是 --> 一个回调函数的集合
RxJS Observer  (观察者) <!-- 是 --> 监听由 Observable 提供的值

RxJS Subscription (订阅) <!-- 表示 -->  Observable 的执行
RxJS Subscription (订阅) <!-- 主要用于 -->  取消 Observable 的执行

RxJS Operators (操作符) <!-- 是 -->  纯函数 map、filter、concat、flatMap
RxJS Operators (操作符) <!-- 用来 -->  处理集合
纯函数 产生值 <!-- 是 -->   RxJS 强大的地方
纯函数 产生值 <!-- 味着 --> 代码更不容易出错


RxJS Subject (主体) <!-- 类似 -->  EventEmitter
RxJS Subject (主体) <!-- 是 -->  将 值/事件 多路推送给 多个 Observer 的唯一方式

RxJS Schedulers (调度器) <!-- 是用来 -->  控制并发
RxJS Schedulers (调度器) <!-- 是 -->  中央集权的调度员
RxJS Schedulers (调度器) <!-- 允许 -->  发生计算时进行协调


### 结论

ReJS 是类似于 EventEmitters 的 多个值 Promise 库，本质是一种观察者的设计模式。
在 Node.js 里可能会很有用。



### 单例模式 

单例模式的定义 <!-- is --> 保证一个类仅有一个实例，并提供一个访问它的全局访问点。

JAVA <!-- 是通过 --> 代理类 实现 单例模式的概念


	var namespace1 = { 
	    a: function(){ 
	        alert (1); 
	    }, 
	    b: function(){ 
	        alert (2); 
	    } 
	};

	var user = (function(){ 
	    var __name = 'sven', 
	        __age = 29; 
	    return { 
	        getUserInfo: function(){ 
	            return __name + '-' + __age; 
	        } 
	    } 
	})(); 

### 策略模式

策略模式 <!-- is --> 定义一系列的(算法/过程)，把它们一个个封装起来，并且使它们可以相互替换。
策略模式 <!-- 可以认为 --> 在本质上是(委托/代理)模式的一种具体应用


很多公司的年终奖是根据员工的工资基数和年底绩效情况来发放的。例如，绩效为S的人年终奖有4倍工资，绩效为A的人年终奖有3倍工资，而绩效为B的人年终奖是2倍工资。假设财务部要求我们提供一段代码，来方便他们计算员工的年终奖。



	var strategies = { 
	    "S": function( salary ){ 
	        return salary * 4; 
	    }, 
	    "A": function( salary ){ 
	        return salary * 3; 
	    }, 
	    "B": function( salary ){ 
	        return salary * 2; 
	    } 
	}; 

	var calculateBonus = function( level, salary ){ 
	    return strategies[ level ]( salary ); 
	}; 


### 代理模式


我们购买火车票可以去火车站买，但是也可以去火车票代售处买，此处的火车票代售处就是火车站购票的代理，即我们在代售点发出买票请求，代售点会把请求发给火车站，火车站把购买成功响应发给代售点，代售点再告诉你。但是代售点只能买票，不能退票，而火车站能买票也能退票，因此代理对象支持的操作可能和委托对象的操作有所不同。


为什么 <!-- 要有 --> 代理?

保护代理 <!-- is --> 过滤一些请求
虚拟代理 <!-- 类似 --> 懒加载


代理模式的应用场景 <!-- 是 --> 什么？

Promise <!-- is --> 虚拟代理
Rxjs <!-- is --> 也算虚拟代理



### 观察者模式

代理模式 <!-- 只有 --> 两个角色
观察者模式 <!-- is --> 解决在一个由多个模块组成的应用中，其中一个模块状态改变导致其他模块也得跟着改变这个需求 
观察者模式 <!-- 类似 --> mvc
观察者模式 <!-- 类似 --> 发布 － 订阅模式


### 组合模式

组合模式 <!-- is --> 事物是由相似的子事物构成 



### 模板方法

模板方法 <!-- is基于 --> 继承的设计模式 


### 享元模式

享元模式 <!-- is --> 用于性能优化的模式 



单一职责原则 <!-- is --> 一个对象 只做一件事情

最少知识原则 <!-- is --> 一个对象 应当尽可能少地与 其他对象 发生相互作用

封装 <!-- is --> 最少知识原则

开放-封闭原则 <!-- is --> 当新改动，拓展，不允许改动源码

面向接口编程



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













