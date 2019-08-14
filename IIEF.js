// for (var i = 0; i < 3; i++) {
//   setTimeout(
//     (function(i_local) {
//       return function() {
//         // alert(i_local);
//         console.log(i_local);
//       };
//     })(i),
//     1000 + i
//   );
// }

for (var i = 0; i < 3; i++) {
  setTimeout(
    (i_local => {
      // return function() {
      // alert(i_local);
      return () => {
        console.log(i_local);
      };
      // };
    })(i),
    1000 + i
  );
}
