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





