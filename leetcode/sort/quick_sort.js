function quickSort(arr) {
  if(arr.length<=1) return arr;
  let left = [],right = [],pivot = arr[0];
  for(let i = 1;i<arr.length;i++) {
    if(arr[i] < pivot) {
      left.push(arr[i])
    }else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot],quickSort(right));
}

// function quickSort(arr) {
//   if(arr.length <= 1) {return arr}
//   var left = [],
//   right = [], 
//   baseDot = Math.round(arr.length/2),
//   base = arr.splice(baseDot,1)[0];
//   // 找到中间值
//   for(var i=0;i<arr.length;i++) {
//     if(arr[i] < base) {
//       left.push(arr[i]);
//     }else {
//       right.push(arr[i]);
//     }
//   }
//   // left a
//   // base 中间值
//   // right b
//   return quickSort(left).concat([base],quickSort(right));
// }

console.log(quickSort([5,6,7,2,3,5,1]))