const removeFromArray = function(array) {
  let removedItems = [].slice.call(arguments, 1)

  return array.filter(item => !removedItems.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
