

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



### @observable 是做什么的?

@observable 类似于 装饰器

@observable 是 观察的意思

observable(value)

@observable classProperty = value


### @computed ?

computed 是 计算

getter/setter 函数



### autorun

如果你想使用一个自动运行函数，且并不想产生一个新值时，使用 autorun。



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











### Reaction

是 autorun 的变体

作用是 更精细的控制




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





### 为什么要用 MobX ?

函数响应式编程（TFRP）方式

状态管理（state management）变得简单、具有高扩展性的库


比 redux 优雅不少

将应用状态同步到 React 组件内 和 redux 是一样的





todoMVC 这个例子太过于复杂了. 

其本身 MobX 只作为一个顶层 数据抽象 不应该承担这么重的 计算. 这只会让程序变的更加复杂不可控

其实 Redux 就已经是很好了, 

MobX 作为一些基本功能 也是可以的












