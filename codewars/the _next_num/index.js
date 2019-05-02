function nextBigger(n) {
    // 通过 splitDigits 分隔出 left 和 right 两部分
    const [left, right] = splitDigits(`${n}`.split(''), 2)
    if (!left) return -1
    // 对 right 部分重新排列，再跟 left 组合成返回值
    return Number(left.concat(resort(right)).join(''))
  }
  
  // 按照 rightSize 分割 digits 数组，如果不和规格，则按 rightSize+1 来递归分割
  function splitDigits(digits, rightSize) {
    if (rightSize > digits.length) return []
  
    const right = digits.slice(-rightSize)
    // 判断 right 是否符合要求
    if (right[0] < right[1]) return [digits.slice(0, -rightSize), right]
  
    return splitDigits(digits, rightSize + 1)
  }
  
  function resort(right) {
    const first = right[0]
    // 这里用 sort 和 reverse 都行
    const rest = right.slice(1).sort()
  
    // 找到下一个更大数字的索引
    const idx = rest.findIndex(n => n > first)
    const p = rest[idx]
    rest[idx] = first
    return [p].concat(rest)
  }
  console.log( nextBigger(768645))