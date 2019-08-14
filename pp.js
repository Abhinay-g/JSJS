var TEast = /** @class */ (function () {
    function TEast() {
        this.b = function (message) {
            console.log(message, 'b');
        };
    }
    TEast.prototype.a = function (message) {
        console.log(message, 'a');
    };
    return TEast;
}());
var c = new TEast();
c.a('HI');
c.b('Hello');
