### os, sys 是什么模块?
python解释器 执行.py
官方版 CPython
也有Java版的解释器 Jython -> Python代码编译成Java字节码执行。


### Python 源码可以找到吗?
windows下使用: where python
Linux下使用:   which python


### Python的from import和import的区别？


### 如何跑起来?
这货不一定能够跑起来的.
所幸的是可以看项目的历史!
多亏那人项目git写的好!


### python tornado 可以做 restful 吗?
### 既然我已经会Node.js，我还有必要学 Tornado吗？
评论 好项目 起步 影响


### pypi是不是官方自带的?
Python 官方的第三方软件存储库


### setup.py 与 requirements.txt 有什么区别?
setup.py 与 PyPI
requirements pip 


### Python如何删除已安装的模块或包（modules or packages）？
pip list
pip uninstall


|
|
|
|
***
///\\\优秀结论///\\\
***
|
|
|
|


### 据说 Python 有个虚拟环境?

virtualenv 这个插件

所有第三方的包都会被pip安装到Python3的site-packages目录下。

windows下使用: where python

C:\Users\fgh\AppData\Local\Programs\Python
\Python37\Lib\site-packages

### virtualenv如何使用?

初始化
virtualenv [虚拟环境名称] 

默认情况下，虚拟环境会依赖系统环境中的 site packages
建立虚拟环境 --no-site-packages

启动虚拟环境
cd [虚拟环境名称] 
source ./bin/activate

退出虚拟环境
deactivate


### 先把 hello world 跑起来吧!







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






### 如何写setup.py 与 requirements.txt?
setup.py 是要自己写的.

如何自动生成和安装requirements.txt依赖
pip freeze > requirements.txt
pip install -r requirements.txt























































