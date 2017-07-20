var aufgabe7a;
(function (aufgabe7a) {
    class Bee {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            //            this.setRandomColor();
            //            this.update();
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            let _x = this.x;
            let _y = this.y;
            aufgabe7a.crc2.beginPath();
            aufgabe7a.crc2.fillStyle = "#000000";
            aufgabe7a.crc2.arc(_x, _y, 3.5, 0.5 * Math.PI, 1.5 * Math.PI);
            aufgabe7a.crc2.lineTo(_x + 10, _y - 3.5);
            aufgabe7a.crc2.lineTo(_x + 10, _y + 3.5);
            aufgabe7a.crc2.lineTo(_x, _y + 3.5);
            aufgabe7a.crc2.moveTo(_x + 10, _y + 3.5);
            aufgabe7a.crc2.arc(_x + 10, _y, 3.5, 1.5 * Math.PI, 0.5 * Math.PI);
            aufgabe7a.crc2.moveTo(_x + 12, _y + 2);
            aufgabe7a.crc2.lineTo(_x + 15, _y);
            aufgabe7a.crc2.lineTo(_x + 12, _y - 2);
            aufgabe7a.crc2.fill();
            //gelbe Streifen
            aufgabe7a.crc2.beginPath();
            //Achtung Flimmer,-Farbwechsler-bienen :D
            aufgabe7a.crc2.fillStyle = this.bienenColor;
            //        crc2.fillStyle = "yellow";
            aufgabe7a.crc2.moveTo(_x, _y + 3);
            aufgabe7a.crc2.lineTo(_x + 2, _y + 3);
            aufgabe7a.crc2.lineTo(_x + 2, _y + 3);
            aufgabe7a.crc2.lineTo(_x + 2, _y - 3);
            aufgabe7a.crc2.lineTo(_x, _y - 3);
            aufgabe7a.crc2.lineTo(_x, _y + 3);
            aufgabe7a.crc2.moveTo(_x + 4, _y + 3);
            aufgabe7a.crc2.lineTo(_x + 6, _y + 3);
            aufgabe7a.crc2.lineTo(_x + 6, _y + 3);
            aufgabe7a.crc2.lineTo(_x + 6, _y - 3);
            aufgabe7a.crc2.lineTo(_x + 4, _y - 3);
            aufgabe7a.crc2.lineTo(_x + 4, _y + 3);
            aufgabe7a.crc2.moveTo(_x + 8, _y + 3);
            aufgabe7a.crc2.lineTo(_x + 10, _y + 3);
            aufgabe7a.crc2.lineTo(_x + 10, _y + 3);
            aufgabe7a.crc2.lineTo(_x + 10, _y - 3);
            aufgabe7a.crc2.lineTo(_x + 8, _y - 3);
            aufgabe7a.crc2.lineTo(_x + 8, _y + 3);
            aufgabe7a.crc2.fill();
            //Kopf
            aufgabe7a.crc2.beginPath();
            aufgabe7a.crc2.fillStyle = "#000000";
            aufgabe7a.crc2.arc(_x - 3, _y - 4, 5, 0, 2 * Math.PI);
            aufgabe7a.crc2.fill();
            //Fühler
            aufgabe7a.crc2.beginPath();
            aufgabe7a.crc2.fillStyle = "#000000";
            aufgabe7a.crc2.moveTo(_x - 5, _y - 7);
            aufgabe7a.crc2.lineTo(_x - 10, _y - 11);
            aufgabe7a.crc2.lineTo(_x - 10, _y - 10);
            aufgabe7a.crc2.lineTo(_x - 6, _y - 8);
            aufgabe7a.crc2.lineTo(_x - 5, _y - 7);
            aufgabe7a.crc2.fill();
            aufgabe7a.crc2.beginPath();
            aufgabe7a.crc2.fillStyle = "#000000";
            aufgabe7a.crc2.moveTo(_x - 4, _y - 9);
            aufgabe7a.crc2.lineTo(_x - 9, _y - 13);
            aufgabe7a.crc2.lineTo(_x - 9, _y - 12);
            aufgabe7a.crc2.lineTo(_x - 5, _y - 10);
            aufgabe7a.crc2.lineTo(_x - 4, _y - 9);
            aufgabe7a.crc2.fill();
            //flügel links
            aufgabe7a.crc2.beginPath();
            //        crc2.fillStyle = "lightblue";
            aufgabe7a.crc2.fillStyle = this.fluegelColor;
            aufgabe7a.crc2.moveTo(_x + 5, _y - 3.5);
            aufgabe7a.crc2.bezierCurveTo(_x - 3, _y - 15, _x + 12, _y - 15, _x + 5, _y - 3.5);
            aufgabe7a.crc2.stroke();
            aufgabe7a.crc2.fill();
            //flügel rechts
            aufgabe7a.crc2.beginPath();
            //        crc2.fillStyle = "lightblue";
            aufgabe7a.crc2.fillStyle = this.fluegelColor;
            aufgabe7a.crc2.moveTo(_x + 6, _y - 3.5);
            aufgabe7a.crc2.bezierCurveTo(_x + 3, _y - 15, _x + 18, _y - 15, _x + 6, _y - 3.5);
            aufgabe7a.crc2.stroke();
            aufgabe7a.crc2.fill();
        }
        move() {
            //crc2.putImageData(hintergrund, 0, 0);
            this.x += Math.random() * (-2);
            this.y += Math.random() * 10 - 5;
            //if-Abfragen um die Bienen beim erreichen eines Bildrandes auf der anderen Seite wieder erscheinen zu lassen
            if (this.x >= aufgabe7a.crc2.canvas.width) {
                this.x = 0;
            }
            if (this.y <= 0) {
                this.y = aufgabe7a.crc2.canvas.height;
            }
            if (this.x < 0) {
                this.x = aufgabe7a.crc2.canvas.width;
            }
            if (this.y > aufgabe7a.crc2.canvas.height) {
                this.y = 0;
            }
        }
        setRandomColor() {
            let bienenFabe = ["#FFF700", "#FFD500", "#FFBC00", "#FFA600", "#FFD041", "#FFE041", "#FFFA41", "#EDFF41"];
            let fluegelFabe = ["#F8E1FF", "#FFE1FE", "#EBE1FF", "#E1E1FF", "#E1F2FF", "#E1FFFF", "#E1FFF7", "#E1FFE1"];
            this.bienenColor = bienenFabe[Math.floor(Math.random() * bienenFabe.length)];
            this.fluegelColor = fluegelFabe[Math.floor(Math.random() * fluegelFabe.length)];
        }
    }
    aufgabe7a.Bee = Bee;
})(aufgabe7a || (aufgabe7a = {}));
//# sourceMappingURL=bee.js.map