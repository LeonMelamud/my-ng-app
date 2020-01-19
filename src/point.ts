class Point {
    x: number;
    y: number;

    getDistance() {
        console.log(`X : ${this.x} , Y : ${this.y} , distance: ${this.x - this.y}`);

    }
}

let point = new Point();
point.x = 10;
point.y = 5;
point.getDistance();