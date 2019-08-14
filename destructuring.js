// function parameter matching
// function f([a, b]) {
//   console.log(a, b);
// }
// function g({ name, age }) {
//   console.log(name, age);
// }
// function h({ name: a, age: b }) {
//   console.log(a, b);
// }
// f([5, 10]);
// g({ name: 'abhinay', age: 26 });
// h({ name: 'abhinay', age: 26 });
// =================================================

//handling undefined in destructuring

// var { a, b = 2 } = { a: 'abhinay' };
// var [c, d = 54] = [1];
// console.log(a, b, c, d);
// =================================================

// Object matching
// var {
//   name: { firstname: f },
//   sname,
//   age
// } = {
//   name: { firstname: 'abhinay', secondname: 'sushilkumar' },
//   sname: 'gupta',
//   age: '26'
// };
// console.log(f, sname, age);
// =================================================
// array matching
// var list = [1, 2, 3, 4, 5, 6];
// var [a, , b, , , d] = list;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);
// console.log(d);
