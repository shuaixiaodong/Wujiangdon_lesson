function bubbleSort(arr) {
  var len = arr.length;
  for(var i=0;i<len-1;i++) {
    for(var j=i+1;j<len;j++) {
      if(arr[i] > arr[j]) {
        let temp
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr;
}
// 每次让一个数排好 两两交换位置
const arr = [8,2,5,9,7];
console.log(bubbleSort(arr));