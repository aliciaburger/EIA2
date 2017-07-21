namespace aufgabe12 {

    // Superklasse
    export class Thing {
        x: number;
        y: number;
        bienenColor: string;
        fluegelColor: string;
        speed: number;
        bad: boolean = false;

        constructor(_x: number, _y: number) {

            this.x = _x;
            this.y = _y;
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
            if (counter > 4) {
                this.speed = 3;
                if (counter > 7) {
                    this.speed = 4;
                    if (counter > 10) {
                        this.speed = 5;
                        if (counter > 15) {
                            this.speed = 6;
                            if (counter > 20) {
                                this.speed = 7;
                                if (counter > 25) {
                                    this.speed = 8;
                                }
                            }
                        }
                    }
                }
            }

            this.y += Math.random() * this.speed;

        }


    }

}


