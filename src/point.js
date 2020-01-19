var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.getDraw = function () {
        console.log("X : " + this.x + " , Y : " + this._y + " , sum x-y : " + (this.x - this._y));
    };
    Point.prototype.getDistance = function (anotherPoint) {
        var newX = anotherPoint.x - this.x;
        var newY = anotherPoint.y - this.y;
        console.log("Distance x: " + newX + " , y: " + newY);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () { return this._x; },
        set: function (x) {
            if (x && x.length > 2) {
                throw new Error("x has a max length of  " + x.length);
            }
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () { return this._y; },
        set: function (y) { this._y = y; },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var point = new Point();
point.x = 100;
point.y = 5;
point.getDraw();
