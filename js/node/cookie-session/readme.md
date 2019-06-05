## why

无状态

## cookie

本地存储
怎么来：
1. js document.cookie 可读可写
2. 服务端 通过 Set-Cookie 响应头设置 cookie


内容：
name:
value:
path: cookie 在哪个路径下生效

/             /所有路径
/user         /user user以及user 下面的
/user/abc     /user/abc user/abc 以及下面的

domain:
httpOnly: true/false 如果设置位true,就不能通过js获取cookie的值
maxAge: 在几秒之后 cookie 被删除
secure: 安全 只会在https协议下传输

koa: ms  js: s

作用范围：
domain + path
在什么域名什么路径下面生效
浏览器检查存储的cookie, 会发送给服务器的
而且：http 传输报文的大小
放在Cookie请求头里面发送

用途：
状态管理，true
用户个性化设置，false
规定死

## session
会话
靠后台自己实现的
很多个用户 产生很多个 session

userId
sessionId 用户会话的时候 通过 自己 sessionId 查询自己的状态
cookie: sessionId=id 
