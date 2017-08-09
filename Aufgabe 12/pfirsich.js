var aufgabe12;
(function (aufgabe12) {
    class Pfirsich extends aufgabe12.Bad {
        draw() {
            let _x = this.x;
            let _y = this.y;
            //Stengel
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.strokeStyle = "#88492c";
            aufgabe12.crc2.moveTo(_x, _y);
            aufgabe12.crc2.lineTo(_x, _y - 12);
            aufgabe12.crc2.lineWidth = 2;
            aufgabe12.crc2.stroke();
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#68c15d";
            aufgabe12.crc2.strokeStyle = "#44803d";
            aufgabe12.crc2.fillStyle = this.fluegelColor;
            aufgabe12.crc2.moveTo(_x, _y - 9);
            aufgabe12.crc2.bezierCurveTo(_x + 8, _y - 5, _x + 12, _y - 18.5, _x, _y - 9);
            aufgabe12.crc2.lineWidth = 0.5;
            aufgabe12.crc2.fill();
            //        Pfirsich
            var grd = aufgabe12.crc2.createLinearGradient(_x, _y + 9, _x, _y - 6.5);
            grd.addColorStop(0, "red");
            grd.addColorStop(0.75, "orange");
            grd.addColorStop(1, "yellow");
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = grd;
            aufgabe12.crc2.arc(_x, _y, 6, 0, 2 * Math.PI);
            aufgabe12.crc2.fill();
        }
    }
    aufgabe12.Pfirsich = Pfirsich;
})(aufgabe12 || (aufgabe12 = {}));
//# sourceMappingURL=pfirsich.js.map