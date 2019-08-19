// [1,4,2,5,6,4,6]
function findKthlargest(arr,k) {
  arr.sort((a,b) => {
    return b-a;
  })
  console.log(arr[k-1]);
}
findKthlargest([1,4,2,5,6,4,6],1)