namespace aufgabe8 {

 
    export class Bee {
        x: number;
        y: number;
        bienenColor: string;
        fluegelColor: string;
        beetype: boolean;

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
            crc2.arc(_x, _y, 3.5, 0.5 * Math.PI, 1.5 * Math.PI);
            crc2.lineTo(_x + 10, _y - 3.5);
            crc2.lineTo(_x + 10, _y + 3.5);
            crc2.lineTo(_x, _y + 3.5);
            crc2.moveTo(_x + 10, _y + 3.5);
            crc2.arc(_x + 10, _y, 3.5, 1.5 * Math.PI, 0.5 * Math.PI);
            crc2.moveTo(_x + 12, _y + 2);
            crc2.lineTo(_x + 15, _y);
            crc2.lineTo(_x + 12, _y - 2);
            crc2.fill();

            //gelbe Streifen
            crc2.beginPath();
            //Achtung Flimmer,-Farbwechsler-bienen :D
            crc2.fillStyle = this.bienenColor;
            //        crc2.fillStyle = "yellow";
            crc2.moveTo(_x, _y + 3);
            crc2.lineTo(_x + 2, _y + 3);
            crc2.lineTo(_x + 2, _y + 3);
            crc2.lineTo(_x + 2, _y - 3);
            crc2.lineTo(_x, _y - 3);
            crc2.lineTo(_x, _y + 3);

            crc2.moveTo(_x + 4, _y + 3);
            crc2.lineTo(_x + 6, _y + 3);
            crc2.lineTo(_x + 6, _y + 3);
            crc2.lineTo(_x + 6, _y - 3);
            crc2.lineTo(_x + 4, _y - 3);
            crc2.lineTo(_x + 4, _y + 3);

            crc2.moveTo(_x + 8, _y + 3);
            crc2.lineTo(_x + 10, _y + 3);
            crc2.lineTo(_x + 10, _y + 3);
            crc2.lineTo(_x + 10, _y - 3);
            crc2.lineTo(_x + 8, _y - 3);
            crc2.lineTo(_x + 8, _y + 3);

            crc2.fill();

            //Kopf
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(_x - 3, _y - 4, 5, 0, 2 * Math.PI);
            crc2.fill();
            //Fühler
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.moveTo(_x - 5, _y - 7);
            crc2.lineTo(_x - 10, _y - 11);
            crc2.lineTo(_x - 10, _y - 10);
            crc2.lineTo(_x - 6, _y - 8);
            crc2.lineTo(_x - 5, _y - 7);
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.moveTo(_x - 4, _y - 9);
            crc2.lineTo(_x - 9, _y - 13);
            crc2.lineTo(_x - 9, _y - 12);
            crc2.lineTo(_x - 5, _y - 10);
            crc2.lineTo(_x - 4, _y - 9);
            crc2.fill();


            //flügel links
            crc2.beginPath();
            //        crc2.fillStyle = "lightblue";
            crc2.fillStyle = this.fluegelColor;
            crc2.moveTo(_x + 5, _y - 3.5);
            crc2.bezierCurveTo(_x - 3, _y - 15, _x + 12, _y - 15, _x + 5, _y - 3.5);
            crc2.stroke();
            crc2.stroke();
            crc2.fill();
            //flügel rechts
            crc2.beginPath();
            //        crc2.fillStyle = "lightblue";
            crc2.fillStyle = this.fluegelColor;
            crc2.moveTo(_x + 6, _y - 3.5);
            crc2.bezierCurveTo(_x + 3, _y - 15, _x + 18, _y - 15, _x + 6, _y - 3.5);
            crc2.stroke();
            crc2.fill();
        }







        move(): void {
            //crc2.putImageData(hintergrund, 0, 0);


            this.x += Math.random() * (- 2);
            this.y += Math.random() * 10 - 5;



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


