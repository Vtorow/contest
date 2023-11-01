class Point {
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }

    getX()
    {
        return this.x;
    }

    getY()
    {
        return this.y;
    }

    translate(dx, dy)
    {
        this.x = this.x + dx;
        this.y = this.y + dy;
    }

    scale(koff)
    {
        this.x = this.x * koff;
        this.y = this.y * koff;
    }
}

point = new Point(1, 2);

console.log(point.getX(),point.getY());
point.translate(2,-4);
console.log(point.getX(),point.getY());
point.scale(-2)
console.log(point.getX(),point.getY());