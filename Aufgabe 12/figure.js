var aufgabe12;
(function (aufgabe12) {
    class baum {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            console.log("constructor");
            this.draw();
        }
        draw() {
            let _x = this.x;
            let _y = this.y;
            aufgabe12.crc2.beginPath();
            aufgabe12.crc2.fillStyle = "#FFFFFF";
            aufgabe12.crc2.arc(_x - 3, _y - 4, 5, 0, 2 * Math.PI);
            aufgabe12.crc2.fill();
            console.log("draw");
        }
    }
    aufgabe12.baum = baum;
})(aufgabe12 || (aufgabe12 = {}));
//# sourceMappingURL=figure.js.map