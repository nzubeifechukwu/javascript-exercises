const removeFromArray = function (array, ...args) {
  newArray = [];
  array.find((element) => {
    if (!args.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
