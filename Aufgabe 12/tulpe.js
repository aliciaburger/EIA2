var aufgabe12;
(function (aufgabe12) {
    class Tulpe extends aufgabe12.Bad {
        draw() {
            let _x = this.x;
            let _y = this.y;
            let _blueteFarbe = this.zufallFarbeBluete;
            //Blumenstengel
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#006e11";
            aufgabe12.crc2.moveTo(_x, _y);
            aufgabe12.crc2.lineTo(_x, _y - 18);
            aufgabe12.crc2.lineTo(_x + 2.5, _y - 18);
            aufgabe12.crc2.lineTo(_x + 2.5, _y);
            aufgabe12.crc2.closePath();
            aufgabe12.crc2.fill();
            //Blütenkopf
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = _blueteFarbe;
            aufgabe12.crc2.moveTo(_x + 4, _y - 22);
            aufgabe12.crc2.arc(_x + 1.25, _y - 22, 10, -0.15 * Math.PI, 1.15 * Math.PI);
            aufgabe12.crc2.lineTo(_x - 2.75, _y - 22);
            aufgabe12.crc2.lineTo(_x + 1.25, _y - 28);
            aufgabe12.crc2.fill();
        }
    }
    aufgabe12.Tulpe = Tulpe;
})(aufgabe12 || (aufgabe12 = {}));
//# sourceMappingURL=tulpe.js.map