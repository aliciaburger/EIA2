namespace aufgabe8 {

 
    export class Honeybee extends Bee {
         hfx: number;
         hfy: number;
         
//         constructor(_x: number, _y: number) {
//            super(_x, _y);
//           
//            
//            this.askHoneyflower();
//             
//         }
         move(): void {
           
             
            let xDiff: number = this.hfx - this.x; 
            let yDiff: number = this.hfy - this.y; 


            this.x += xDiff * 0.03;
            this.y += yDiff * 0.03;

            
//             console.log("position honigbiene x: " + this.x + " y: " + this.y);
         }

            askHoneyflower(): void {
                
                let i: number = Math.floor(Math.random() * flowers.length);
                
                for (let j: number = 0; j > flowers.length; j++) {
                    if (flowers[i].blumenstatus == true) {
                        break;
                    }
                    else {
                        i = Math.floor(Math.random() * flowers.length);
                    }
                    
                }    
                this.hfx = flowers[i].x;
                this.hfy = flowers[i].y - 24;
                flowers[i].blumenstatus = false;
            
                
                
                //            this.x = flowers[i].x;
                //            this.y = flowers[i].y;
                console.log("zufällige honeyflower an position:  x:" + this.hfx + " y: " + this.hfy);
            }

    }
}