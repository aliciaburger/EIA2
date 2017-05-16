namespace aufgabe8 {


    export class Bluemchen extends Flower {


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














    }
}