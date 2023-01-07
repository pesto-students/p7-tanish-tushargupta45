const parenthesisChecker = (expression) => {
  const obj = {
    "[": "PUSH",
    "]": "[",
    "{": "PUSH",
    "}": "{",
    "(": "PUSH",
    ")": "(",
  };
  const expStack = [];
  for (let i = 0; i < expression.length; i++) {
    if (obj[expression[i]] === "PUSH") {
      expStack.push(expression[i]);
    } else if (obj[expression[i]] === expStack[expStack.length - 1]) {
      expStack.pop();
    } else {
      return false;
    }
  }
  if (expStack.length) {
    return false;
  } else {
    return true;
  }
};

const str = `[(])`;
console.log(parenthesisChecker(str));
