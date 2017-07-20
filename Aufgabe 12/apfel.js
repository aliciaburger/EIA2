var aufgabe12;
(function (aufgabe12) {
    class Apfel extends aufgabe12.Bad {
        draw() {
            let _x = this.x;
            let _y = this.y;
            //Stengel
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#f0475c";
            aufgabe12.crc2.strokeStyle = "#68c15d";
            aufgabe12.crc2.moveTo(_x, _y);
            aufgabe12.crc2.lineTo(_x, _y - 12);
            aufgabe12.crc2.lineWidth = 2;
            //        crc2.fill();
            aufgabe12.crc2.stroke();
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#68c15d";
            aufgabe12.crc2.strokeStyle = "#44803d";
            aufgabe12.crc2.fillStyle = this.fluegelColor;
            aufgabe12.crc2.moveTo(_x, _y - 9);
            aufgabe12.crc2.bezierCurveTo(_x + 8, _y - 5, _x + 12, _y - 18.5, _x, _y - 9);
            aufgabe12.crc2.lineWidth = 0.5;
            aufgabe12.crc2.fill();
            //        Apfel
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#e6333f";
            aufgabe12.crc2.arc(_x - 3, _y, 6, 0, 2 * Math.PI);
            aufgabe12.crc2.fill();
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#e6333f";
            aufgabe12.crc2.arc(_x + 3, _y, 6, 0, 2 * Math.PI);
            aufgabe12.crc2.fill();
            //Stengel
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#f0475c";
            aufgabe12.crc2.strokeStyle = "#68c15d";
            aufgabe12.crc2.moveTo(_x, _y);
            aufgabe12.crc2.lineTo(_x, _y - 12);
            aufgabe12.crc2.lineWidth = 2;
            //        crc2.fill();
            aufgabe12.crc2.stroke();
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#68c15d";
            aufgabe12.crc2.fillStyle = this.fluegelColor;
            aufgabe12.crc2.moveTo(_x, _y - 9);
            aufgabe12.crc2.bezierCurveTo(_x + 8, _y - 5, _x + 12, _y - 18.5, _x, _y - 9);
            //        crc2.stroke();
            aufgabe12.crc2.fill();
            //        Apfel
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#e6333f";
            aufgabe12.crc2.arc(_x - 3, _y, 6, 0, 2 * Math.PI);
            aufgabe12.crc2.fill();
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#e6333f";
            aufgabe12.crc2.arc(_x + 3, _y, 6, 0, 2 * Math.PI);
            aufgabe12.crc2.fill();
        }
    }
    aufgabe12.Apfel = Apfel;
})(aufgabe12 || (aufgabe12 = {}));
//# sourceMappingURL=apfel.js.map