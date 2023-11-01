class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    translate(dx, dy) {
        this.x += dx;
        this.y += dy;
    }

    scale(factor) {
        this.x *= factor;
        this.y *= factor;
    }
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите координату x: ', function(x) {
    rl.question('Введите координату y: ', function(y) {
        let point = new Point(parseFloat(x), parseFloat(y));
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
