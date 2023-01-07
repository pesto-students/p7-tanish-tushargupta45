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
var reverseList = function (head) {
  let currentHead = head;
  let prevHead = null;

  while (currentHead) {
    let nextHead = currentHead.next;
    currentHead.next = prevHead;
    prevHead = currentHead;
    currentHead = nextHead;
  }
  return prevHead;
};

const n5 = new ListNode(9);
const n4 = new ListNode(8, n5);
const n3 = new ListNode(7, n4);
const n2 = new ListNode(4, n3);
const n1 = new ListNode(2, n2);

console.log(reverseList(n1));
