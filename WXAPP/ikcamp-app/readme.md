## for of
用于遍历 可迭代 对象
比如： Array,Map,Set,String
可迭代对象有两个要求
1. 存在 Symbol.iterator 属性
2. Symbol.iterator 是一个方法 返回 next 属性
  ```
  [Symbol.iterator] = () => ({
    next: () => {
      return {
        done: 
        value:
      }
    }
  })
  ```
可以自定义 for...of 行为