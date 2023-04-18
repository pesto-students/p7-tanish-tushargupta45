function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  let queue = [root];
  const result = [];
  let index = 0;
  while (queue.length) {
    const temp = [];
    result[index] = [];
    queue.forEach((node) => {
      if (node) {
        if (node.left) {
          temp.push(node.left);
        }
        if (node.right) {
          temp.push(node.right);
        }

        result[index].push(node.val);
      }
    });
    queue = [...temp];
    index++;
  }
  return result;
};
