// 'aba'
// function valid_palindrome(str) {
//   let str1 = str.split('').reverse().join('');
//   if(str === str1) {
//     return true;
//   }else {
//     return false
//   }
// }
// console.log(valid_palindrome('aba'));
// 大小写
// 空，特殊符号 忽略
// "A man, a plan, a canal: Panama"
var isValidChar = (c) => { // abc 123
  return /^[\w]$/.test(c);
}
var isPalindrom = (s) => {
  s = s.toLowerCase();
  let left = 0,
    right = s.length - 1;

  while(left < right) {
    if(!isValidChar(s[left])) {
      left++;
      continue;
    }
    if(!isValidChar(s[right])) {
      right--;
      continue;
    }
    if(s[left] == s[right]){
      left++;
      right--;
    }else {
      break;
    }
  }
  return right <= left;
}
console.log(isPalindrom('aba'))