namespace aufgabe12 {


    export class Good extends Thing {
        bad: boolean = false;
        



        update(): void {
            this.move();
            this.draw();

        }
        draw(): void {
            let _x: number = this.x;
            let _y: number = this.y;

                    //vorne
        crc2.beginPath();
        crc2.fillStyle = "#f0475c";
        crc2.strokeStyle = "#000000";
        crc2.rect(_x - 10, _y - 6.5, 20, 13);
        crc2.rect(_x - 11, _y - 8.5, 21, 2);
        crc2.lineWidth = 0.5;
        crc2.fill();
        crc2.stroke();
        
        //Seite
        
        crc2.beginPath();
        crc2.fillStyle = "#f0475c";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x+10,_y-6.5);
        crc2.lineTo(_x+10,_y+6.5);
        crc2.lineTo(_x+15,_y+0.5);
        crc2.lineTo(_x+15,_y-12.5);
        crc2.lineWidth = 0.5;
        crc2.fill();
        crc2.stroke();
        
        
        
        crc2.beginPath();
        crc2.fillStyle = "#f0475c";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x+10,_y-8.5);
        crc2.lineTo(_x+10,_y-6.5);
        crc2.lineTo(_x+15,_y-12.5);
        crc2.lineTo(_x+15,_y-14.5);
        crc2.lineWidth = 0.5;
        crc2.fill();
        crc2.stroke();
        
        //Deckel
        crc2.beginPath();
        crc2.fillStyle = "#f0475c";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x - 11, _y - 8.5);
        crc2.lineTo(_x+10,_y-8.5);
        crc2.lineTo(_x+15,_y-14.5);
        crc2.lineTo(_x-5,_y-14.5);
        crc2.lineTo(_x - 11, _y - 8.5);
        crc2.lineWidth = 0.5;
        crc2.fill();
        crc2.stroke();
        
        //Bänder:
        //vorne
         crc2.beginPath();
        crc2.fillStyle = "#68c15d";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x - 2, _y - 6.5);
        crc2.lineTo(_x-2,_y+6.5);
        crc2.lineTo(_x+2,_y+6.5);
        crc2.lineTo(_x+2,_y-6.5);
        crc2.lineWidth = 0.5;
        crc2.fill();
        crc2.stroke();
        
        crc2.beginPath();
        crc2.fillStyle = "#68c15d";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x-3,_y-8.5);
        crc2.lineTo(_x - 3, _y - 6.5);
        crc2.lineTo(_x+1,_y-6.5);
        crc2.lineTo(_x+1,_y-8.5);
        crc2.lineWidth = 0.5;
        crc2.fill();
        crc2.stroke();
        
        //oben
        crc2.beginPath();
        crc2.fillStyle = "#68c15d";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x+2,_y-14.5);
        crc2.lineTo(_x-3,_y-8.5);
        crc2.lineTo(_x+1,_y-8.5);
        crc2.lineTo(_x+6,_y-14.5);
        crc2.lineWidth = 0.5;
        crc2.fill();
        crc2.stroke();
        
        crc2.beginPath();
        crc2.fillStyle = "#68c15d";
        crc2.strokeStyle = "#68c15d";
        crc2.moveTo(_x-7.5,_y-11.5);
        crc2.moveTo(_x-8,_y-12.5);
        crc2.lineTo(_x+12.5,_y-12.5);
        crc2.lineTo(_x+12,_y-11.5);
        crc2.fill();    
        crc2.lineWidth = 0.5;   
        crc2.stroke();
        
        //seite
        crc2.beginPath();
        crc2.fillStyle = "#68c15d";
        crc2.strokeStyle = "#68c15d";       
        crc2.lineTo(_x+11.5,_y-11.5);
        crc2.moveTo(_x+11.5,_y+3.5);
        crc2.moveTo(_x+12.5,_y+2.5);
        crc2.lineTo(_x+12.5,_y-12.5);
        crc2.fill();
        crc2.lineWidth = 1;
        crc2.stroke();
        //schwarze kontur

        crc2.beginPath();        
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x+10,_y-8.5);
        crc2.lineTo(_x+10,_y-6.5);
        crc2.lineTo(_x+15,_y-12.5);
        crc2.lineTo(_x+15,_y-14.5);
        crc2.lineTo(_x+10,_y-8.5);
        crc2.lineWidth = 0.5;
        crc2.stroke();
        
        crc2.beginPath();
        crc2.strokeStyle = "#000000"; 
        crc2.moveTo(_x-5,_y-14.5);
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
            let bienenFabe: string[] = ["#FFF700", "#FFD500", "#FFBC00", "#FFA600", "#FFD041", "#FFE041", "#FFFA41", "#EDFF41"];
            let fluegelFabe: string[] = ["#F8E1FF", "#FFE1FE", "#EBE1FF", "#E1E1FF", "#E1F2FF", "#E1FFFF", "#E1FFF7", "#E1FFE1"];
            this.bienenColor = bienenFabe[Math.floor(Math.random() * bienenFabe.length)];
            this.fluegelColor = fluegelFabe[Math.floor(Math.random() * fluegelFabe.length)];
        }

    }

}


