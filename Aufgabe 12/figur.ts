namespace aufgabe12 {


    export class Figur {
        x: number;
        y: number;
        bienenColor: string;
        fluegelColor: string;
        speed: number;
        xTarget: number;

        constructor(_x: number, _y: number) {


            this.x = _x;
            this.y = _y;
            this.speed = 0.1;
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
            crc2.fillStyle = "#FFFFFF";
            crc2.arc(_x - 3, _y - 4, 5, 0, 2 * Math.PI);
            crc2.fill();
            
        }


//        setTargetPosition(): void {
//
//            this.xTarget = startposition[Math.floor(Math.random() * startposition.length)];        
//        }

        move(): void {
            //crc2.putImageData(hintergrund, 0, 0);
            
           
//            let xDiff: number = this.xTarget - this.x;
//            if (Math.abs(xDiff) != this.x )
//                this.setTargetPosition();
//            else {
//                this.x += xDiff * this.speed;
//               
//                }
        }

        setRandomColor(): void {
            let bienenFabe: string[] = ["#FFF700", "#FFD500", "#FFBC00", "#FFA600", "#FFD041", "#FFE041", "#FFFA41", "#EDFF41"];
            let fluegelFabe: string[] = ["#F8E1FF", "#FFE1FE", "#EBE1FF", "#E1E1FF", "#E1F2FF", "#E1FFFF", "#E1FFF7", "#E1FFE1"];
            this.bienenColor = bienenFabe[Math.floor(Math.random() * bienenFabe.length)];
            this.fluegelColor = fluegelFabe[Math.floor(Math.random() * fluegelFabe.length)];
        }

    }

}


