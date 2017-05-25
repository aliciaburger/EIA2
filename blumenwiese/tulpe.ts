namespace aufgabe8 {

 
    export class Tulpe extends Flower {


        drawBlume(): void {
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














    }
}