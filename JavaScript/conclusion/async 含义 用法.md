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
