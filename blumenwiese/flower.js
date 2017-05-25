var aufgabe8;
(function (aufgabe8) {
    class Flower {
        constructor() {
            this.blumenstatus = true;
        }
        drawBlume() {
            // Klasse Bluemchen- bluemchen.ts/ Tulpe- tulpe.ts
        }
        setRandomColor() {
            let blaetterFarbe = ["#cb0051", "#b628bf", "#28d2d4", "#ffd2d4", "#00bcec", "#ff4e00", "#ffa400", "#bcff00"];
            let blueteFarbe = ["#f1ffcb", "#ffc4aa", "#fff8c6", "#cefeff", "#ffd2d4", "#ffb8ea", "#fe7aa4", "#e9abff"];
            this.zufallFarbeBlatt = blaetterFarbe[Math.floor(Math.random() * blaetterFarbe.length)];
            this.zufallFarbeBluete = blueteFarbe[Math.floor(Math.random() * blueteFarbe.length)];
        }
        setRandomPositionStatic() {
            let minX = 175;
            let maxX = 320;
            let minY = 150;
            let maxY = 250;
            this.x = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
            this.y = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
        }
        setRandomPosition() {
            let minX = 0;
            let maxX = 175;
            let minY = 166;
            let maxY = 250;
            this.x = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
            this.y = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
        }
    }
    aufgabe8.Flower = Flower;
})(aufgabe8 || (aufgabe8 = {}));
//# sourceMappingURL=flower.js.map