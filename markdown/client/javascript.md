# JavaScript

## 目录

* JavaScript概述
* [作用域](#scopes)
* [this](#this)
* [对象](#Object)
* [函数](#function)
* [类型](#Types)
* [原型链](#Prototype_chain)
* [面向委托(关联)思想 与 仿Class 思想](#Class)
***
## JavaScript概述

* [解释型语言](https://baike.baidu.com/item/%E8%A7%A3%E9%87%8A%E5%9E%8B%E8%AF%AD%E8%A8%80/8888952?fr=aladdin)
	* 相对于编译型语言
	* 源代码不是直接翻译成机器语言 (机器语言速度快
	* 先翻译成中间代码，再由解释器对中间代码进行解释运行。(跨平台
* [头等函数 (First-class Function) 的编程语言](https://developer.mozilla.org/zh-CN/docs/Glossary/First-class_Function)
* [**基于原型**](#Prototype_chain)
* **动态类型语言**
	* 弱类型语言（精华
	* 动态对象（精华
	* 不需要进行变量/对象类型声明的语言
	* 一般情况下不需要编译
* 抽象程度很高的编程范式
	* **面向对象** 编程风格
	* **命令式** 编程风格
	* **声明式** 编程风格 (函数式
***
## <div id="scopes">作用域</div>

* 词法作用域
* 函数作用域和块作用域
	* 垃圾回收
	* 闭包
* 函数提升
* [this](#this)

### JavaScript编译原理

和传统的语言编译相似,但比传统语言编译复杂  

以下是传统语言编译流程:  
分词/词法分析 - 代码块  
解析/语法分析   
代码生成  

### 理解作用域 

var a = 2;  
变量的赋值操作会执行两个动作  

1. 首先编译器会在当前作用域中声明一个变量
2. 在运行时引擎会在作用域中查找该变量，如果能够找到就会对它赋值。

作用域就发生在 引擎执行 第二步生成代码的时候

LHS 查询 - 左侧  
RHS 查询 - 非左侧 retrieve his source value（取到它的源值）

```js
function foo(a) {
console.log( a ); // 2
}
foo( 2 );
```

* 引擎：我说作用域，我需要为 foo 进行 RHS 引用。你见过它吗？
* 作用域：别说，我还真见过，编译器那小子刚刚声明了它。它是一个函数，给你。
* 引擎：哥们太够意思了！好吧，我来执行一下 foo。
* 引擎：作用域，还有个事儿。我需要为 a 进行 LHS 引用，这个你见过吗？
* 作用域：这个也见过，编译器最近把它声名为 foo 的一个形式参数了，拿去吧。
* 引擎：大恩不言谢，你总是这么棒。现在我要把 2 赋值给 a。
* 引擎：哥们，不好意思又来打扰你。我要为 console 进行 RHS 引用，你见过它吗？作用域：咱俩谁跟谁啊，再说我就是干这个。这个我也有，console 是个内置对象。给你。
* 引擎：么么哒。我得看看这里面是不是有 log(..)。太好了，找到了，是一个函数。
* 引擎：哥们，能帮我再找一下对 a 的 RHS 引用吗？虽然我记得它，但想再确认一次。
* 作用域：放心吧，这个变量没有变动过，拿走，不谢。
* 引擎：真棒。我来把 a 的值，也就是 2，传递进 log(..)。
* ……

作用域遮蔽效应

try/catch 也会创建块级作用域  

const/let 会销毁，垃圾回收、变量不会被提升

函数提升

```js
foo(); // 1
var foo;
function foo() {
	console.log( 1 );
}
foo = function() {
	console.log( 2 );
};
```

> 动态作用域

eval() 函数  
with 关键字  

可以进行 欺骗 词法作用域!
不建议使用，难掌握，并且性能下降。

***
## <div id="this">this</div>

* this有什么好处？
* this常见误区
* this到底是什么？
* 如何测试this？

### this有什么好处？

如果不使用 this ，那就需要给 一个函数 显式传入一个上下文对象。  
上下文对象是会被经常使用到的东西，例如：React、原型
随着你的使用模式越来越复杂，显式传递上下文对象会让代码变得越来越混乱，使用 this 则不会这样。
this 提供了一种更优雅的方式来隐式“传递”一个对象引用，因此可以将 API 设计得更加简洁并且易于复用。

### this常见误区

#### 指向自身

```js
function foo(num) {
	console.log( "foo: " + num );
	// 记录 foo 被调用的次数
	this.count++;
}
foo.count = 0;
var i;
for (i=0; i<10; i++) {
	if (i > 5) {
		foo( i ); // 误
		// 使用 call(..) 可以确保 this 指向函数对象 foo 本身
		// foo.call( foo, i );
	}
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9
// foo 被调用了多少次？
console.log( foo.count ); // 0
```

#### 指向作用域

某些情况下是正确的  
实际虽然 this 在任何情况下都不指向函数的词法作用域。  
但在 JavaScript 内部，作用域确实和对象类似，可见的标识符都是它的属性。

```js
function foo() {
	var a = 2;
	this.bar();
}
function bar() {
	console.log( this.a );
}
foo(); // ReferenceError: a is not defined
```

### this到底是什么？

* 当一个函数被调用时，会创建一个活动记录（执行上下文）。_（函数的调用方式。_
* 这个记录会包含
	* 函数在哪里被调用（调用栈）
	* 函数的调用方法
	* 传入的参数等信息
* this 就是记录的其中一个属性
* 会在函数执行的过程中用到。// _this 是在运行时进行绑定的 （并不是在编写时绑定_

#### 首先要明白函数在哪里被调用？  
最重要的是分析调用栈（就是为了到达当前执行位置所调用的所有函数）。

```js
function baz() {
	console.log( "baz" );
	bar(); // <-- bar 的调用位置
}
function bar() {
	console.log( "bar" );
	foo(); // <-- foo 的调用位置
}
function foo() {
	console.log( "foo" );
}
baz(); // <-- baz 的调用位置
```

#### 其次要明白 this 绑定规则？

1. 默认绑定（最常用函数调用
2. 隐式绑定
	* 隐式丢失

##### 隐式绑定

```js
function foo() {
	console.log( this.a );
}
var obj = {
	a: 2,
	foo: foo
};
obj.foo(); // 2
```

##### 隐式丢失  

例子一：  
引用丢失 隐式绑定  
```js
function foo() {
	console.log( this.a );
}
var obj = {
	a: 2,
	foo: foo
};
var bar = obj.foo;// 实际上，它引用的是 foo 函数本身，
var a = "oops, global";
bar(); // "oops, global"
```  

例子二：  
回调函数丢失 this 绑定  

```js
function foo() {
	console.log( this.a );
}
function doFoo(fn) {
	// fn 其实引用的是 foo
	fn(); // <-- 调用位置！
}
var obj = {
	a: 2,
	foo: foo
};
var a = "oops, global"; // a 是全局对象的属性
doFoo( obj.foo ); // "oops, global"
```

##### 显式绑定

* call();  
* apply();
* bind(); (ES5 中提供了内置的方法 Function.prototype.bind

call()；硬绑定:  
```js
function foo() {
	console.log( this.a );
}
var obj = {
	a:2
};
var bar = function() {
	foo.call( obj );
};
bar(); // 2
setTimeout( bar, 100 ); // 2
bar.call( window ); // 2
// 另外一个例子
function cat(){

}
cat.prototype={
	food:"fish",
	say: function(){console.log("I love "+this.food);}
}
var blackCat = new cat;
blackCat.say();

var whiteDog = {food:"bone"}
blackCat.say.call(whiteDog);
```

bind()；硬绑定:  
```js  
var a = 9; 
var obj = {
  a: 81,
  foo: function() { return this.x; }
};

obj.foo(); // 81

var bar = obj.foo;
bar(); // 9

var doFoo = bar.bind(obj);
doFoo(); // 返回 81
```

> Tip ES6的 Array.prototype.forEach(callback(currentValue, index, array){...}, this); 也可以绑定this。

##### new绑定

1. 接创建（或者说构造）一个全新的对象。
2. 这个新对象会被执行 [[ 原型 ]] 连。
3. 这个新对象会绑定到函数调用的 this。
4. 如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。

```js  
function foo(a) {
	this.a = a;
}
var bar = new foo(2);
console.log( bar.a ); // 2
```

##### 箭头函数

一个箭头函数表达式的语法比一个函数表达式更短，并且不绑定自己的 this，arguments，super或 new.target。
这些函数表达式最适合用于非方法函数，并且它们不能用作构造函数。

那么什么情况下该使用箭头函数？

1. 箭头函数适合于无复杂逻辑或者无副作用的纯函数场景下，例如用在map、reduce、filter的回调函数定义中；
2. 不要在最外层定义箭头函数，因为在函数内部操作this会很容易污染全局作用域。最起码在箭头函数外部包一层普通函数，将this控制在可见的范围内；
3. 如开头所述，箭头函数最吸引人的地方是简洁。如果你经常编写 this 风格的代码，但是绝大部分时候都会使用 self = this 或者箭头函数
来否定 this 机制。在有多层函数嵌套的情况下，箭头函数的简洁性并没有很大的提升，反而影响了函数的作用范围的识别度，这种情况不建议使用箭头函数。

例子一：  
```js
function foo() {
  this.a = 1
  let b = () => console.log(this.a)
  b()
}
foo()  // 1

// 与下面代码是等价的

function foo() {
  this.a = 1
  let self = this
  let b = () => console.log(self.a)
  b()
}
foo()  // 1
```

> 参考：[少年，不要滥用箭头函数啊 ](https://jingsam.github.io/2016/12/08/things-you-should-know-about-arrow-functions.html)

#### 如何测试this？

this 是可以进行测试的，记住这点！  

```js
var a = "这是this";
console.log( this.a );
```

***
## <div id="Object">对象</div>

对象只是带有属性和方法的特殊数据类型

对象包括一个原型链特征

JavaScript对象特殊的 [[Prototype]] 内置属性

几乎所有的对象在创建时 [[Prototype]] 属性都会被赋予一个非空的值。

#### 两种定义方式

1. 对象字面量  
var myObj = {key: value};
2. 构造函数  
var myObj = new Object();  
myObj.key = value;

> 没有所谓的“基本类型”、“原始类型”

#### 值类型
* 基本内置值类型/原始数据类型（7种）
	* string
	* number
	* boolean
	* null
	* undefined
	* object
	* [Symbol](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
* 内置对象/引用类型
	* String
	* Number
	* Boolean
	* Object
	* Function
	* Array
	* Date
	* RegExp
	* Error

这些内置对象从表现形式来说很像其他语言中的类型（type）或者类（class），比如 C# 中的 String 类。  
但是在 JavaScript 中，它们实际上只是一些内置函数。  
这些内置函数可以当作构造函数来使用，从而可以构造一个对应子类型的新对象。

null 指空值（empty value）  
undefined 指没有值（missing value）  
undefined 指从未赋值
null 指曾赋过值，但是目前没有值


```js
// 基本类型
var strPrimitive = "I am a string";	
strPrimitive.length // 会自动进行转换为 new String("I am a string")
// 内置对象
var strObject = new String( "I am a string" );
```

### <div id="Types">对象类型<div>
对象类型转换  

typeof运算符来查看值的类型   
在对变量执行typeof操作时，得到的结果并不是该变量的类型，而是该变量持有的值的类型，因为JavaScript中的变量没有类型。  
所以变量在未持有值的时候为undefined。 

null类型不在此列。比较特殊  
typeof null === "object"; // 正确的返回结果应该是 "null" 但这个bug存在了二十年  
typeof function a(){ /* .. */ } === "function"; // 它实际上是object的一个“子类型” 原因是它有一个内部属性[[Call]]  

所有 typeof 返回值为"object"的对象（如数组）都包含一个内部属性 [[Class]]  
这个属性无法直接访问，一般通过Object.prototype.toString(..)  


NaN 是一个数值，表示一个不能产生正常结果的运算结果！

JavaScript 字符类型 Unicode  
UTF-8 就是在互联网上使用最广的一种 Unicode 的实现方式

if 判断为假的情况 flase null 0 "" undefined NaN  

js 乘除法 是优先级大于 加减法  

#### 对象的值(属性) // 方法

对象的值(属性) 并不会存在对象容器内部。  
真正存储在对象象容器内部的是这些 对象属性的_名称_。  
对象的值(属性)是储存在引擎内部的,与之关联的就 是对象属性的_名称_。类似于指针(引用  

例：  
var myObject = {a: 2};  
“属性访问”——myObject.a;  
“键访问”——myObject["a"];  

#### 如何复制一个对象？

对象是通过引用来进行传递的，一般都不会被拷贝。

如果没有 function： var newObj = JSON.parse( JSON.stringify( someObj ) );  
ES6的浅拷贝 Object.assign(..) 方法；  

```js
function anotherFunction() { /*..*/ }

var anotherObject = {
	c: true
};

var anotherArray = [];

var myObject = {
	a: 2,
	b: anotherObject, // 引用，不是复本！
	c: anotherArray, // 另一个引用！
	d: anotherFunction
};

anotherArray.push( anotherObject, myObject );

// ES6的方法 浅复制
var newObj = Object.assign( {}, myObject );
// 遍历myObject可枚举的自有键

newObj.a; // 2
newObj.b === anotherObject; // true
newObj.c === anotherArray; // true
newObj.d === anotherFunction; // true
```
#### ES5 属性描述符

```js
var myObject = {
	a:2
};
// 获取 属性特性
Object.getOwnPropertyDescriptor( myObject, "a" );
// {
// value: 2,
// writable: true,	// writable 决定是否可以修改属性的值。
// enumerable: true, // 属性是否会出现在对象的属性枚举中，比如说 for..in 循环。
// configurable: true // 只要属性是可配置的，就可以使用 defineProperty(..) 方法来修改属性描述符
// }
// 对属性特性进行配置
Object.defineProperty( myObject, "b", {
	value: 3,
	writable: true,
	configurable: true,
	enumerable: true
} );
myObject.b; // 3
```

#### [[Get]] 和 [[Put]] 以及 ES5访问描述符（getter 和 setter）

[[Get]] 会向着原型链上寻找  
[[Put]] 实际的行为取决于许多因素，如果对象中不存在这个属性，[[Put]] 操作会更加复杂。  
例如:myObject.foo = "bar";会先在原型链上寻找，如果找到就赋值，如果没找到foo 就会被直接添加到 myObject 上。  

JavaScript 会忽略（getter 和 setter）的 value 和 writable 特性，关心 configurable 和 enumerable 特性。  
（getter 和 setter） 实际上是隐藏函数，  

如何使用getter？ _通常来说 getter 和 setter 是成对出现的（只定义一个的话
通常会产生意料之外的行为）_  

```js
//用 对象文字语法 方式 定义一个 getter
var myObject = {
	get a() {
		return 2;
	}
};
// 用 defineProperty 方式
Object.defineProperty(
	myObject,
	"b", 
	{
		get: function(){ return this.a * 2 },// 给 b 设置一个 getter
		enumerable: false// 确保 b 会出现在对象的属性列表中
	}
);
console.log(myObject.a)
console.log(myObject.b)

// 这个方法可以用来检测一个对象是否含有特定的自身属性；该方法会忽略掉那些从原型链上继承到的属性。
myObject.hasOwnProperty('a');   // true

// propertyIsEnumerable(..) 会检查属性是否直接存在于对象中（该方法会忽略掉那些从原型链上继承到的属性。）并且 enumerable:true 
myObject.propertyIsEnumerable( "a" ); // true

// 包含所有可枚举属性 但是只会查找对象直接包含的属性 原型链
Object.keys( myObject ); // ["a"]

// ，包含所有属性，无论它们是否可枚举。但是只会查找对象直接包含的属性 原型链
Object.getOwnPropertyNames( myObject ); // ["a", "b"]
```

setter 属性的设置和屏蔽  

通常来说，使用屏蔽得不偿失，所以应当尽量避免使用。  

```js
var anotherObject = {
	a:2
};
var myObject = Object.create( anotherObject );
anotherObject.a; // 2
myObject.a; // 2
anotherObject.hasOwnProperty( "a" ); // true
myObject.hasOwnProperty( "a" ); // false
myObject.a++; // 隐式屏蔽！
anotherObject.a; // 2
myObject.a; // 3
myObject.hasOwnProperty( "a" ); // true
```  

***
## <div id="Prototype_chain">原型链</div>

JavaScript 常被描述为一种基于原型的语言 (prototype-based language)  

原型链接只有在检索值的时候才被用到！

通过对象字面量创建的对象都连接到 Object.prototype 这个JavaScript中的标准对象中

### 相关的词汇

* 对象的内部原型（隐式原型） // JavaScript对象 [[prototype]] 机制
	* 构成 **原型链**
	* [[Get]] 操作会查找对象内部 [[Prototype]] 关联的对象。
* 构造器的原型（显式原型） 
	* JavaScript仅函数拥有 prototype属性(不可枚举), 准确来说是构造**函数所特有**。
	* [[prototype]] 和 prototype 不是同一个东西

### 原型链原理解析

> 所有"构造器/函数"的__ proto__(对象的内部原型)都指向 Function.prototype，它是一个空函数（Empty function）

JavaScript 内置构造器/对象(build-in) 共计12个（ES5中新加了JSON）

可访问的8个构造器  

* Number.__ proto__   === Function.prototype // true
* Boolean.__ proto__  === Function.prototype // true
* String.__ proto__   === Function.prototype // true
* Object.__ proto__   === Function.prototype // true
* Function.__ proto__ === Function.prototype // true
* Array.__ proto__    === Function.prototype // true
* RegExp.__ proto__   === Function.prototype // true
* Error.__ proto__    === Function.prototype // true
* Date.__ proto__     === Function.prototype // true

对象形式存在的，无需new

* Math.__ proto__ === Object.prototype  // true
* JSON.__ proto__ === Object.prototype  // true

剩下2个

* Global 不能直接访问
* Arguments 仅在函数调用时由JS引擎创建

结论

* 所有的构造器都来自于Function.prototype
	* 甚至包括根构造器Object及Function自身
* 所有构造器都继承了 Function.prototype 的属性及方法
	* length、call、apply、bind（ES5）......

> 所有构造器的__ proto__ 都是Function.prototype,那么Function.prototype的 __ proto__是什么？

Function.prototype.__ proto__ === Object.prototype  // true

结论：

* **JavaScript 中函数是一等公民**
* 所有的构造器也都是一个普通JS对象，可以给构造器添加/删除属性等
* 也继承了Object.prototype上的所有方法：toString、valueOf、hasOwnProperty

Object.prototype.__ proto__ === null  // true

到达顶部

> 所有"对象"(构造器的实例)的__ proto__(对象的内部原型)都指向 其构造器的prototype

JavaScript/浏览器/Node.js引擎内置的构造器

```js  
// 对象字面量(语法糖)构造出来的
var obj = {name: 'jack'}
var arr = [1,2,3]
var reg = /hello/g
var date = new Date
var err = new Error('exception')
 
console.log(obj.__proto__ === Object.prototype) // true
console.log(arr.__proto__ === Array.prototype)  // true
console.log(reg.__proto__ === RegExp.prototype) // true
console.log(date.__proto__ === Date.prototype)  // true
console.log(err.__proto__ === Error.prototype)  // true
```

### constructor属性介绍

constructor属性 返回一个指向创建了该对象原型的函数引用。  

```js  
// constructor 属性
var test = new Array();
test.constructor == Array // true 说明返回一个指向创建了该对象原型的函数引用。
// .constructor 属性 实际运用的例子！
function Person(name) {
    this.name = name
}
// 重写原型 注意：对象字面量
Person.prototype = {
    getName: function() {}
}
var p = new Person('jack') // new 将双方进行关联
console.log(p.__proto__ === Person.prototype) // true 
console.log(p.__proto__ === p.constructor.prototype) // false {getName: function() {}}
// p.constructor 是 Person 返回一个指向创建了该对象原型的函数引用。
```

*** 
## <div id="function">函数<div>
所谓的编程就是将一组需求分解成一组函数与数据结构。

JavaScript最好的特性，就是他对函数的实现。

* 函数也是对象
	* 拥有 [[prototype]] 隐藏链接
* 每个函数创建时候，附有2个隐藏的属性  
	1. 函数的上下文  
	2. 实现函数行为的代码（既调用属性  
* 每个函数对象在创建时，也随带一个 prototype 属性、
	* prototype属性的值为该函数的对象
	* 

调用时    

* 除了形式的参数，每个函数接收两个附加的参数（this，argument类数组）  
* 当一个函数被保存为对象的一个属性时（方法），此时被调用，this会被绑定到该对象。（注意会有丢失  
	* JavaScript有个很优秀的特性就是级联、就是方法调用 返回 this，这样可以调用一个对象的多个方法！
* var that/self = this; 可以解决函数调用时被绑定到全局对象（这是程序设计的错误

JavaScript可以利用闭包实现函数的记忆，其他的语言也行。

try/catch 虽然会增加消耗，但是这可以构建稳健的代码

for in 在原型上表现很糟糕	，应该使用 hasOwnProperty

*** 
## <div id="Class">面向委托(关联)思想 与 仿Class 思想<div>

#### 为什么一个对象需要关联_(原型链)_到另一个对象？这样做有什么好处？

因为 JavaScript 和面向类的语言不同。JavaScript它并没有类来作为对象的抽象模式。  
JavaScript 中只有对象。  
字面上的意思“面向对象”的语言，即是以不通过类，直接创建对象！  
new Fun() 这个函数调用实际上并没有直接创建关联，这个关联只是一个意外的副作用。  
Object.create(..)可以更加直接的方法创建关联    
一般称为 原型继承 它常常被视为动态语言版本的类继承。但是这个术语严重影响了大家对于 JavaScript 机制真实原理的理解。  
委托更适合更加准确地描述 JavaScript 中对象的关联机制。  

##### 利用隐式混入模仿 类的复制  
```js
var Something = {
	cool: function() {
		this.greeting = "Hello World";
		this.count = this.count ? this.count + 1 : 1;
	}
};
var Another = {
	cool: function() {
		// 隐式把 Something 混入 Another
		Something.cool.call( this ); // 可以测试这里的this是指什么？
	}
};
Another.cool();
Another.greeting; // "Hello World"
Another.count;    // 1（count 不是共享状态）
```

#### 使用Object.create(...)进行关联 ES5
```js
// 超类
function Shape() {
  this.x = 0;
  this.y = 0;
}
Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.log(this.x);
    console.log(this.y);
};

// 子类
function Rectangle() {
  Shape.call(this); //call super constructor.
}
// 会凭空创建一个“新”对象(Shape.prototype)并把新对象内部的 [[Prototype]] 关联到你指定的对象
Rectangle.prototype = Object.create(Shape.prototype);
// 避免 constructor 绑定到 Shape
Rectangle.prototype.constructor = Rectangle;

// ES 可以这么做 Object.setPrototypeOf( Rectangle.prototype, Shape.prototype );
// 因为这里执行了一次，相当于初始化，所以 Rectangle 为 0;
var rect = new Rectangle();

rect.move(1, 1); // 1 , 1
rect.move(1, 1); // 2 , 2
rect.move(1, 1); // 3 , 3
```   

上面的例子  
Object.create(..) 会创建一个新对象（Shape.prototype）并把它 [[Prototype]] 关联到我们指定的对象（Rectangle.prototype）  
这样可以充分发挥 [[Prototype]] 机制的威力  

如果使用:  
Rectangle.prototype = Shape.prototype;  
并不会创建一个关联到 Shape.prototype 的新对象，只是让 Bar.prototype 直接引用 Foo.prototype 对象。  

如果使用:   
Bar.prototype = new Foo()   
会创建一个关联到 Bar.prototype 的新对象。但是它使用了 Foo(..) 的“构造函数调用”  
会生成 .prototype 和 .constructor 引用  
如果函数 Foo 有一些副作用就会影响到 Bar() 的“后代”，后果不堪设想。  

如果有一个标准并且可靠的方法来修改对象的 [[Prototype]] 关联就好了！  
ES6 添加了辅助函数 Object.setPrototypeOf(..)，可以用标准并且可靠的方法来修改关联。  

结论：  
JavaScript并一定不需要类来创建两个对象之间的关系，只需要通过委托来关联对象就足够了。  
Object.create(..) 和 Object.setPrototypeOf(..) 不包含任何“类的诡计”，所以它可以完美地创建我们想要的关联关系。  

缺陷是：  
1.兼容问题  
可以使用Object.create()的 polyfill 代码	  
if (!Object.create) {Object.create = function(o) {function F(){}F.prototype = o;return new F();};}
2.API设计变的很诡异
如果这样 进行 直接委托(关联)，因为是隐藏起来的，所以对代码的可读性是不好的;
你需要进行 内部委托(关联) 让 API 接口设计更加清晰。  


#### 如何查看关联的对象是谁？（反射

1. **instanceof 操作符**
	* 只能处理对象（a）和函数（带 .prototype 引用的 Foo）之间的关系  
2. **isPrototypeOf(..)** 两个对象（比如 a 和 b）之间是否通过 [[Prototype]] 链关联？   
这样只需要2个对象就可以进行判断他们之间的关系;   
3. JavaScript中任意对象都有一个内置属性 [[prototype]]  
也可以直接获取一个对象的 [[Prototype]] 链。  
ES5有了对于这个内置属性标准的Get方法Object.getPrototypeOf()  
在 ES5 中，标准的方法是：**Object.getPrototypeOf( a );**
4. 最后 .__ proto__ 也可以检查，
	* 但是是ES6标准，并且性能极差，ES5之前没有标准的方法访问这个内置属性
	* 看起来很像一个属性，但是实际上它更像一个 getter/setter  
	* 实际的原理是[[prototype]]  

以下是例子：

```js   
function Foo() {
	// ...
}
Foo.prototype.blah = ...;

var a = new Foo();

// 方法一： 在 a 的整条 [[Prototype]] 链中是否有指向 Foo.prototype 的对象？
a instanceof Foo; 

// 方法二： 在 a 的整条 [[Prototype]] 链中是否出现过 Foo.prototype ？
Foo.prototype.isPrototypeOf( a );

// 方法三 a 的整条 [[Prototype]]  是否与 Foo.prototype相等
Object.getPrototypeOf( a ) === Foo.prototype;

a.__proto__ === Foo.prototype;
```

结论：  
检查关联的对象是谁是隐性的。  
所以最好把 [[Prototype]] 对象关联看作是只读特性！  
这样可以增加代码的可读性。  

### 面向委托(关联)的JavaScript程序设计
相比于面向类（或者说面向对象），我会把这种编码风格称为“对象关联”（OLOO，objects linked to other objects）。  
这是一种极其强大的设计模式  
和父类、子类、继承、多态等概念完全不同。  
对象并不是按照父类到子类的关系垂直组织的，而是通过任意方向的委托关联并排组织的。  

例子一：  

```js
// 通俗意义上的面向对象的思想
class Task {
	id;
	// 构造函数 Task() 同名
	Task(ID) { id = ID; }
	outputTask() { output( id ); }
}
class XYZ inherits Task {
	label;
	// 构造函数 XYZ()
	XYZ(ID,Label) { super( ID ); label = Label; }
	outputTask() {
		super(); // 调用这个方法的原始版本。outputTask()
		output( label ); 
	}
}
class ABC inherits Task {
	// ...
}
// 转换为JavaScript面向委托(关联)的程序设计
Task = {
	setID: function(ID) { this.id = ID; }, // 这里的虽然是被委托（关联），是通用(复用)的，但是 this this 的隐式绑定规则; 运行时 this 仍然会绑定到 XYZ
	outputID: function() { console.log( this.id ); }
};
// 让 XYZ 委托(关联) Task
XYZ = Object.create( Task );
XYZ.prepareTask = function(ID,Label) {
	this.setID( ID ); // 通过 [[Prototype]] 找到的
	this.label = Label;
};
XYZ.outputTaskDetails = function() {
	this.outputID();
	console.log( this.label );
};
// ABC = Object.create( Task );
// ABC ... = ...
```

例子二：  
```js

// JavaScript典型原型面向对象风格
function Foo(who) {
	this.me = who;
}
Foo.prototype.identify = function() {
	return "I am " + this.me;
};
function Bar(who) {
	Foo.call( this, who );
}
Bar.prototype = Object.create( Foo.prototype );
Bar.prototype.speak = function() {
	console.log( "Hello, " + this.identify() + "." );
};
var b1 = new Bar( "b1" ); // 会执行一次，相当于初始化 this会被绑定到 b1
var b2 = new Bar( "b2" );
b1.speak(); // 会向 [[prototype]] 寻找 speak 方法
b2.speak();
// JavaScript面向委托(关联)的程序设计
Foo = {
	init: function(who) {
		this.me = who;
	},
	identify: function() {
		return "I am " + this.me;
	}
};
Bar = Object.create( Foo );
Bar.speak = function() {
	console.log( "Hello, " + this.identify() + "." );
};
var b1 = Object.create( Bar );
b1.init( "b1" );
var b2 = Object.create( Bar );
b2.init( "b2" );
b1.speak();
b2.speak();
```

### 结论：  

如果JavaScript使用典型原型面向对象风格，会使得思维模型和关系变得复杂。  
而使用对象关联风格代码会使得思维模型更加简洁。  
可以使得你更加关注一件事：对象之间的关联关系。  
对象关联可以更好地支持关注分离（separation of concerns）原则，创建和初始化并不需要合并为一个步骤。

我们可以选择在 JavaScript 中努力实现类机制，也可以拥抱更自然的 [[Prototype]] 委托机制。
当你只用对象来设计代码时，不仅可以让语法更加简洁，而且可以让代码结构更加清晰！

### ECMAScript 2015 中的 类(class)

ES6中的类主要是 JavaScript 现有的基于原型的继承的语法糖。  
ES6提供了一个更简单和更清晰的语法来创建对象并处理继承。   
像构造函数一样，ECMAScript 2015 中的 类(class) 实际上也是个特殊的 函数。  
类语法有两个组成部分： *类表达式* 和 *类声明* 。

#### 如何定义类？ 

普通定义一个类

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
// 同等于
function Rectangle(height, width){
    this.height = height;
    this.width = width;
}
```

运用类表达式定义一个类

```js
/* 匿名类 */ 
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

/* 命名的类 */ 
let Rectangle = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

> 注意：函数声明和类声明之间的一个重要区别是函数声明会声明提升，类声明不会。

#### 如何使用类体和方法定义？ 

> 注意这里的 “constructor” （构造器）方法 与 对象的 .constructor 属性（不可枚举） 是不一样的。

* 一个 class 中只能有一个指定的 “constructor” （构造器）方法。
	* 通过new命令生成对象实例时，自动调用该方法。
* “constructor” 方法可以用于创建和初始化使用一个类创建的一个对象。  
* “constructor” 方法可以使用 super 关键字来调用一个父类的构造函数。   
* 如果没有显式指定构造方法，则会添加默认的 “constructor” 方法。
	* “constructor” 方法默认返回实例对象（即this）。
	* 如果 “constructor” 函数返回一个全新的对象，结果就会导致实例对象不是父类的实例。  

具体应用（原型调用）：  
```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  } 
  get area() { //与 ES5 一样， 在 Class 内部可以使用get和set关键字， 对某个属性设置存值函数和取值函数， 拦截该属性的存取行为。
    return this.calcArea()
  }
  calcArea() {
    return this.height * this.width;
  }
}
const square = new Rectangle(10, 10);

console.log(square.area);// 100
```

静态方法：  
```js
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));// 不需要实例化
```

使用 extends 创建子类：  

```js
class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

var d = new Dog('Mitzie');
// 'Mitzie barks.'
d.speak();
```

结论：  

使用 ES6 的 class语法糖 之后，典型原型面向对象风格思维模不再复杂。  
super(..)函数非常优雅。对象之间的关联关系变的简洁。  
尽管 class 仍然是通过 [[Prototype]] 机制实现的！  
所以仍然面临思维模式不匹配问题。  

*** 
## 未分类

### <div id="gouzhaohans">JavaScript中构造函数</div>

* 只是使用 new 操作符时被调用的函数。  
* 并不会属于某个类，也不会实例化一个类。
* 甚至都不能说是一种特殊的函数类型，它们只是仅当使用 new 时，函数调用会变成“构造函数调用”。  

####　当代码 new fun(...) 执行时：  

1. 一个新对象被创建。
	* 它继承自 fun.prototype（这个新对象会被执行 [[ 原型 ]] 连接。
2. 构造函数 fun 被执行。
	* 相应的传参会被传入。
	* 活动记录（执行上下文）(this) 会被绑定到新创建的对象。
	* new fun 是相等的 new fun()。
3. 如果构造函数返回了一个 "对象"，那么这个对象会取代整个new出来的结果。
	*  一般情况下构造函数不返回任何值
	*  用户如果想覆盖这个返回值，可以自己选择返回一个普通对象来覆盖。
4. 如果构造函数没有返回对象，那么new出来的结果为步骤1创建的对象。

> **普遍意义上的构造函数**  
> 例如: C#   
> 创建和初始化使用类创建的一个对象的一种特殊方法。  
> 是一个类里用于建立对象的特殊子程序  
> 函数名称一般与它所属的类的名称相同。    
> 构造器没有返回类型，不会被继承，且不会有范围修饰符。  
> 一个类可以有多个构造函数,可根据其参数个数的不同或参数类型的不同来区分它们 即构造函数的**重载**。    

### 暂时

依赖注入（dependency injection）

```js
function doSomethingCool(FeatureXYZ) { 
    var helper = FeatureXYZ || 
        function() { /*.. default feature ..*/ }; 
    var val = helper(); 
    // .. 
}
```

在JavaScript中变量不可能成为指向另一个变量的引用。
