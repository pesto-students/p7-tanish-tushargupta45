function createStack() {
  const items = [];
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
    printItems() {
      return items;
    },
  };
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); //pops 5
console.log(stack.items); //undefined
console.log(stack.printItems()); //prints items array

/*
Here, as we create a instance of the function, so earlier we were
returning the items array directly. Hence, we were able to access
it outside the function also. A better approach is to declare the 
items array in the function and return a separate function which
returns the array. 

Now, the array is not directly accessible, but we can access it using
the function "printItems"

*/
