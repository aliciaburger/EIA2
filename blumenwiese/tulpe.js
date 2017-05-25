var aufgabe8;
(function (aufgabe8) {
    class Tulpe extends aufgabe8.Flower {
        drawBlume() {
            let _x = this.x;
            let _y = this.y;
            let _blueteFarbe = this.zufallFarbeBluete;
            //Blumenstengel
            aufgabe8.crc2.beginPath();
            aufgabe8.crc2.fillStyle = "#006e11";
            aufgabe8.crc2.moveTo(_x, _y);
            aufgabe8.crc2.lineTo(_x, _y - 18);
            aufgabe8.crc2.lineTo(_x + 2.5, _y - 18);
            aufgabe8.crc2.lineTo(_x + 2.5, _y);
            aufgabe8.crc2.closePath();
            aufgabe8.crc2.fill();
            //Blütenkopf
            aufgabe8.crc2.beginPath();
            aufgabe8.crc2.fillStyle = _blueteFarbe;
            aufgabe8.crc2.moveTo(_x + 4, _y - 22);
            aufgabe8.crc2.arc(_x + 1.25, _y - 22, 10, -0.15 * Math.PI, 1.15 * Math.PI);
            aufgabe8.crc2.lineTo(_x - 2.75, _y - 22);
            aufgabe8.crc2.lineTo(_x + 1.25, _y - 28);
            aufgabe8.crc2.fill();
        }
    }
    aufgabe8.Tulpe = Tulpe;
})(aufgabe8 || (aufgabe8 = {}));
//# sourceMappingURL=tulpe.js.map