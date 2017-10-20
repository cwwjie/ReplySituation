### TypeScript 里面的 interface 是什么? 为什么会有 interface? TypeScript 里面的 : 是什么? 解构赋值吗?

目的 准确 稳定 高效 易拓展 易维护

: string类型注解

	interface Person {
	  firstName: string;
	  lastName: string;
	}

	function greeter(person: Person) {
	  return "Hello, " + person.firstName + " " + person.lastName;
	}

	var user = { firstName: "Jane", lastName: "User" };


### TypeScript 里面的 public 是什么意思?

	class Student {
	  fullName: string;
	  constructor(public firstName, public middleInitial, public lastName) {
	      this.fullName = firstName + " " + middleInitial + " " + lastName;
	  }
	}


### TypeScript 的作用是什么?

TypeScript 是 JavaScript 的强类型版本。
本质依然是 JavaScript 编译期会去掉类型和特有语法

具体的添加了一些扩展有如 class / interface / module 等。这样会大大提升代码的可阅读性。

1. 强类型语言的优势在于静态类型检查(IDE 智能提示)
2. 代码重构
3. 可读性 各种便利的类型一目了然, 更容易明白作者的意图.

结论:  
静态类型更有利于构建大型应用

优点:  
Java C#   
静态类型更有利于构建大型应用

缺点:  
项目中大量依赖了第三方 JavaScript 类库，并且这些类库没有 .d.ts 文件  
熟练运用原型继承，不喜欢 class 关键字  
项目是小项目, 不需要多出一层!  

***
///\\\问题的堆栈///\\\
***


### TypeScript 里面的 @ 是什么意思?









***
///\\\正在解决的问题///\\\
***



















