/* 看解答前，我问我自己：
* 1. unshift和shift的作用分别是？
* 2. 递归和迭代的解释？
* */


class TreeNode {
  val: number
  left: TreeNode
  right: TreeNode
  constructor(value:number) {
    this.val = value;
    this.left = this.right = null;
  }
}

// 递归版
var isSameTree = function(p:TreeNode, q:TreeNode) {
  if(p && q) {
    if(p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  } else {
    return p === null && q === null;
  }
};

// 层序遍历
var isSameTree2 = function (p: TreeNode, q: TreeNode) {
  if (p === null && q === null) return true
  if (p && !q || !p && q) return false;
  const q1 = [];
  const q2 = [];
  q1.push(p);
  q2.push(q);
  while (q1.length && q2.length) {
    const temp_p = q1.shift();
    const temp_q = q2.shift();
    if (temp_p.val !== temp_q.val) return false;
    if (temp_p.left && !temp_q.left || (!temp_p.left && temp_q.left)) return false
    if (temp_p.right && !temp_q.right || (!temp_p.right && temp_q.right)) return false;
    if (temp_p.left && temp_q.left) {
      q1.push(temp_p.left)
      q2.push(temp_q.left)
    }
    if (temp_p.right && temp_q.right) {
      q1.push(temp_p.right)
      q2.push(temp_q.right)
    }
  }
  return true
};