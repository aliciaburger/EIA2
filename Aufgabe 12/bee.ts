namespace aufgabe12 {


    export class Thing {
        x: number;
        y: number;
        bienenColor: string;
        fluegelColor: string;
        speed: number;


        constructor(_x: number, _y: number) {


            this.x = _x;
            this.y = _y;
            //            this.setRandomColor();
            //    .u          

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
            //crc2.putImageData(hintergrund, 0, 0);


            this.speed = 2;
            this.y += Math.random() * this.speed;



            //if-Abfragen um die Bienen beim erreichen eines Bildrandes auf der anderen Seite wieder erscheinen zu lassen


            if (this.x >= crc2.canvas.width) {
                this.x = 0;
            }
            if (this.y <= 0) {
                this.y = crc2.canvas.height;
            }
            if (this.x < 0) {
                this.x = crc2.canvas.width;
            }
            if (this.y > crc2.canvas.height) {
                this.y = 0;
            }




        }

        setRandomColor(): void {
            let bienenFabe: string[] = ["#FFF700", "#FFD500", "#FFBC00", "#FFA600", "#FFD041", "#FFE041", "#FFFA41", "#EDFF41"];
            let fluegelFabe: string[] = ["#F8E1FF", "#FFE1FE", "#EBE1FF", "#E1E1FF", "#E1F2FF", "#E1FFFF", "#E1FFF7", "#E1FFE1"];
            this.bienenColor = bienenFabe[Math.floor(Math.random() * bienenFabe.length)];
            this.fluegelColor = fluegelFabe[Math.floor(Math.random() * fluegelFabe.length)];
        }

    }

}


