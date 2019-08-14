// import { Observable, of, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
// import { map, filter } from 'rxjs/operators';

// // range(1, 200).pipe(
// //   filter(x => x % 2 === 1),
// //   map(x => x + x)
// // ).subscribe(x => console.log(x));

// // var t = of(1, 2, 3, 4);

// // t.subscribe({ next: value => console.log(value) });

// const mySubject = new BehaviorSubject<string>('abhinay');
// // mySubject.next('abhinay');
// mySubject.next('gupta');
// mySubject.next('sahu');
// mySubject.next('teli');

// mySubject.subscribe(val => console.log(val));
// mySubject.subscribe(val => console.log(val.toUpperCase()));
// // mySubject.next('gupta');
// mySubject.subscribe(val => console.log('welcome ', val));
class Foo {
  x;
  y;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
