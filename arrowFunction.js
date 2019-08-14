// messup with this
class Arro {
  constructor() {
    setTimeout(() => {
      this.printmyname('abhinay');
    }, 2000);
  }
  printmyname(msg) {
    console.log(msg);
  }
}

var l = new Arro();
//Statement bodies
// nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// evens = [];
// nums.forEach(val => {
//   if (val % 2 == 0) {
//     evens.push(val);
//   }
// });
// console.log(evens);

////////////////////////////////////////////////////////
//Expression bodies
// var double = value => value * 2;
// var triple = function(params) {
//   return params * 3;
// };
// console.log(double(5));
// console.log(triple(5));

// nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// t = nums.map(v => v * 2);
// console.log(t);

////////////////////////////////////////////////////
// class User {
//   constructor() {
//     this.l = 10;
//   }
//   func = () => {
//     console.log(this.l);
//   };
// }
// var r = new User();
// r.func();
