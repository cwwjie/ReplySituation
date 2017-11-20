

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

