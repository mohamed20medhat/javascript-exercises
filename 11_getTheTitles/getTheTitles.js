const getTheTitles = function(arr) {
  let keys = []
  arr.forEach(item => {
    keys.push(item.title)
  })

  return keys

};

// Do not edit below this line
module.exports = getTheTitles;
