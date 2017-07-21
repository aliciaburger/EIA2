var aufgabe12;
(function (aufgabe12) {
    // Superklasse
    class Thing {
        constructor(_x, _y) {
            this.bad = false;
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            let _x = this.x;
            let _y = this.y;
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#000000";
            aufgabe12.crc2.arc(_x - 3, _y - 4, 5, 0, 2 * Math.PI);
            aufgabe12.crc2.fill();
        }
        move() {
            this.speed = 2;
            if (aufgabe12.counter > 4) {
                this.speed = 3;
                if (aufgabe12.counter > 7) {
                    this.speed = 4;
                    if (aufgabe12.counter > 10) {
                        this.speed = 5;
                        if (aufgabe12.counter > 15) {
                            this.speed = 6;
                            if (aufgabe12.counter > 20) {
                                this.speed = 7;
                                if (aufgabe12.counter > 25) {
                                    this.speed = 8;
                                }
                            }
                        }
                    }
                }
            }
            this.y += Math.random() * this.speed;
        }
    }
    aufgabe12.Thing = Thing;
})(aufgabe12 || (aufgabe12 = {}));
//# sourceMappingURL=thing.js.map