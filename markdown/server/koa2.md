# [Koa2](https://github.com/koajs/koa)

## 目录

* [Promise 函数](#001)
* [generator 函数 *(koa1)*](#00)
* [async 函数 *(koa2)*](#01)
* [koa-router](#02)

## <div id="001">Promise 函数 *(koa1)*</div>


> [例子](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)  

```JavaScript

	var myFirstPromise = new Promise(function(resolve, reject){
	    //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
	    //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
	    setTimeout(function(){
	        resolve("成功!"); //代码正常执行！
	    }, 250);
	});
	
	myFirstPromise.then(function(successMessage){
	    //successMessage的值是上面调用resolve(...)方法传入的值.
	    //successMessage参数不一定非要是字符串类型，这里只是举个例子
	    console.log("Yay! " + successMessage);
	});

```




## <div id="00">generators 函数 *(koa1)*</div>

Generator 函数是协程在 ES6 的实现，最大特点就是可以交出函数的执行权（即暂停执行）。

> 相关名词  

* function*(){}
* yield
* next();

> 例子  

```JavaScript

	function* test(p){
	    console.log(p);     // 1
	    var a = yield p + 1;  //yield关键字可以让当前函数暂停执行并保存现场，并跳出到调用此函数的代码处继续执行。
	    console.log(a);     // 3
	}
	
	var g = test(1);      // 并没有打印出任何东西 相当于初始化函数
	var ret;
	ret = g.next();       // 打印出 1
	console.log(ret); // { value: 2, done: false }      表示 g.next()方法返回了一个对象
	ret = g.next(ret.value + 1);// 打印出 3
	console.log(ret); // { value: undefined, done: true } 表示 g.next()方法返回了一个新对象

```

> 相关文章  

* [Generator 函数的含义与用法 *作者:阮一峰*](http://www.ruanyifeng.com/blog/2015/04/generator.html)




## <div id="01">async 函数 *(koa2)*</div>

一句话，async 函数就是 Generator 函数的语法糖。  
目标是解决异步编程的繁琐操作。

> 相关名词  

* async function (){}
* await


> [例子](https://github.com/cwwjie/myWeb-Server/blob/master/controllers/Home/getDesign.js)  

```JavaScript

	let getDesign = async (ctx) => {
	
		await collection.find().then(function(value){
			...
		}
	}
	
	module.exports = getDesign

```


> 相关文章  

* [async 函数的含义和用法 *作者:阮一峰*](http://www.ruanyifeng.com/blog/2015/04/generator.html)



## <div id="02">koa-router</div>

> [官网文档](https://github.com/alexmingoia/koa-router)











