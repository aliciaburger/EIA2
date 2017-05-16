var aufgabe8;
(function (aufgabe8) {
    class Bluemchen extends aufgabe8.Flower {
        drawBlume() {
            let _x = this.x;
            let _y = this.y;
            let _blueteFarbe = this.zufallFarbeBluete;
            let _blaetterFarbe = this.zufallFarbeBlatt;
            //Blumenstengel
            aufgabe8.crc2.beginPath();
            aufgabe8.crc2.fillStyle = "#006e11";
            aufgabe8.crc2.moveTo(_x, _y);
            aufgabe8.crc2.lineTo(_x, _y - 16);
            aufgabe8.crc2.lineTo(_x + 2.5, _y - 16);
            aufgabe8.crc2.lineTo(_x + 2.5, _y);
            aufgabe8.crc2.closePath();
            aufgabe8.crc2.fill();
            //Blütenblätter
            aufgabe8.crc2.beginPath();
            aufgabe8.crc2.fillStyle = _blaetterFarbe;
            aufgabe8.crc2.arc(_x - 2, _y - 18, 3.5, 0, 2 * Math.PI);
            aufgabe8.crc2.moveTo(_x - 4, _y - 24);
            aufgabe8.crc2.arc(_x - 4, _y - 24, 3.5, 0, 2 * Math.PI);
            aufgabe8.crc2.moveTo(_x + 1, _y - 27);
            aufgabe8.crc2.arc(_x + 1, _y - 27, 3.5, 0, 2 * Math.PI);
            aufgabe8.crc2.moveTo(_x + 6.5, _y - 24);
            aufgabe8.crc2.arc(_x + 6.5, _y - 24, 3.5, 0, 2 * Math.PI);
            aufgabe8.crc2.moveTo(_x + 4.5, _y - 18);
            aufgabe8.crc2.arc(_x + 4.5, _y - 18, 3.5, 0, 2 * Math.PI);
            aufgabe8.crc2.fill();
            //Blütenkopf
            aufgabe8.crc2.beginPath();
            aufgabe8.crc2.fillStyle = _blueteFarbe;
            aufgabe8.crc2.moveTo(_x + 1.25, _y - 22.5);
            aufgabe8.crc2.arc(_x + 1.25, _y - 22.5, 3.5, 0, 2 * Math.PI);
            aufgabe8.crc2.fill();
        }
    }
    aufgabe8.Bluemchen = Bluemchen;
})(aufgabe8 || (aufgabe8 = {}));
//# sourceMappingURL=bluemchen.js.map