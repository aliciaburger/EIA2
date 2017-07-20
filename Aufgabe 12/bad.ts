namespace aufgabe12 {


    export class Bad extends Thing {
        bad: boolean = true;
        zufallFarbeBlatt: string;
        zufallFarbeBluete: string;
        // in den  construktor (mit super)this.setRandomColor();
        constructor(_x: number, _y: number) {
            super(_x, _y);

            this.setRandomColor();


        }

        update(): void {
            this.move();
            this.draw();

        }
        draw(): void {
            let _x: number = this.x;
            let _y: number = this.y;

            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(_x - 3, _y - 4, 5, 0, 2 * Math.PI);
            crc2.fill();

        }







        move(): void {
            this.speed = 2;
            if (counter > 3) {
                this.speed = 2.5;
                if (counter > 5) {
                    this.speed = 3;
                    if (counter > 10) {
                        this.speed = 4;
                        if (counter > 15) {
                            this.speed = 5;
                        }
                    }
                }
            }

            this.y += Math.random() * this.speed;

        }

        setRandomColor(): void {
            let blaetterFarbe: string[] = ["#cb0051", "#b628bf", "#28d2d4", "#ffd2d4", "#00bcec", "#ff4e00", "#ffa400", "#bcff00"];
            let blueteFarbe: string[] = ["#f1ffcb", "#ffc4aa", "#fff8c6", "#cefeff", "#ffd2d4", "#ffb8ea", "#fe7aa4", "#e9abff"];
            this.zufallFarbeBlatt = blaetterFarbe[Math.floor(Math.random() * blaetterFarbe.length)];
            this.zufallFarbeBluete = blueteFarbe[Math.floor(Math.random() * blueteFarbe.length)];
        }

    }

}


