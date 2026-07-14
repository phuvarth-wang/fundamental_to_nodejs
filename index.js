function calculate(a, b, callback) {
  callback(a, b)
};

calculate(60, 30, function(a,b) {
  console.log(`${a} + ${b} = ${a+b}`);
});