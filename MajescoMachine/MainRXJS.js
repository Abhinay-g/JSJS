// import { range } from 'rxjs';
// const range = require('rxjs').range;
// const map = require('rxjs')
// const range= require('rxjs').range
// // const { range } = rxjs;
// // const { map, filter } = rxjs.operators;
// // import { map, filter } from 'rxjs/operators';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';

// range(1, 200).pipe(
//   filter(x => x % 2 === 1),
//   map(x => x + x)
// ).subscribe(x => console.log(x));
import { range } from 'rxjs';
import { map, filter } from 'rxjs/operators';

range(1, 200).pipe(
  filter(x => x % 2 === 1),
  map(x => x + x)
).subscribe(x => console.log(x));
