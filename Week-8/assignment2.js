function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let q = [root];
  let error = false;
  while (q.length && !error) {
    q.forEach((node) => {
      q.shift();
      if (node.left && node.right) {
        if (node.left.val >= node.val || node.right.val <= node.val) {
          error = true;
        }
        q.push(node.left);
        q.push(node.right);
      } else if (node.left) {
        if (node.left.val >= node.val) {
          error = true;
        }
        q.push(node.left);
      } else if (node.right) {
        if (node.right.val <= node.val) {
          error = true;
        }
        q.push(node.right);
      }
    });
  }
  return !error;
};
