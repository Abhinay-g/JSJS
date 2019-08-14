class TEast {
  a(message) {
    console.log(message, 'a');
  }
  b = message => {
    console.log(message, 'b');
  };
}
var c = new TEast();
c.a('HI');
c.b('Hello');
