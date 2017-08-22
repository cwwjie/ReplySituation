# HTTTP协议

## 目录

* HTTP 1.1
* HTTP常见问题
* 网络基础TCP/IP
* 未分类

## HTTP有什么？请用自己的话进行概括
HTTP/0.9  
HTTP/1.0(正式版)  
HTTP/1.1(主流)  
HTTP/2.0(正在制订)   

* 请求报文
	* 起始头  
		* 方法(method)  
		* 请求URL(request-URI)  
		* 协议版本  
	* 请求首部字段(header field)  
	* 内容实体  
* 响应报文  
	* 起始头
		* 协议版本
		* 状态码(status code)
		* 原因短语(reason-phrase)
	* 请求首部字段(header field)  
		* 创建响应的日期时间
	* 主体(entity body)  

## 网络基础TCP/IP协议族

HTTP 属于 TCP/IP 的子集  

计算机互相通信依赖于 "相同的规则"（协议  
从电缆到IP地址到最后双方建立通信，所相关联的协议合集(相同的规则合集)起来总称为 TCP/IP协议族  
因为是总称，所以自然需要分层。这样各层的接口设计也可以规划好、每个层次的内部就能够自由的设计了！  

### 应用层
网络与程序通信所使用的层
例如：[FTP](https://baike.baidu.com/item/ftp/13839?fr=aladdin)（文件传输协议/File Transfer Protocol）[DNS](https://baike.baidu.com/item/dns/427444?fr=aladdin)（Domain Name System/域名系统)  
HTTP协议 也是处于这层
### 传输层
提供处于网络连接中的两台计算机直接的数据传输  
例如： [TCP](https://baike.baidu.com/item/TCP/33012?fr=aladdin)（传输控制协议/Transmission Control Protocol） [UDP](https://baike.baidu.com/item/UDP/571511?fr=aladdin)（用户数据报协议/User Datagram Protocol）
### 网络互连层
在众多的选项内选择一条传输线路（也就是因特网  
用来处理网络上流动的数据包(最小传输单位)  
### 网络接口层  
属于硬件的范畴
### 数据在层与层是如何传输？
数据被传输时候，每经过一层就会被封装一层 "首部信息"  
与HTTP密不可分的有（TCP、IP、DNS）
#### 1. 域名解析 DNS 服务	
域名 与 IP地址 的解析服务
#### 2. TCP协议
* 提供字节流服务！
	* 将大块数据分割成 _以报文段(segment)为单位的数据包_
* 能够准确可靠将数据传送到达
	* 三次握手策略
#### 3. IP协议（网络协议/Internet Protocol）  
[IP协议](https://baike.baidu.com/item/IP%E5%8D%8F%E8%AE%AE/131947?fr=aladdin)的作用是把数据包传输给对方  
需要保证传输到对方那里，就需要满足各种条件。  
其中 [IP地址](https://baike.baidu.com/item/IP%E5%9C%B0%E5%9D%80/150859?fr=aladdin) 和 [MAC地址](https://baike.baidu.com/item/MAC%E5%9C%B0%E5%9D%80/1254181?fr=aladdin)(媒体访问控制/Media Access Control) 是比较重要的条件  

* IP地址指明节点被分配到的地址  
* MAC地址是指网卡所属的固定地址（基本不变  
#### 4. ARP协议
IP间的通信倚赖MAC地址    
但是一般是需要倚赖多台设备(多个MAC地址)才能连接到对方。  
所以在中转时候，利用下一台设备的MAC地址来搜寻目标，这就是 [ARP协议](https://baike.baidu.com/item/ARP/609343?fr=aladdin&fromid=1742212&fromtitle=ARP%E5%8D%8F%E8%AE%AE)（地址解析协议/Address Resolution Protocol）

## 未分类
 








