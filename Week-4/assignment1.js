//executor function
function getNumber(resolve, reject) {
  const randomNum = parseInt(Math.random() * 100);
  if (randomNum % 5 === 0) {
    resolve(randomNum); //resolve promise
  } else {
    reject(randomNum); //reject promise
  }
}

class CustomPromise {
  constructor(executorFunction) {
    this.state = "pending";
    this.value = null;

    //resolve func of promise checks state & updates
    const resolve = (val) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = val;
      }
    };

    //reject func of promise checks state & updates
    const reject = (val) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.value = val;
      }
    };

    try {
      //call the executor func (getNumber) with resolve & reject
      executorFunction(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  //After promise is settled, we can execute the output functions respectively
  then(onFulfilled, onRejected) {
    if (this.state === "fulfilled") {
      onFulfilled(this.value);
    } else if (this.state === "rejected") {
      onRejected(this.value);
    }
  }
}

//getNumber is the executor function
const p1 = new CustomPromise(getNumber);

//call class func then with onFulfilled & onRejected params
p1.then(
  (val) => console.log(`Fulfilled with value: ${val}`),
  (val) => console.log(`Rejected with value: ${val}`)
);
