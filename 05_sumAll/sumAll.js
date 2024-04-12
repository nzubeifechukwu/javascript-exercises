const sumAll = function (...args) {
  for (const arg of args) {
    if (typeof arg !== "number" || arg < 0) {
      return "ERROR";
    }
  }

  args.sort((a, b) => a - b);
  sum = 0;
  for (let i = args[0]; i <= args[1]; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
