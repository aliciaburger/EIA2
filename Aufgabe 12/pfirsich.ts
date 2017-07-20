namespace aufgabe12 {


    export class Pfirsich extends Bad {
        


        draw(): void {
            let _x: number = this.x;
            let _y: number = this.y;
            
         //Stengel
        crc2.beginPath();
        crc2.strokeStyle = "#88492c";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 12);
        crc2.lineWidth = 2;
        crc2.stroke();

        crc2.beginPath();
        crc2.fillStyle = "#68c15d";
        crc2.strokeStyle = "#44803d";
        crc2.fillStyle = this.fluegelColor;
        crc2.moveTo(_x, _y - 9);
        crc2.bezierCurveTo(_x + 8, _y - 5, _x + 12, _y - 18.5, _x, _y - 9);
        crc2.lineWidth = 0.5;
        crc2.fill();


        //        Pfirsich
        var grd = crc2.createLinearGradient(_x, _y+9,_x,_y -6.5);
        grd.addColorStop(0, "red");
        grd.addColorStop(0.75, "orange");
        grd.addColorStop(1, "yellow");
        
        
        crc2.beginPath();
        crc2.fillStyle = grd;
        crc2.arc(_x , _y, 6, 0, 2 * Math.PI);
        crc2.fill();

        }




    }

}

