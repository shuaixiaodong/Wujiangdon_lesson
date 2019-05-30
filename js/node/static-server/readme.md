## static
koa-static
为什么要配置？
静态资源：图片 html css js
不会随着服务运行改变内容。
assets 资源

## path
path.join 将路径的各个部分连接起来 处理了各个平台的分隔符 windows:\ 类unix /

## formidable
fields 非[type='file'] 内容都会到
files [type='file']

## 静态资源服务
双击打开：
file://xxxx  本地文件的读取
服务器：
http://localhost:9090/
<!-- 访问图片的时候 发了一个请求 -->
html 里面的 引入的图片 js css 都会发出一个请求，然后 这些都是静态资源
所以 url 和服务器磁盘路径一一对应
1. 有index.html 的时候 自动打开 / 自己加上 index.html
2. 没有的话 列出所有文件 文件夹  fs.radeDir()
用 koa-static 的作用是在html里面正确引入到你指定的目录下面的资源
访问图片的时候，发了一个请求
处理 static 目录下的资源 映射为 请求路径
/static/1.png 返回 1.png 的内容
/static/2.png 返回 2.png 的内容
(koa-static)
业内擅长静态资源的服务器： Nginx
