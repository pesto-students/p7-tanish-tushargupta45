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
const rotateList = (head, k) => {
  if (!head || !head.next || !k) return head;
  let newTail = head;
  let tail = head;
  let len = 1;

  while (tail.next) {
    tail = tail.next;
    ++len;
  }
  tail.next = head;

  for (let i = 1; i < k % len; ++i) {
    newTail = newTail.next;
  }
  const newhead = newTail.next;
  newTail.next = null;
  return newhead;
};

const n5 = new ListNode(9);
const n4 = new ListNode(8, n5);
const n3 = new ListNode(7, n4);
const n2 = new ListNode(4, n3);
const n1 = new ListNode(2, n2);

console.log(rotateList(n1, 3));
