class Point {
    private _x: number;
    private _y: number;

    getDraw() {
        console.log(`X : ${this.x} , Y : ${this._y} , sum x-y : ${this.x - this._y}`);

    }
    getDistance(anotherPoint: Point) {
        let newX = anotherPoint.x - this.x;
        let newY = anotherPoint.y - this.y;
        console.log(`Distance x: ${newX} , y: ${newY}`);
    }
    set x(x: any) {
        if (x && x.length > 2) {
            throw new Error(`x has a max length of  ${x.length}`);
        }
        this._x = x;
    }
    set y(y: any) { this._y = y; }
    get x() { return this._x; }
    get y() { return this._y; }

}

let point = new Point();
point.x = 100;
point.y = 5;
point.getDraw();