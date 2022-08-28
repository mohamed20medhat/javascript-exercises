const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	let res = 0
  arr.forEach(num => res+=num)
  return res

};

const multiply = function(arr) {
  let res = 1
  arr.forEach(num => res *= num)
  return res
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
	let res = 1
  for(let i = 1; i <= a ; i++){
    res*= i
  }
  return res

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
