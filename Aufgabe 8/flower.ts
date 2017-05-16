namespace aufgabe8 {

      
    export class Flower {
        x: number;
        y: number;
        zufallFarbeBlatt: string;
        zufallFarbeBluete: string;
        flowerType: string;

        drawStaticFlower(): void {
            
             let zufallBlume: number = Math.floor((Math.random() * 2)) + 1;          
            // if für zufällige Blumensorte
             if (zufallBlume == 1) {
                 this.flowerType = "Blume";
                 this.setRandomColor();
                 this.setRandomPositionStatic();
                 this.drawBlume();
                 
                 
             } else {
                 this.flowerType = "Tulpe";
                 this.setRandomColor();
                 this.setRandomPositionStatic();
                 this.drawTulpe();
             }
            console.log("X = " + this.x +" Y = " + this.y +" flowerType = " + this.flowerType );
           

   
        
        }

        drawBlume(): void {
            let _x: number = this.x;
            let _y: number = this.y;
            let _blueteFarbe: string = this.zufallFarbeBluete;
            let _blaetterFarbe: string = this.zufallFarbeBlatt;
           


            //Blumenstengel
            crc2.beginPath();
            crc2.fillStyle = "#006e11";
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y - 16);
            crc2.lineTo(_x + 2.5, _y - 16);
            crc2.lineTo(_x + 2.5, _y);
            crc2.closePath();
            crc2.fill();

            //Blütenblätter
            crc2.beginPath();
            crc2.fillStyle = _blaetterFarbe;
            crc2.arc(_x - 2, _y - 18, 3.5, 0, 2 * Math.PI);
            crc2.moveTo(_x - 4, _y - 24);
            crc2.arc(_x - 4, _y - 24, 3.5, 0, 2 * Math.PI);
            crc2.moveTo(_x + 1, _y - 27);
            crc2.arc(_x + 1, _y - 27, 3.5, 0, 2 * Math.PI);
            crc2.moveTo(_x + 6.5, _y - 24);
            crc2.arc(_x + 6.5, _y - 24, 3.5, 0, 2 * Math.PI);
            crc2.moveTo(_x + 4.5, _y - 18);
            crc2.arc(_x + 4.5, _y - 18, 3.5, 0, 2 * Math.PI);
            crc2.fill();

            //Blütenkopf
            crc2.beginPath();
            crc2.fillStyle = _blueteFarbe;
            crc2.moveTo(_x + 1.25, _y - 22.5);
            crc2.arc(_x + 1.25, _y - 22.5, 3.5, 0, 2 * Math.PI);
            crc2.fill();
        }

        drawTulpe(): void {
            let _x: number = this.x;
            let _y: number  = this.y;
            let _blueteFarbe: string  = this.zufallFarbeBluete;
            //Blumenstengel
            crc2.beginPath();
            crc2.fillStyle = "#006e11";
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y - 18);
            crc2.lineTo(_x + 2.5, _y - 18);
            crc2.lineTo(_x + 2.5, _y);
            crc2.closePath();
            crc2.fill();

            //Blütenkopf
            crc2.beginPath();
            crc2.fillStyle = _blueteFarbe;
            crc2.moveTo(_x + 4, _y - 22);
            crc2.arc(_x + 1.25, _y - 22, 10, - 0.15 * Math.PI, 1.15 * Math.PI);
            crc2.lineTo(_x - 2.75, _y - 22);
            crc2.lineTo(_x + 1.25, _y - 28);
            crc2.fill();
        }    
        setRandomColor(): void {
            
            let blaetterFarbe: string[] = ["#cb0051", "#b628bf", "#28d2d4", "#ffd2d4", "#00bcec", "#ff4e00", "#ffa400", "#bcff00"];
            let blueteFarbe: string[] = ["#f1ffcb", "#ffc4aa", "#fff8c6", "#cefeff", "#ffd2d4", "#ffb8ea", "#fe7aa4", "#e9abff"];
            this.zufallFarbeBlatt = blaetterFarbe[Math.floor(Math.random() * blaetterFarbe.length)];
            this.zufallFarbeBluete = blueteFarbe[Math.floor(Math.random() * blueteFarbe.length)];
           
        }
        setRandomPositionStatic(): void {
                        let minX: number = 175;
                        let maxX: number = 320;
                        let minY: number = 150;
                        let maxY: number = 250;


                        this.x = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
                        this.y = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
        }
        setRandomPosition(): void {
                        let minX: number = 0;
                        let maxX: number = 175;
                        let minY: number = 166;
                        let maxY: number = 250;


                        this.x = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
                        this.y = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
        }

        
        
        
        
        
        
        
        drawRandomFlowers(): void {
            
            
            

                
            let zufallBlume: number = Math.floor((Math.random() * 2)) + 1;          
            // if für zufällige Blumensorte
            if (zufallBlume == 1) {
                this.setRandomColor();
                this.setRandomPosition();
                this.drawTulpe();
            } else {
                this.setRandomColor();
                this.setRandomPosition();
                this.drawBlume();
            }

            
            
            
          
        }

    
    }
}