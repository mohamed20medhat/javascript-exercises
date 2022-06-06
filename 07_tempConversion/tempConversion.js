const ftoc = function(temp) {
  let res = (temp - 32) * 5/9
  return Number(res.toFixed(1))
};


const ctof = function(temp) {
  let res = (temp * 9/5) + 32
  return Number(res.toFixed(1))
  
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
