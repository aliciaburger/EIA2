var aufgabe7a;
(function (aufgabe7a) {
    class Flower {
        constructor(_x, _y) {
            console.log("Hey");
            //            this.setRandomStyle();
            //this.setRandomPosition();
            this.setRandomColor();
            this.x = _x;
            this.y = _y;
        }
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
                }
                else {
                    this.setRandomColor();
                }
            }
        }
    }
    aufgabe7a.Flower = Flower;
})(aufgabe7a || (aufgabe7a = {}));
//# sourceMappingURL=flower.js.map