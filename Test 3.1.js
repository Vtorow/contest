let input = [];
let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите координату x: ', function(x) {
    rl.question('Введите координату y: ', function(y) {
        let point = createPoint(parseFloat(x), parseFloat(y));
        console.log("Начальная точка: ", point.getX(), point.getY());

        rl.question('Введите смещение x: ', function(dx) {
            rl.question('Введите смещение y: ', function(dy) {
                point.translate(parseFloat(dx), parseFloat(dy));
                console.log("После смещения: ", point.getX(), point.getY());

                rl.question('Введите коэффициент масштабирования: ', function(factor) {
                    point.scale(parseFloat(factor));
                    console.log("После масштабирования: ", point.getX(), point.getY());
                    rl.close();
                });
            });
        });
    });
});

function createPoint(x, y) {
    let point = {
        x: x,
        y: y,
        getX: function() {
            return this.x;
        },
        getY: function() {
            return this.y;
        },
        translate: function(dx, dy) {
            this.x += dx;
            this.y += dy;
        },
        scale: function(factor) {
            this.x *= factor;
            this.y *= factor;
        }
    };
    return point;
}