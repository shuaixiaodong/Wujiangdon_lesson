# q1  js全局执行上下文为我们创建了两个东西，全局对象和this关键字
  new 的实现原理：
    1. 创建一个空对象，构造函数的this指向这个空对象
    2. 这个新对象被执行[原型]连接
    3. 执行构造函数，将属性或者方法添加到this引用的的对象上
    4. 如果构造函数没有返回其他对象，那么返回this，即创建的新对象，否则，返回构造函数返回的对象

# q2  call bind apply
  1. b.call(a) 就相对于把b里面的作用域强行指向到a里面去,第一个参数一定是this作用域要去到的地方，第二三四...个参数是该作用域里用到的值
  2. b.apply(a) 就相对于把b里面的作用域强行指向到a里面去,第一个参数一定是this作用域要去到的地方，第二三四...个参数是该作用域里用到的值,但是第二个传入的参数必须是数组
  3. b.call() || b.apply() 此时this的作用域会指向window
  4. c = b.bind(a)
     c()
    bind方法返回的是一个修改过的函数，所有该用函数该有的姿态去调用
    bind方法接收的参数是按照形参的顺序进行的

# q3  浅拷贝和深拷贝
  1. 数组解构：
    let [x,y] = [1,2]
    // x = 1,
    // y = 2
  2. let {foo,bar} = {foo: "aaa",bar: "bbb"}
    // foo = aaa
    // bar = bbb
    另： （允许给赋值的变量重命名）
    let { foo: baz } = { foo: "abc" }
    // baz = "abc"
  3. 浅拷贝只是第一层属性进行拷贝，当第一层的属性为基本数据时，新对象和原对象互不影响，但是如果第一层的属性值是 # 复杂数据类型 # 那么		新对象和原对象的属性值其指向的是同一块内存地址

		深拷贝是将对象及值复制过来，两个对象修改其中任意一个的值，其中一个不会改变

# 闭包
	闭包是指有权限访问另一个函数作用域中的变量的函数 
		1. 能够访问函数定义时所在的词法作用域（阻止其被回收）
		2. 私有化变量
		3. 模拟块级作用域

# q5  数组去重
  Set  indexOf  includes  map  reduce

# q6  节流防抖函数原理

# q7  __proto__ 和 prototype 关联
  __proto__是每一个实例都有的属性，可以访问[prototype]属性，实例的__proto__ 与其构造函数的prototype指向的同一个对象

# q10  get post 请求在缓存方面的区别
  get请求类似于查找的过程，用户获取数据，可以不用每次都与数据库连接，所以可以使用缓存
  post不同，post一般做的是修改和删除数据的工作，所以必须与数据库交互，所以不能使用缓存
  因此get请求更适合与请求缓存

# q11 url长度限制
  http协议并没有限制url的长度，是浏览器或者web浏览器做了url长度的限制，并且只针对于get请求做的限制
  IE : 2803
  Firefox:65536
  Chrome:8182
  Safari:80000
  Opera:190000

# q12 前端事件流
  在DOM标准的事件模型中，事件流包括下面几个阶段：
    1. 事件捕获阶段
    2. 处于目标阶段
    3. 事件冒泡阶段
  addEventListener第三个参数，为true时捕获，false时冒泡，默认是false （IE只支持事件冒泡）

# q13 图片的懒加载和预加载区别
  预加载：提前加载图片，当用户需要查看图片时可直接从本地缓存中渲染出来
  懒加载：最为服务器的前端优化，减少请求或延迟请求（懒加载对服务器有一定的缓解压力作用，预加载则会增加服务器的压力）

# q14 js中的各种位置
  clientHeight: 表示可视区域的高度，不包含border和滚动条
  offsetHeight: 表示可视区域的高度，包含border和滚动条
  scrollHeight: 表示所有区域的高度，包含因为滚动被隐藏的部分
  clientTop: 表示边框border的厚度，在未指定的情况下一般为0
  scrollTop: 表示滚动后被隐藏的高度

# q15 js拖拽功能的实现

# q16  类的创建和继承

# q17  click在ios手机上有300ms延迟，原因及解决方法
  1. <meta name="viewport" content="width=device-width, initial-scale=no">
  2. FastClick,其原理是检测到touchend事件后，立刻发出模拟click事件，并把浏览器300ms之后真实发出的事件阻断

# q18 cookie sessionStorage localStorage的区别
  cookie: 数据始终在同源的http请求中携带(即使不需要)，即cookie在浏览器和服务器之间来回传递，而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。cookie还有路径(path) 的概念，可以限制cookie只属于某个路径下，存储大小只有4k左右

  sessionStorage：仅在当前浏览器窗口关闭前有效，不能长久保存

  localStorage：在所有的同源窗口都是共享的，cookie也是在所有同源窗口是共享的，localStorage的大小在5M左右

#  q21 浏览器的重绘和回流
  浏览器渲染页面的过程
    1. 解析HTML，生成DOM树，解析CSS，生成CSSOM树
    2. 将DOM树和CSSOM树结合生成render树
    3. 回流：根据生成的render树，进行回流，得到节点的几何信息
    4. 重绘：根据render树和回流得到的信息，得到节点的绝对像素
    5. 将像素发给GPU，展示在页面上

# q22  vue子组件能否修改接收到的props里面的值
  不能
  为了保证数据的单向流动，便于数据的追踪，避免数据混乱
