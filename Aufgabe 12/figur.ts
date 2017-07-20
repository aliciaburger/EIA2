namespace aufgabe12 {


    export class Figur {
        x: number;
        y: number;
        bienenColor: string;
        fluegelColor: string;
        speed: number;
        xTarget: number;
        xDiff: number;
        constructor(_x: number, _y: number) {


            this.x = _x;
            this.y = _y;

            this.draw();

        }


        update(): void {
            this.move();
            this.draw();
        }
        draw(): void {
            let _x: number = this.x;
            let _y: number = this.y;
            
            
        //           Geweih links       
        crc2.beginPath();
        crc2.strokeStyle = "#e5aa94";
        crc2.moveTo(_x - 1, _y - 13);
        crc2.bezierCurveTo(_x - 11, _y - 15, _x - 15, _y - 22, _x - 12, _y - 32);
        crc2.moveTo(_x - 11, _y - 19.5);
        crc2.lineTo(_x - 21, _y - 26);
        crc2.moveTo(_x - 9, _y - 18.5);
        crc2.lineTo(_x - 5, _y - 23);
        crc2.lineWidth = 2.5;
        crc2.stroke();

        //           Geweih rechts
        crc2.beginPath();
        crc2.strokeStyle = "#e5aa94";
        crc2.moveTo(_x + 1, _y - 13);
        crc2.bezierCurveTo(_x + 11, _y - 15, _x + 15, _y - 22, _x + 12, _y - 32);
        crc2.moveTo(_x + 11, _y - 19.5);
        crc2.lineTo(_x + 21, _y - 26);
        crc2.moveTo(_x + 9, _y - 18.5);
        crc2.lineTo(_x + 5, _y - 23);
        crc2.lineWidth = 2.5;
        crc2.stroke();
        
        //Ohr links
        crc2.beginPath();
        crc2.fillStyle = "#a45135";
        crc2.strokeStyle = "#a45135";
        crc2.moveTo(_x - 18, _y - 15);
        crc2.bezierCurveTo(_x - 16, _y - 0, _x, _y - 12, _x - 18, _y - 15);
        crc2.fill();
            
        //Ohr rechts
        crc2.beginPath();
        crc2.fillStyle = "#a45135";       
        crc2.moveTo(_x + 18, _y - 15);
        crc2.bezierCurveTo(_x + 16, _y - 0, _x - 1, _y - 12, _x + 18, _y - 15);
        crc2.fill();

        //Kopf
        crc2.beginPath();
        crc2.fillStyle = "#c46840";
        crc2.strokeStyle = "#a45135";
        crc2.arc(_x, _y, 15, 0, 2 * Math.PI);
        crc2.fill();
        crc2.lineWidth = 0.5;
        crc2.stroke();
            
        //            Auge links
        crc2.beginPath();
        crc2.fillStyle = "#FFFFFF";
        crc2.arc(_x - 4.5, _y - 5.5, 3, 0, 2 * Math.PI);
        crc2.fill();

        crc2.beginPath();
        crc2.fillStyle = "#442416";
        crc2.arc(_x - 4.5, _y - 5, 2, 0, 2 * Math.PI);
        crc2.fill();
        //            Auge rechts
        crc2.beginPath();
        crc2.fillStyle = "#FFFFFF";
        crc2.arc(_x + 4.5, _y - 5.5, 3, 0, 2 * Math.PI);
        crc2.fill();
            
        crc2.beginPath();
        crc2.fillStyle = "#442416";
        crc2.arc(_x + 4.5, _y - 5, 2, 0, 2 * Math.PI);
        crc2.fill();
            
        //            Schnauze
        crc2.beginPath();
        crc2.fillStyle = "#88492c";
        crc2.moveTo(_x - 7, _y + 0.5);
        crc2.lineTo(_x - 5.5, _y + 12);
        crc2.lineTo(_x + 5.5, _y + 12);
        crc2.lineTo(_x + 7, _y + 0.5);
        crc2.fill();
            
        //           Mund
        crc2.beginPath();
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x - 4, _y + 8.5);
        crc2.bezierCurveTo(_x - 2, _y + 10.5, _x + 2, _y + 10.5, _x + 4, _y + 8.5);
        crc2.lineWidth = 0.5;
        crc2.stroke();
            
        //           Nasenloch links
        crc2.beginPath();
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x + 3, _y + 2);
        crc2.bezierCurveTo(_x + 3.5, _y + 5, _x + 3.5, _y + 6, _x + 1, _y + 7);
        crc2.lineWidth = 0.35;
        crc2.stroke();
            
        //           Nasenloch rechts
        crc2.beginPath();
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x - 3, _y + 2);
        crc2.bezierCurveTo(_x - 3.5, _y + 5, _x - 3.5, _y + 6, _x - 1, _y + 7);
        crc2.lineWidth = 0.35;
        crc2.stroke();






        }







        move(): void {
            this.speed = 0.55;
            if (counter > 20) {
                this.speed = 0.7;
            }

            this.xTarget = startposition[(position - 1)];
            this.xDiff = this.xTarget - this.x;
            this.x += this.xDiff * this.speed;


        }



        setRandomColor(): void {
            let bienenFabe: string[] = ["#FFF700", "#FFD500", "#FFBC00", "#FFA600", "#FFD041", "#FFE041", "#FFFA41", "#EDFF41"];
            let fluegelFabe: string[] = ["#F8E1FF", "#FFE1FE", "#EBE1FF", "#E1E1FF", "#E1F2FF", "#E1FFFF", "#E1FFF7", "#E1FFE1"];
            this.bienenColor = bienenFabe[Math.floor(Math.random() * bienenFabe.length)];
            this.fluegelColor = fluegelFabe[Math.floor(Math.random() * fluegelFabe.length)];
        }

    }

}


