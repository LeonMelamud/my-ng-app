var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.getDistance = function () {
        console.log("X : " + this.x + " , Y : " + this.y + " , distance: " + (this.x - this.y));
    };
    return Point;
}());
var point = new Point();
point.x = 10;
point.y = 5;
point.getDistance();
