const obj = {
  firstName: "Tushar",
  lastName: "Gupta",
  printName(age, gender) {
    console.log(
      `${this.firstName} ${this.lastName}, age is ${age}, gender is ${gender}`
    );
  },
};

//this keyword will bound to the object if we call the function directly
console.log("\nAccessing function directly");
obj.printName(12, "male");

/*
this keyword will refer to global object in this 
case when we assign it to another variable, this 
is because other properties are lost in this assignment.
*/
console.log("\nAssign func to another variable");
const fn1 = obj.printName;
fn1(12, "male");

/*
this keyword will refer to obj, as we pass it to bind function as a first argument.
Bind returns a copy of the function which we store in fn2
*/
console.log("\nUsing BIND");
const fn2 = obj.printName.bind(obj);
fn2(12, "male");

/*
this keyword will refer to obj, as we pass it to call function as a first argument
call doesnt returns a function
1st param => this
2nd param & onwards => args of function
*/
console.log("\nUsing CALL");
obj.printName.call(obj, 12, "male");

/*
APPLY takes 2 params
1st param => this
2nd param => array of args of the function
similar to CALL, but can be used when number of positional args are dynamic 
*/

console.log("\nUsing APPLY");
obj.printName.apply(obj, [12, "male"]);
