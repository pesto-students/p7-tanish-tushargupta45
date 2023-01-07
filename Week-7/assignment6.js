class Queue {
  constructor(stack1 = [], stack2 = []) {
    this.stack1 = stack1;
    this.stack2 = stack2;
  }

  dequeue() {
    if (this.stack1.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
      this.stack2.pop();
      while (this.stack2.length) {
        this.stack1.push(this.stack2.pop());
      }
    }
  }

  enqueue(val) {
    this.stack1.push(val);
  }

  print() {
    console.log(this.stack1);
  }

  peek() {
    console.log(this.stack1[this.stack1.length - 1]);
  }
}

const q = new Queue();
const input = [1, 2, 1, 3, 2, 1, 4, 2];
for (let i = 0; i < input.length; i++) {
  if (input[i] === 1) {
    q.enqueue(input[i + 1]);
    ++i;
  } else if (input[i] === 2) {
    q.dequeue();
  }
}
q.print();

//enqueue
//Time complexity: O(1)
//Space complexity: O(1)

//dequeue
//Time complexity: O(N)
//Space complexity: O(N)
