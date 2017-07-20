var aufgabe12;
(function (aufgabe12) {
    class Good extends aufgabe12.Thing {
        constructor(...args) {
            super(...args);
            this.bad = false;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            let _x = this.x;
            let _y = this.y;
            //vorne
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#f0475c";
            aufgabe12.crc2.strokeStyle = "#000000";
            aufgabe12.crc2.rect(_x - 10, _y - 6.5, 20, 13);
            aufgabe12.crc2.rect(_x - 11, _y - 8.5, 21, 2);
            aufgabe12.crc2.lineWidth = 0.5;
            aufgabe12.crc2.fill();
            aufgabe12.crc2.stroke();
            //Seite
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#f0475c";
            aufgabe12.crc2.strokeStyle = "#000000";
            aufgabe12.crc2.moveTo(_x + 10, _y - 6.5);
            aufgabe12.crc2.lineTo(_x + 10, _y + 6.5);
            aufgabe12.crc2.lineTo(_x + 15, _y + 0.5);
            aufgabe12.crc2.lineTo(_x + 15, _y - 12.5);
            aufgabe12.crc2.lineWidth = 0.5;
            aufgabe12.crc2.fill();
            aufgabe12.crc2.stroke();
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#f0475c";
            aufgabe12.crc2.strokeStyle = "#000000";
            aufgabe12.crc2.moveTo(_x + 10, _y - 8.5);
            aufgabe12.crc2.lineTo(_x + 10, _y - 6.5);
            aufgabe12.crc2.lineTo(_x + 15, _y - 12.5);
            aufgabe12.crc2.lineTo(_x + 15, _y - 14.5);
            aufgabe12.crc2.lineWidth = 0.5;
            aufgabe12.crc2.fill();
            aufgabe12.crc2.stroke();
            //Deckel
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#f0475c";
            aufgabe12.crc2.strokeStyle = "#000000";
            aufgabe12.crc2.moveTo(_x - 11, _y - 8.5);
            aufgabe12.crc2.lineTo(_x + 10, _y - 8.5);
            aufgabe12.crc2.lineTo(_x + 15, _y - 14.5);
            aufgabe12.crc2.lineTo(_x - 5, _y - 14.5);
            aufgabe12.crc2.lineTo(_x - 11, _y - 8.5);
            aufgabe12.crc2.lineWidth = 0.5;
            aufgabe12.crc2.fill();
            aufgabe12.crc2.stroke();
            //Bänder:
            //vorne
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#68c15d";
            aufgabe12.crc2.strokeStyle = "#000000";
            aufgabe12.crc2.moveTo(_x - 2, _y - 6.5);
            aufgabe12.crc2.lineTo(_x - 2, _y + 6.5);
            aufgabe12.crc2.lineTo(_x + 2, _y + 6.5);
            aufgabe12.crc2.lineTo(_x + 2, _y - 6.5);
            aufgabe12.crc2.lineWidth = 0.5;
            aufgabe12.crc2.fill();
            aufgabe12.crc2.stroke();
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#68c15d";
            aufgabe12.crc2.strokeStyle = "#000000";
            aufgabe12.crc2.moveTo(_x - 3, _y - 8.5);
            aufgabe12.crc2.lineTo(_x - 3, _y - 6.5);
            aufgabe12.crc2.lineTo(_x + 1, _y - 6.5);
            aufgabe12.crc2.lineTo(_x + 1, _y - 8.5);
            aufgabe12.crc2.lineWidth = 0.5;
            aufgabe12.crc2.fill();
            aufgabe12.crc2.stroke();
            //oben
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#68c15d";
            aufgabe12.crc2.strokeStyle = "#000000";
            aufgabe12.crc2.moveTo(_x + 2, _y - 14.5);
            aufgabe12.crc2.lineTo(_x - 3, _y - 8.5);
            aufgabe12.crc2.lineTo(_x + 1, _y - 8.5);
            aufgabe12.crc2.lineTo(_x + 6, _y - 14.5);
            aufgabe12.crc2.lineWidth = 0.5;
            aufgabe12.crc2.fill();
            aufgabe12.crc2.stroke();
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#68c15d";
            aufgabe12.crc2.strokeStyle = "#68c15d";
            aufgabe12.crc2.moveTo(_x - 7.5, _y - 11.5);
            aufgabe12.crc2.moveTo(_x - 8, _y - 12.5);
            aufgabe12.crc2.lineTo(_x + 12.5, _y - 12.5);
            aufgabe12.crc2.lineTo(_x + 12, _y - 11.5);
            aufgabe12.crc2.fill();
            aufgabe12.crc2.lineWidth = 0.5;
            aufgabe12.crc2.stroke();
            //seite
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#68c15d";
            aufgabe12.crc2.strokeStyle = "#68c15d";
            aufgabe12.crc2.lineTo(_x + 11.5, _y - 11.5);
            aufgabe12.crc2.moveTo(_x + 11.5, _y + 3.5);
            aufgabe12.crc2.moveTo(_x + 12.5, _y + 2.5);
            aufgabe12.crc2.lineTo(_x + 12.5, _y - 12.5);
            aufgabe12.crc2.fill();
            aufgabe12.crc2.lineWidth = 1;
            aufgabe12.crc2.stroke();
            //schwarze kontur
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.strokeStyle = "#000000";
            aufgabe12.crc2.moveTo(_x + 10, _y - 8.5);
            aufgabe12.crc2.lineTo(_x + 10, _y - 6.5);
            aufgabe12.crc2.lineTo(_x + 15, _y - 12.5);
            aufgabe12.crc2.lineTo(_x + 15, _y - 14.5);
            aufgabe12.crc2.lineTo(_x + 10, _y - 8.5);
            aufgabe12.crc2.lineWidth = 0.5;
            aufgabe12.crc2.stroke();
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.strokeStyle = "#000000";
            aufgabe12.crc2.moveTo(_x - 5, _y - 14.5);
            aufgabe12.crc2.lineTo(_x - 11, _y - 8.5);
            aufgabe12.crc2.lineWidth = 0.5;
            aufgabe12.crc2.stroke();
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
    aufgabe12.Good = Good;
})(aufgabe12 || (aufgabe12 = {}));
//# sourceMappingURL=good.js.map