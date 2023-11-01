function createPoint(x, y) {
    const point = {};

    point.getX = function() {
        return x;
    };

    point.getY = function() {
        return y;
    };

    point.translate = function(dx, dy) {
        x += dx;
        y += dy;
    };

    point.scale = function(coef) {
        x *= coef;
        y *= coef;
    };

    return point;
}