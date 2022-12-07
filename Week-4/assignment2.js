let Person = function () {};
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

// TODO: create the class Teacher and a method teach

let Teacher = function () {};
Teacher.prototype.teach = function (subject) {
  console.log(`${this.name} is now teaching ${subject}`);
};

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

let him = new Teacher();
him.initialize("Adam", 45);
him.teach("Inheritance");

/*
Firstly, SubClass "Teacher" is declared.
Then, Teacher class is derived from Person class, as we set prototype of 
child class "Teacher" to be the prototype of "Person" class.
Now, subclass can access a method of the parent class.
*/
