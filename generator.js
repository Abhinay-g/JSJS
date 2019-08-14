function* generatorFunction() {
  // Line 1
  console.log('why i  am called');

    console.log('This will be executed first.');
    yield 'Hello, '; // Line 2
    console.log('I will be printed after the pause');
    yield 'World!';
}
const generatorObject = generatorFunction(); // Line 3
console.log(generatorObject.next().value); // Line 4
console.log(generatorObject.next().value); // Line 5
console.log(generatorObject.next().value); // Line 6

////////////////////////////////////////////////
// let fibonacci = {
//   *[Symbol.iterator]() {
//     let pre = 0,
//       cur = 1;
//     for (;;) {
//       [pre, cur] = [cur, pre + cur];
//       yield cur;
//     }
//   }
// };

// for (let n of fibonacci) {
//   if (n > 1000) break;
//   console.log(n);
// }
///////////////////////////////////////////////////
// function* print(start, end, step) {
//   var t = [];
//   while (start < end) {
//     console.log('print');

//     yield start;
//     start += step;
//   }
// }

// for (let i of print(0, 10, 2)) {
//   console.log('for');

//   console.log(i);
// }
