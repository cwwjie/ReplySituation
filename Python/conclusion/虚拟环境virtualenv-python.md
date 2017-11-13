### virtualenv介绍

virtualenv <!-- 是 --> 个插件

默认的pip安装 <!-- 是 --> 所有第三方的包都会被pip安装到Python3的site-packages目录下

site-packages目录 <!-- 在 --> windows下使用: where python



### virtualenv如何使用?


初始化 <!-- 使用 --> virtualenv [虚拟环境名称]


初始化 <!-- 默认 --> 依赖系统环境中的 site packages


初始化 <!-- 手动 --> --no-site-packages


虚拟环境 <!-- 启动 --> cd [虚拟环境名称]
虚拟环境 <!-- 启动 --> source ./bin/activate

虚拟环境 <!-- 退出 --> deactivate


### virtualenv查看安装的包?

pip -h

