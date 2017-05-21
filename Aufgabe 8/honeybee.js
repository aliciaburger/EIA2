var aufgabe8;
(function (aufgabe8) {
    class Honeybee extends aufgabe8.Bee {
        //         constructor(_x: number, _y: number) {
        //            super(_x, _y);
        //           
        //            
        //            this.askHoneyflower();
        //             
        //         }
        move() {
            let xDiff = this.hfx - this.x;
            let yDiff = this.hfy - this.y;
            //             if (this.x == this.hfx && this.y == this.hfy) {
            if (Math.abs(xDiff) < 0.3 && Math.abs(yDiff) < 0.3) {
                this.x = 300;
                this.y = 200;
            }
            else {
                this.x += xDiff * 0.03;
                this.y += yDiff * 0.03;
            }
        }
        //             console.log("position honigbiene x: " + this.x + " y: " + this.y);
        askHoneyflower() {
            let i = Math.floor(Math.random() * aufgabe8.flowers.length);
            for (let j = 0; j > aufgabe8.flowers.length; j++) {
                if (aufgabe8.flowers[i].blumenstatus == true) {
                    break;
                }
                else {
                    i = Math.floor(Math.random() * aufgabe8.flowers.length);
                }
            }
            this.hfx = aufgabe8.flowers[i].x;
            this.hfy = aufgabe8.flowers[i].y - 24;
            aufgabe8.flowers[i].blumenstatus = false;
            //            this.x = flowers[i].x;
            //            this.y = flowers[i].y;
            console.log("zufällige honeyflower an position:  x:" + this.hfx + " y: " + this.hfy);
        }
    }
    aufgabe8.Honeybee = Honeybee;
})(aufgabe8 || (aufgabe8 = {}));
//# sourceMappingURL=honeybee.js.map