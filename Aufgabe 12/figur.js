var aufgabe12;
(function (aufgabe12) {
    class Figur {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.draw();
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            let _x = this.x;
            let _y = this.y;
            //           Geweih links       
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.strokeStyle = "#e5aa94";
            aufgabe12.crc2.moveTo(_x - 1, _y - 13);
            aufgabe12.crc2.bezierCurveTo(_x - 11, _y - 15, _x - 15, _y - 22, _x - 12, _y - 32);
            aufgabe12.crc2.moveTo(_x - 11, _y - 19.5);
            aufgabe12.crc2.lineTo(_x - 21, _y - 26);
            aufgabe12.crc2.moveTo(_x - 9, _y - 18.5);
            aufgabe12.crc2.lineTo(_x - 5, _y - 23);
            aufgabe12.crc2.lineWidth = 2.5;
            aufgabe12.crc2.stroke();
            //           Geweih rechts
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.strokeStyle = "#e5aa94";
            aufgabe12.crc2.moveTo(_x + 1, _y - 13);
            aufgabe12.crc2.bezierCurveTo(_x + 11, _y - 15, _x + 15, _y - 22, _x + 12, _y - 32);
            aufgabe12.crc2.moveTo(_x + 11, _y - 19.5);
            aufgabe12.crc2.lineTo(_x + 21, _y - 26);
            aufgabe12.crc2.moveTo(_x + 9, _y - 18.5);
            aufgabe12.crc2.lineTo(_x + 5, _y - 23);
            aufgabe12.crc2.lineWidth = 2.5;
            aufgabe12.crc2.stroke();
            //Ohr links
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#a45135";
            aufgabe12.crc2.strokeStyle = "#a45135";
            aufgabe12.crc2.moveTo(_x - 18, _y - 15);
            aufgabe12.crc2.bezierCurveTo(_x - 16, _y - 0, _x, _y - 12, _x - 18, _y - 15);
            aufgabe12.crc2.fill();
            //Ohr rechts
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#a45135";
            aufgabe12.crc2.moveTo(_x + 18, _y - 15);
            aufgabe12.crc2.bezierCurveTo(_x + 16, _y - 0, _x - 1, _y - 12, _x + 18, _y - 15);
            aufgabe12.crc2.fill();
            //Kopf
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#c46840";
            aufgabe12.crc2.strokeStyle = "#a45135";
            aufgabe12.crc2.arc(_x, _y, 15, 0, 2 * Math.PI);
            aufgabe12.crc2.fill();
            aufgabe12.crc2.lineWidth = 0.5;
            aufgabe12.crc2.stroke();
            //            Auge links
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#FFFFFF";
            aufgabe12.crc2.arc(_x - 4.5, _y - 5.5, 3, 0, 2 * Math.PI);
            aufgabe12.crc2.fill();
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#442416";
            aufgabe12.crc2.arc(_x - 4.5, _y - 5, 2, 0, 2 * Math.PI);
            aufgabe12.crc2.fill();
            //            Auge rechts
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#FFFFFF";
            aufgabe12.crc2.arc(_x + 4.5, _y - 5.5, 3, 0, 2 * Math.PI);
            aufgabe12.crc2.fill();
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#442416";
            aufgabe12.crc2.arc(_x + 4.5, _y - 5, 2, 0, 2 * Math.PI);
            aufgabe12.crc2.fill();
            //            Schnauze
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#88492c";
            aufgabe12.crc2.moveTo(_x - 7, _y + 0.5);
            aufgabe12.crc2.lineTo(_x - 5.5, _y + 12);
            aufgabe12.crc2.lineTo(_x + 5.5, _y + 12);
            aufgabe12.crc2.lineTo(_x + 7, _y + 0.5);
            aufgabe12.crc2.fill();
            //           Mund
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.strokeStyle = "#000000";
            aufgabe12.crc2.moveTo(_x - 4, _y + 8.5);
            aufgabe12.crc2.bezierCurveTo(_x - 2, _y + 10.5, _x + 2, _y + 10.5, _x + 4, _y + 8.5);
            aufgabe12.crc2.lineWidth = 0.5;
            aufgabe12.crc2.stroke();
            //           Nasenloch links
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.strokeStyle = "#000000";
            aufgabe12.crc2.moveTo(_x + 3, _y + 2);
            aufgabe12.crc2.bezierCurveTo(_x + 3.5, _y + 5, _x + 3.5, _y + 6, _x + 1, _y + 7);
            aufgabe12.crc2.lineWidth = 0.35;
            aufgabe12.crc2.stroke();
            //           Nasenloch rechts
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.strokeStyle = "#000000";
            aufgabe12.crc2.moveTo(_x - 3, _y + 2);
            aufgabe12.crc2.bezierCurveTo(_x - 3.5, _y + 5, _x - 3.5, _y + 6, _x - 1, _y + 7);
            aufgabe12.crc2.lineWidth = 0.35;
            aufgabe12.crc2.stroke();
        }
        move() {
            this.speed = 0.55;
            if (aufgabe12.counter > 20) {
                this.speed = 0.7;
            }
            this.xTarget = aufgabe12.startposition[(aufgabe12.position - 1)];
            this.xDiff = this.xTarget - this.x;
            this.x += this.xDiff * this.speed;
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