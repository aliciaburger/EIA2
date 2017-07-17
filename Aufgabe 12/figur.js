var aufgabe12;
(function (aufgabe12) {
    class Figur {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.speed = 0.1;
            //            this.setRandomColor();
            //    .u          
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
        //        setTargetPosition(): void {
        //
        //            this.xTarget = startposition[Math.floor(Math.random() * startposition.length)];        
        //        }
        move() {
            //crc2.putImageData(hintergrund, 0, 0);
            //            let xDiff: number = this.xTarget - this.x;
            //            if (Math.abs(xDiff) != this.x )
            //                this.setTargetPosition();
            //            else {
            //                this.x += xDiff * this.speed;
            //               
            //                }
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