class ListNode {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head, x) {
  let currentHead = head;
  let len = 1;

  while (currentHead.next) {
    currentHead = currentHead.next;
    ++len;
  }
  if (x < 1 || x > len) {
    return false;
  } else {
    return true;
  }
};
const n5 = new ListNode(9);
const n4 = new ListNode(8, n5);
const n3 = new ListNode(7, n4);
const n2 = new ListNode(4, n3);
const n1 = new ListNode(2, n2);

console.log(detectCycle(n1, 2));

//Time complexity: O(N)
//Space complexity: O(1)
