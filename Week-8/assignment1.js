function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let depth = 0;
  var traverser = function (head, layer) {
    if (!head) {
      return;
    }
    if (layer > depth) {
      depth = layer;
    }
    traverser(head.left, layer + 1);
    traverser(head.right, layer + 1);
  };
  traverser(root, 0);
  return depth + 1;
};
