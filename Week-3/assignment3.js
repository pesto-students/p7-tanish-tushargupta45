function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?

/*
The value of count is 0 because "message" is pointing to
the initial instance of createIncrement. And hence, even 
if we incremented thrice, that would lead to no effect on 
the "count" variable.

If we want to display the updated count, we need to specify 
& access "count" variable inside log function

let message = `Count is`;
  function log() {
    console.log(`${message} ${count}`);
  }

*/
