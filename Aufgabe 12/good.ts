namespace aufgabe12 {


    export class Good extends Thing {
        bad: boolean = false;
        paket: string;
        band: string;



        update(): void {
            this.move();
            this.draw();

        }
        draw(): void {
            let _x: number = this.x;
            let _y: number = this.y;
            let p: string = this.paket;
            let b: string = this.band;
            //Paket
            //vorne
            crc2.beginPath();
            crc2.fillStyle = p;
            crc2.strokeStyle = "#000000";
            crc2.rect(_x - 10, _y - 6.5, 20, 13);
            crc2.rect(_x - 11, _y - 8.5, 21, 2);
            crc2.lineWidth = 0.5;
            crc2.fill();
            crc2.stroke();

            //Sei    
            crc2.beginPath();
            crc2.fillStyle = p;
            crc2.strokeStyle = "#000000";
            crc2.moveTo(_x + 10, _y - 6.5);
            crc2.lineTo(_x + 10, _y + 6.5);
            crc2.lineTo(_x + 15, _y + 0.5);
            crc2.lineTo(_x + 15, _y - 12.5);
            crc2.lineWidth = 0.5;
            crc2.fill();
            crc2.stroke();



            crc2.beginPath();
            crc2.fillStyle = p;
            crc2.strokeStyle = "#000000";
            crc2.moveTo(_x + 10, _y - 8.5);
            crc2.lineTo(_x + 10, _y - 6.5);
            crc2.lineTo(_x + 15, _y - 12.5);
            crc2.lineTo(_x + 15, _y - 14.5);
            crc2.lineWidth = 0.5;
            crc2.fill();
            crc2.stroke();

            //Deckel
            crc2.beginPath();
            crc2.fillStyle = p;
            crc2.strokeStyle = "#000000";
            crc2.moveTo(_x - 11, _y - 8.5);
            crc2.lineTo(_x + 10, _y - 8.5);
            crc2.lineTo(_x + 15, _y - 14.5);
            crc2.lineTo(_x - 5, _y - 14.5);
            crc2.lineTo(_x - 11, _y - 8.5);
            crc2.lineWidth = 0.5;
            crc2.fill();
            crc2.stroke();

            //Bänder:
            //vorne
            crc2.beginPath();
            crc2.fillStyle = b;
            crc2.strokeStyle = "#000000";
            crc2.moveTo(_x - 2, _y - 6.5);
            crc2.lineTo(_x - 2, _y + 6.5);
            crc2.lineTo(_x + 2, _y + 6.5);
            crc2.lineTo(_x + 2, _y - 6.5);
            crc2.lineWidth = 0.5;
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = b;
            crc2.strokeStyle = "#000000";
            crc2.moveTo(_x - 3, _y - 8.5);
            crc2.lineTo(_x - 3, _y - 6.5);
            crc2.lineTo(_x + 1, _y - 6.5);
            crc2.lineTo(_x + 1, _y - 8.5);
            crc2.lineWidth = 0.5;
            crc2.fill();
            crc2.stroke();

            //oben
            crc2.beginPath();
            crc2.fillStyle = b;
            crc2.strokeStyle = "#000000";
            crc2.moveTo(_x + 2, _y - 14.5);
            crc2.lineTo(_x - 3, _y - 8.5);
            crc2.lineTo(_x + 1, _y - 8.5);
            crc2.lineTo(_x + 6, _y - 14.5);
            crc2.lineWidth = 0.5;
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.fillStyle = b;
            crc2.strokeStyle = b;
            crc2.moveTo(_x - 7.5, _y - 11.5);
            crc2.moveTo(_x - 8, _y - 12.5);
            crc2.lineTo(_x + 12.5, _y - 12.5);
            crc2.lineTo(_x + 12, _y - 11.5);
            crc2.fill();
            crc2.lineWidth = 0.5;
            crc2.stroke();

            //seite
            crc2.beginPath();
            crc2.fillStyle = b;
            crc2.strokeStyle = b;
            crc2.lineTo(_x + 11.5, _y - 11.5);
            crc2.moveTo(_x + 11.5, _y + 3.5);
            crc2.moveTo(_x + 12.5, _y + 2.5);
            crc2.lineTo(_x + 12.5, _y - 12.5);
            crc2.fill();
            crc2.lineWidth = 1;
            crc2.stroke();
            //schwarze kontur

            crc2.beginPath();
            crc2.strokeStyle = "#000000";
            crc2.moveTo(_x + 10, _y - 8.5);
            crc2.lineTo(_x + 10, _y - 6.5);
            crc2.lineTo(_x + 15, _y - 12.5);
            crc2.lineTo(_x + 15, _y - 14.5);
            crc2.lineTo(_x + 10, _y - 8.5);
            crc2.lineWidth = 0.5;
            crc2.stroke();

            crc2.beginPath();
            crc2.strokeStyle = "#000000";
            crc2.moveTo(_x - 5, _y - 14.5);
            crc2.lineTo(_x - 11, _y - 8.5);
            crc2.lineWidth = 0.5;
            crc2.stroke();

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
            let paket: string[] = ["#cb0051", "#b628bf", "#28d2d4", "#ffd2d4", "#00bcec", "#ff4e00", "#ffa400", "#bcff00", "#f0475c"];
            let band: string[] = ["#f1ffcb", "#ffc4aa", "#fff8c6", "#cefeff", "#ffd2d4", "#ffb8ea", "#fe7aa4", "#e9abff", "#68c15d"];
            this.paket = paket[Math.floor(Math.random() * paket.length)];
            this.band = band[Math.floor(Math.random() * band.length)];
        }

    }

}


