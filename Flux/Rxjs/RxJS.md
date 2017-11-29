

### RxJS 应用场景

协同工具的任务看板

由若干个小方块构成

信息量较大，导致查询较复杂，其中有部分数据是可复用的

实时交互、某个标签定义修改了文字，需要去立刻更新当前界面所有的引用部分。

数据查询 是由 前端组装


### 同步、异步代码的统一

WebSocket 更新推送，只拉取无缓存的实体

查询同一种数据，可能是同步的（缓存中获取），可能是异步的（AJAX获取） 如何清晰地定义这种组合关系？

一组数据经过多种规则（过滤，排序）之后，又需要插入新的数据（主动新增了一条，WebSocket推送了别人新建的一条），这些新增数据都不能直接加进来，而是也必须走一遍这些规则，再合并到结果中。



### Promise 与 RxJS

Promise 只有一个返回值，响应一次

Observable 可以有多个返回值，响应多次



### 创建 Observables
—— Rx.Observable.create 接收一个参数：subscribe 函数

### 订阅 Observables
—— observable.subscribe(x => console.log(x));

### 执行 Observables
—— 只有在每个观察者订阅后才会执行
—— Observable 执行可以传递三种类型的值：
	"Next" 通知： 发送一个值，比如数字、字符串、对象，等等。
	"Error" 通知： 发送一个 JavaScript 错误 或 异常。
	"Complete" 通知： 不再发送任何值。
### 清理 Observables
—— var subscription = observable.subscribe(x => console.log(x));
subscription.unsubscribe() 可以取消进行中的执行：


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

EventEmitters
Redux
Mobx
RxJS
具体实现不一样 思想是 通的，发布订阅


这些理念都是为了解决什么问题?

1. 如何模块化
2. 模块间如何通信







