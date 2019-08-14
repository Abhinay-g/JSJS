class Animal {
  constructor(name) {
    this.name = name;
  }
  speak(sound) {
    console.log(sound);
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  speak() {
    super.speak("Woof! I'm " + super.name + ' and am ' + this.age);
    console.log(super.constructor.name);
  }
}
var mydog = new Dog('mydog', 3);
mydog.speak();

class Shape {
  constructor(id, x, y) {
    this.id = id;
    this.move(x, y);
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `Shape ${this.id}`;
  }
}

class Rectangle extends Shape {
  constructor(id, x, y, width, height) {
    super(id, x, y);
    this.width = width;
    this.height = height;
  }
  static DefaultObject() {
    return new Rectangle('default', 0, 0, 100, 100);
  }
}

class Circle extends Shape {
  constructor(id, x, y, radius) {
    super(id, x, y);
    this._radius = radius;
  }
  static DefaultObject() {
    return new Circle('default', 0, 0, 20);
  }
  get radius() {
    console.log('** getter called');

    return this._radius;
  }
  set radius(radius) {
    this._radius = radius;
  }
}

var c = new Circle('circle', 5, 6, 89);
console.log(c.radius);
c.radius = 56;
c._radius = 99;
console.log(c._radius);

var defaultRectangle = Rectangle.DefaultObject();
