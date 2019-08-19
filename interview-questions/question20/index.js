var b = 10;
(function b() {
  let b = 20
  console.log(b)
})()
// 函数表达式与函数声明不同，函数声明只在函数内部有效，并且此绑定是常量绑定
// 不能对常量进行赋值
// 在自执行函数中，声明一个函数相对于一个const常量

var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
// function a(arr) {
//   var brr = new Set(arr.toString().split(',').sort((a,b) => {return a-b}).map(Number))  
//   Array.from(brr)
//   return brr
// }
// console.log(a(arr))
console.log(Array.from(new Set(arr.flat(Infinity))).sort((a,b)=>{ return a-b}))


