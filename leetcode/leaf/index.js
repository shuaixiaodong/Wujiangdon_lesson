var sumNumbers = function(root) {
  return helper(root,0);
}
function helper(node,sum) {
  if(node === null) return 0;
  sum = node.val + sum*10;
  if(node.left === null && node.right === null) {
    return sum; // 叶子节点
  }
  const l = helper(node.left,sum);
  const r = helper(node.right,sum);
  return l + r;
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
} 

const a1 = new TreeNode(1);
const a2 = new TreeNode(2);
const a3 = new TreeNode(3);
a1.left = a2;
a1.right = a3;

console.log(sumNumbers(a1))
