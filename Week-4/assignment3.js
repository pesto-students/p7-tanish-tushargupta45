const iterableFibonacci = {
  [Symbol.iterator]: function () {
    let i = 1;
    let n = 10;
    let prevValue = 0;
    let nextValue = 1;
    return {
      next() {
        if (i++ <= n) {
          [prevValue, nextValue] = [nextValue, prevValue + nextValue];
          return {
            value: prevValue,
            done: false,
          };
        } else {
          return {
            value: undefined,
            done: true,
          };
        }
      },
    };
  },
};
console.log(...iterableFibonacci);
