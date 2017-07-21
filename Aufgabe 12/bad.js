var aufgabe12;
(function (aufgabe12) {
    class Bad extends aufgabe12.Thing {
        constructor(_x, _y) {
            super(_x, _y);
            this.bad = true;
            this.setRandomColor();
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
            if (aufgabe12.counter > 3) {
                this.speed = 2.5;
                if (aufgabe12.counter > 5) {
                    this.speed = 3;
                    if (aufgabe12.counter > 10) {
                        this.speed = 4;
                        if (aufgabe12.counter > 15) {
                            this.speed = 5;
                        }
                    }
                }
            }
            this.y += Math.random() * this.speed;
        }
        setRandomColor() {
            let blaetterFarbe = ["#cb0051", "#b628bf", "#28d2d4", "#ffd2d4", "#00bcec", "#ff4e00", "#ffa400", "#bcff00"];
            let blueteFarbe = ["#f1ffcb", "#ffc4aa", "#fff8c6", "#cefeff", "#ffd2d4", "#ffb8ea", "#fe7aa4", "#e9abff"];
            this.zufallFarbeBlatt = blaetterFarbe[Math.floor(Math.random() * blaetterFarbe.length)];
            this.zufallFarbeBluete = blueteFarbe[Math.floor(Math.random() * blueteFarbe.length)];
        }
    }
    aufgabe12.Bad = Bad;
})(aufgabe12 || (aufgabe12 = {}));
//# sourceMappingURL=bad.js.map