var aufgabe7a;
(function (aufgabe7a) {
    class Flower {
        constructor(_x, _y) {
            console.log("constructor");
            //            this.setRandomStyle();
            //this.setRandomPosition();
            this.setRandomColor();
            this.x = _x;
            this.y = _y;
        }
        drawNectarFlower() {
            this.setRandomPosition();
            this.drawBlume();
            //            flower
        }
        drawBlume() {
            let _x = this.x;
            let _y = this.y;
            let _blueteFarbe = this.zufallFarbeBluete;
            let _blaetterFarbe = this.zufallFarbeBlatt;
            //Blumenstengel
            aufgabe7a.crc2.beginPath();
            aufgabe7a.crc2.fillStyle = "#006e11";
            aufgabe7a.crc2.moveTo(_x, _y);
            aufgabe7a.crc2.lineTo(_x, _y - 16);
            aufgabe7a.crc2.lineTo(_x + 2.5, _y - 16);
            aufgabe7a.crc2.lineTo(_x + 2.5, _y);
            aufgabe7a.crc2.closePath();
            aufgabe7a.crc2.fill();
            //Blütenblätter
            aufgabe7a.crc2.beginPath();
            aufgabe7a.crc2.fillStyle = _blaetterFarbe;
            aufgabe7a.crc2.arc(_x - 2, _y - 18, 3.5, 0, 2 * Math.PI);
            aufgabe7a.crc2.moveTo(_x - 4, _y - 24);
            aufgabe7a.crc2.arc(_x - 4, _y - 24, 3.5, 0, 2 * Math.PI);
            aufgabe7a.crc2.moveTo(_x + 1, _y - 27);
            aufgabe7a.crc2.arc(_x + 1, _y - 27, 3.5, 0, 2 * Math.PI);
            aufgabe7a.crc2.moveTo(_x + 6.5, _y - 24);
            aufgabe7a.crc2.arc(_x + 6.5, _y - 24, 3.5, 0, 2 * Math.PI);
            aufgabe7a.crc2.moveTo(_x + 4.5, _y - 18);
            aufgabe7a.crc2.arc(_x + 4.5, _y - 18, 3.5, 0, 2 * Math.PI);
            aufgabe7a.crc2.fill();
            //Blütenkopf
            aufgabe7a.crc2.beginPath();
            aufgabe7a.crc2.fillStyle = _blueteFarbe;
            aufgabe7a.crc2.moveTo(_x + 1.25, _y - 22.5);
            aufgabe7a.crc2.arc(_x + 1.25, _y - 22.5, 3.5, 0, 2 * Math.PI);
            aufgabe7a.crc2.fill();
        }
        drawTulpe() {
            let _x = this.x;
            let _y = this.y;
            let _blueteFarbe = this.zufallFarbeBluete;
            //Blumenstengel
            aufgabe7a.crc2.beginPath();
            aufgabe7a.crc2.fillStyle = "#006e11";
            aufgabe7a.crc2.moveTo(_x, _y);
            aufgabe7a.crc2.lineTo(_x, _y - 18);
            aufgabe7a.crc2.lineTo(_x + 2.5, _y - 18);
            aufgabe7a.crc2.lineTo(_x + 2.5, _y);
            aufgabe7a.crc2.closePath();
            aufgabe7a.crc2.fill();
            //Blütenkopf
            aufgabe7a.crc2.beginPath();
            aufgabe7a.crc2.fillStyle = _blueteFarbe;
            aufgabe7a.crc2.moveTo(_x + 4, _y - 22);
            aufgabe7a.crc2.arc(_x + 1.25, _y - 22, 10, -0.15 * Math.PI, 1.15 * Math.PI);
            aufgabe7a.crc2.lineTo(_x - 2.75, _y - 22);
            aufgabe7a.crc2.lineTo(_x + 1.25, _y - 28);
            aufgabe7a.crc2.fill();
        }
        //BLUME
        //        drawFlower(_centerColor: string): void {
        //
        //            //stalk
        //            crc2.beginPath();
        //            crc2.strokeStyle = this.stalkColor;
        //            crc2.moveTo(this.x, this.y);
        //            crc2.lineTo(this.x, this.y - 20);
        //            crc2.stroke();
        //            crc2.closePath();
        //            //leafs
        //            crc2.beginPath();
        //            crc2.strokeStyle = this.stalkColor;
        //            crc2.moveTo(this.x, this.y);
        //            crc2.lineTo(this.x, this.y - 7);
        //            crc2.lineTo(this.x + 5, this.y - 7);
        //            crc2.lineTo(this.x, this.y);
        //            crc2.stroke();
        //            crc2.closePath();
        //            crc2.fillStyle = this.stalkColor;
        //            crc2.fill();
        //            //petals
        //            crc2.fillStyle = this.petalColor;
        //            crc2.beginPath();
        //            crc2.arc(this.x, this.y - 25, 5, 0, 2 * Math.PI);
        //            crc2.fill();
        //
        //            crc2.beginPath();
        //            crc2.arc(this.x - 5, this.y - 20, 5, 0, 2 * Math.PI);
        //            crc2.fill();
        //
        //            crc2.beginPath();
        //            crc2.arc(this.x + 5, this.y - 20, 5, 0, 2 * Math.PI);
        //            crc2.fill();
        //
        //            crc2.beginPath();
        //            crc2.arc(this.x, this.y - 15, 5, 0, 2 * Math.PI);
        //            crc2.fill();
        //
        //            //center
        //            crc2.beginPath();
        //            crc2.arc(this.x, this.y - 20, 5, 0, 2 * Math.PI);
        //            crc2.fillStyle = _centerColor;
        //            crc2.fill();
        //        }
        //        drawTulip(): void {
        //            //stalk
        //            crc2.beginPath();
        //            crc2.strokeStyle = this.stalkColor;
        //            crc2.moveTo(this.x, this.y);
        //            crc2.lineTo(this.x, this.y - 20);
        //            crc2.stroke();
        //            crc2.closePath();
        //            //leafs
        //            crc2.beginPath();
        //            crc2.strokeStyle = this.stalkColor;
        //            crc2.moveTo(this.x, this.y);
        //            crc2.lineTo(this.x, this.y - 12);
        //            crc2.lineTo(this.x - 5, this.y - 18);
        //            crc2.lineTo(this.x, this.y - 5);
        //            crc2.stroke();
        //            crc2.closePath();
        //            crc2.fillStyle = this.stalkColor;
        //            crc2.fill();
        //
        //            crc2.beginPath();
        //            crc2.strokeStyle = this.stalkColor;
        //            crc2.moveTo(this.x, this.y);
        //            crc2.lineTo(this.x, this.y - 12);
        //            crc2.lineTo(this.x + 5, this.y - 18);
        //            crc2.lineTo(this.x, this.y - 5);
        //            crc2.stroke();
        //            crc2.closePath();
        //            crc2.fillStyle = this.stalkColor;
        //            crc2.fill();
        //            //blossom
        //            crc2.fillStyle = this.petalColor;
        //            crc2.beginPath();
        //            crc2.moveTo(this.x, this.y - 25);
        //            crc2.arc(this.x, this.y - 30, 10, 0, Math.PI);
        //            crc2.fillStyle = this.petalColor;
        //            crc2.fill();
        //            crc2.beginPath();
        //            crc2.fillStyle = this.petalColor;
        //
        //            crc2.moveTo(this.x - 5, this.y - 25);
        //            crc2.lineTo(this.x, this.y - 32);
        //            crc2.lineTo(this.x + 5, this.y - 25);
        //            crc2.closePath();
        //            crc2.fill();
        //        }
        setRandomColor() {
            let blaetterFarbe = ["#cb0051", "#b628bf", "#28d2d4", "#ffd2d4", "#00bcec", "#ff4e00", "#ffa400", "#bcff00"];
            let blueteFarbe = ["#f1ffcb", "#ffc4aa", "#fff8c6", "#cefeff", "#ffd2d4", "#ffb8ea", "#fe7aa4", "#e9abff"];
            this.zufallFarbeBlatt = blaetterFarbe[Math.floor(Math.random() * blaetterFarbe.length)];
            this.zufallFarbeBluete = blueteFarbe[Math.floor(Math.random() * blueteFarbe.length)];
        }
        setRandomPosition() {
            let minX = 0;
            let maxX = 175;
            let minY = 166;
            let maxY = 250;
            this.x = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
            this.y = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
        }
        drawRandomFlowers() {
            for (let i = 0; i < 15; i++) {
                let zufallBlume = Math.floor((Math.random() * 2)) + 1;
                // if für zufällige Blumensorte
                if (zufallBlume == 1) {
                    this.setRandomColor();
                    this.setRandomPosition();
                    this.drawTulpe();
                }
                else {
                    this.setRandomColor();
                    this.setRandomPosition();
                    this.drawBlume();
                }
            }
        }
    }
    aufgabe7a.Flower = Flower;
})(aufgabe7a || (aufgabe7a = {}));
//# sourceMappingURL=flower.js.map