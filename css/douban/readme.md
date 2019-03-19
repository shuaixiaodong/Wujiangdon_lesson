- css 命名词汇
  feeds *-item content
- html结构及布局
从上到下， 从左到右， 语义性和功能性
  1. 套路
  content>h3+p
  2. 盒子
  3. a 作为盒子， 在移动端是很正常的， 
     display：block
  4. 盒子模型
  文字line-height padding margin
  5. 文字截断
   tmall 商户信息是商家填的，它的高度，不被限制，
   display：-webkit-box； 新的盒子模型，像flex来划分父元素的空间。
   overflow:hidden;
   -webkit-line-clamp 行数
   -webkit-box-orient:vertical 
