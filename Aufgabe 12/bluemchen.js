var aufgabe12;
(function (aufgabe12) {
    class Bluemchen extends aufgabe12.Bad {
        draw() {
            let _x = this.x;
            let _y = this.y;
            let _blueteFarbe = this.zufallFarbeBluete;
            let _blaetterFarbe = this.zufallFarbeBlatt;
            //Blumenstengel
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#006e11";
            aufgabe12.crc2.moveTo(_x, _y);
            aufgabe12.crc2.lineTo(_x, _y - 16);
            aufgabe12.crc2.lineTo(_x + 2.5, _y - 16);
            aufgabe12.crc2.lineTo(_x + 2.5, _y);
            aufgabe12.crc2.closePath();
            aufgabe12.crc2.fill();
            //Blütenblätter
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = _blaetterFarbe;
            aufgabe12.crc2.arc(_x - 2, _y - 18, 3.5, 0, 2 * Math.PI);
            aufgabe12.crc2.moveTo(_x - 4, _y - 24);
            aufgabe12.crc2.arc(_x - 4, _y - 24, 3.5, 0, 2 * Math.PI);
            aufgabe12.crc2.moveTo(_x + 1, _y - 27);
            aufgabe12.crc2.arc(_x + 1, _y - 27, 3.5, 0, 2 * Math.PI);
            aufgabe12.crc2.moveTo(_x + 6.5, _y - 24);
            aufgabe12.crc2.arc(_x + 6.5, _y - 24, 3.5, 0, 2 * Math.PI);
            aufgabe12.crc2.moveTo(_x + 4.5, _y - 18);
            aufgabe12.crc2.arc(_x + 4.5, _y - 18, 3.5, 0, 2 * Math.PI);
            aufgabe12.crc2.fill();
            //Blütenkopf
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = _blueteFarbe;
            aufgabe12.crc2.moveTo(_x + 1.25, _y - 22.5);
            aufgabe12.crc2.arc(_x + 1.25, _y - 22.5, 3.5, 0, 2 * Math.PI);
            aufgabe12.crc2.fill();
        }
    }
    aufgabe12.Bluemchen = Bluemchen;
})(aufgabe12 || (aufgabe12 = {}));
//# sourceMappingURL=bluemchen.js.map