# [Node.js](http://nodejs.cn/api/)

## 目录

* [读取文件](#00)
* [操作相关 *永久启动 自动重启*](#01)

## <div id="00">读取文件</div>
[异步读取 <br> fs.readFile(path[, options], callback) ](http://nodejs.cn/api/fs.html#fs_fs_readfile_path_options_callback)


```JavaScript

	let mobileInfo =  async (ctx) => {
		let readFilePromise = new Promise(function(resolve, reject){
			fs.readFile('./index.html', 'utf8', (err, data) => {
			  if (err) {
				reject();
				return
			  };
			  resolve(data);
			});
		});
		await readFilePromise.then(function(successMessage){
			ctx.body = successMessage;
		});
	}

```


## <div id="01">操作相关 *永久启动 自动重启*</div>

> [forever](https://github.com/foreverjs/forever)

* 启动<br>forever start app.js
* 详情<br>forever list
* 停止<br>forever stop [pid]
* 重启所有<br>forever restartall

> [supervisor](https://github.com/petruisfan/node-supervisor)

*  supervisor myapp.js

node.js 文件会对加载的文件进行包装，一定会包含 require exports module __filename __dirname 变量  

所以 require 没有定义却可以存在、  

module 的代表模块自己

exports 是 module 的对象

## 请用你自己的话叙述一遍 Buffer 是什么？

网络协议请求与流，数据库，编码格式，处理图片与文件，  

属于堆外储存，所以有分配策略。（JavaScript 与 C++ 实现  

类数组 0 - 255 （不能当作字符串拼接  

Buffer.concat();  

Buffer 的性能是很好的、  


TCP服务器和HTTP服务器有什么区别？

TCP socket 属于传输层协议，构建高效网络应用

WebSocket 与 Node 非常兼容，因为事件循环的原因，长轮询

实时要求比较高的应用来说，在线游戏、在线证券、设备监控、新闻在线播报、RSS 订阅推送等等

Sec-WebSocket-Key 校验

解析URL字符串 require("querystring");

Cookie 是为了解决 HTTP 无状态协议这个问题的！
约定在请求首部字段里面的东西、

Session 是为了解决 Cookie 数据敏感的问题
就是一个名词，node.js没有内置支持，要自己去实现或者下载npm包！

报文的内容是通过data事件触发的，并且一般是通过流触发












