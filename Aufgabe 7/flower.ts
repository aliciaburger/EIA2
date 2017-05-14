namespace aufgabe7a {

      
    export class Flower {
        x: number;
        y: number;
        zufallFarbeBlatt: string;
        zufallFarbeBluete: string;




        constructor(_x: number, _y: number) {
            console.log("Hey");
            //            this.setRandomStyle();
            //this.setRandomPosition();
           
            this.setRandomColor();
            this.x = _x;
            this.y = _y;
        }

       

        setRandomColor(): void {
            
            let blaetterFarbe: string[] = ["#cb0051", "#b628bf", "#28d2d4", "#ffd2d4", "#00bcec", "#ff4e00", "#ffa400", "#bcff00"];
            let blueteFarbe: string[] = ["#f1ffcb", "#ffc4aa", "#fff8c6", "#cefeff", "#ffd2d4", "#ffb8ea", "#fe7aa4", "#e9abff"];
            this.zufallFarbeBlatt = blaetterFarbe[Math.floor(Math.random() * blaetterFarbe.length)];
            this.zufallFarbeBluete = blueteFarbe[Math.floor(Math.random() * blueteFarbe.length)];
           
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
            
            
            
            for (let i: number = 0; i < 15; i++) {
                
            let zufallBlume: number = Math.floor((Math.random() * 2)) + 1;          
            // if für zufällige Blumensorte
            if (zufallBlume == 1) {
                this.setRandomColor();
                this.setRandomPosition();
//                drawTulpe();
            } else {
                this.setRandomColor();
//                this.setRandomPosition();
//                drawBlume();
            }
            }
            
            
            
          
        }

    
    }
}