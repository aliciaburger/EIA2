var aufgabe12;
(function (aufgabe12) {
    class Bad extends aufgabe12.Thing {
        constructor(...args) {
            super(...args);
            this.bad = true;
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
            let bienenFabe = ["#FFF700", "#FFD500", "#FFBC00", "#FFA600", "#FFD041", "#FFE041", "#FFFA41", "#EDFF41"];
            let fluegelFabe = ["#F8E1FF", "#FFE1FE", "#EBE1FF", "#E1E1FF", "#E1F2FF", "#E1FFFF", "#E1FFF7", "#E1FFE1"];
            this.bienenColor = bienenFabe[Math.floor(Math.random() * bienenFabe.length)];
            this.fluegelColor = fluegelFabe[Math.floor(Math.random() * fluegelFabe.length)];
        }
    }
    aufgabe12.Bad = Bad;
})(aufgabe12 || (aufgabe12 = {}));
//# sourceMappingURL=bad.js.map