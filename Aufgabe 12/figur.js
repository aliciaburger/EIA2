var aufgabe12;
(function (aufgabe12) {
    class Figur {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.speed = 0.55;
            this.draw();
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            let _x = this.x;
            let _y = this.y;
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#FFFFFF";
            aufgabe12.crc2.arc(_x - 3, _y - 4, 5, 0, 2 * Math.PI);
            aufgabe12.crc2.fill();
        }
        move() {
            //crc2.putImageData(hintergrund, 0, 0);
            //                        this.speed = 2;
            //                        this.y += Math.random() * this.speed;
            //            console.log("Button value: " + position);
            this.xTarget = aufgabe12.startposition[(aufgabe12.position - 1)];
            this.xDiff = this.xTarget - this.x;
            //            
            this.x += this.xDiff * this.speed;
            //            this.x += xDiff * 0.03;
            //
            //            //if-Abfragen um die Bienen beim erreichen eines Bildrandes auf der anderen Seite wieder erscheinen zu lassen
            //
            //
            //            if (this.x >= crc2.canvas.width) {
            //                this.x = 0;
            //            }
            //            if (this.y <= 0) {
            //                this.y = crc2.canvas.height;
            //            }
            //            if (this.x < 0) {
            //                this.x = crc2.canvas.width;
            //            }
            //            if (this.y > crc2.canvas.height) {
            //                this.y = 0;
            //            }
        }
        setRandomColor() {
            let bienenFabe = ["#FFF700", "#FFD500", "#FFBC00", "#FFA600", "#FFD041", "#FFE041", "#FFFA41", "#EDFF41"];
            let fluegelFabe = ["#F8E1FF", "#FFE1FE", "#EBE1FF", "#E1E1FF", "#E1F2FF", "#E1FFFF", "#E1FFF7", "#E1FFE1"];
            this.bienenColor = bienenFabe[Math.floor(Math.random() * bienenFabe.length)];
            this.fluegelColor = fluegelFabe[Math.floor(Math.random() * fluegelFabe.length)];
        }
    }
    aufgabe12.Figur = Figur;
})(aufgabe12 || (aufgabe12 = {}));
//# sourceMappingURL=figur.js.map