function createBase(value) {
  return function(num) {
    return num + value;
  };
}
var addSix = createBase(6);

console.log(addSix(10));
console.log(addSix(21));
