namespace aufgabe12 {


    export class baum {
        x: number;
        y: number;
        
        constructor(_x: number, _y: number) {


            this.x = _x;
            this.y = _y;
            console.log("constructor");
            this.draw();
        }
        draw(): void {
            let _x: number = this.x;
            let _y: number = this.y;
        
            crc2.beginPath();
            crc2.fillStyle = "#FFFFFF";
            crc2.arc(_x - 3, _y - 4, 5, 0, 2 * Math.PI);
            crc2.fill();
            console.log("draw");
        }
    }

}