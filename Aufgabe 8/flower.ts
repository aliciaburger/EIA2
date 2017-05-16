namespace aufgabe8 {

      
    export class Flower {
        x: number;
        y: number;
        zufallFarbeBlatt: string;
        zufallFarbeBluete: string;
        flowerType: string;

        

        drawBlume(): void {
            // Klasse Bluemchen- bluemchen.ts/ Tulpe- tulpe.ts
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
    }
}