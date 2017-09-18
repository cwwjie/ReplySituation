# [webpack](https://doc.webpack-china.org/concepts/)

## 目录

* [Webpack Node.js 构建自动化流程](#00)

## Code Splitting 代码分割

### 什么是代码分割？有哪几种方式可以实现代码分割？  

—— Entry Points  
—— Prevent Duplication  
—— Dynamic Imports  
实际上第一种和第二种是连在一起的  




## <div id="00">Webpack Node.js 构建自动化流程</div>


> state 对象

1. 警告
	* stats.hasErrors()
	* stats.hasWarnings()
2. 计时信息
3. module 和 chunk 信息
	* stats.toJson([options](https://doc.webpack-china.org/configuration/stats/))
	* stats.toString(options)

> 示例

```JavaScript

	async function(ctx, next) {
		let webpackPromise = new Promise(function(resolve, reject){
			const compiler = webpack({
			  // Configuration Object
			});
	
			compiler.run((err, stats) => {
			  if (err || stats.hasErrors()) {
			    // Handle errors here
			    if (err.details) {
			      console.error(err.details);
			    }
			    return;
			  }

			  // Done processing
			  const info = stats.toJson();
			  if (stats.hasErrors()) {
			    console.error(info.errors);
			  }
			  if (stats.hasWarnings()) {
			    console.warn(info.warnings)
			  }
			  console.log(stats.toString({
			    chunks: false,  // Makes the build much quieter
			    colors: true    // Shows colors in the console
			  }));

			  // 返回 Promise
			  resolve(stats);
			});
		}
		await webpackPromise.then(function(successMessage){
			ctx.body = 'welcome to Rejiejay RESTful API';
		});
	}

```