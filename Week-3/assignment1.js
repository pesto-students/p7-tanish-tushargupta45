function add(a, b) {
  console.log(a, b); // printed only 3 times
  return a + b;
}

function memoize(func) {
  const cache = new Map();
  return function (...args) {
    const key = args.toString();
    if (cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, func(...args));
    return cache.get(key);
  };
}

const memoizeAdd = memoize(add);

console.log(memoizeAdd(100, 100));
console.log(memoizeAdd(100, 200));
console.log(memoizeAdd(100, 400));
console.log(memoizeAdd(100, 100)); //add func is not called

/*
OUTPUT OF ABOVE CODE:

100 100
200
100 200
300
100 400
500
200

Here, add func is not called for the 4th time, as we already 
have the required result in "cache" map.
So, rather than computing, we directly iterate the map
and return the computation.

Memoize can be useful when we have high computation & high 
probability of similar inputs.

*/
