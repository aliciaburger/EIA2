namespace aufgabe7a {

    
      export class Bee {
        x: number;
        y: number;
        bienenColor: string;
        fluegelColor: string;


        constructor(_x: number, _y: number) {
            console.log("Constructor");

            this.x = _x;
            this.y = _y;
            this.setRandomColor();
//            this.update();
            
            
}
    
    
        update(): void {
            this.move();
            this.draw();
        }
            draw(): void {
            let _x: number = this.x;
            let _y: number = this.y;
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(this.x, _y, 3.5, 0.5 * Math.PI, 1.5 * Math.PI);
            crc2.lineTo(_x + 10, _y - 3.5);
            crc2.lineTo(_x + 10, _y + 3.5);
            crc2.lineTo(_x, _y + 3.5);
            crc2.moveTo(_x + 10, _y + 3.5);
            crc2.arc(_x + 10, _y, 3.5, 1.5 * Math.PI, 0.5 * Math.PI);
            crc2.moveTo(_x + 12, _y + 2);
            crc2.lineTo(_x + 15, _y);
            crc2.lineTo(_x + 12, _y - 2);
            crc2.fill();

            //gelbe Streifen
            crc2.beginPath();
            //Achtung Flimmer,-Farbwechsler-bienen :D
            crc2.fillStyle = this.bienenColor;
            //        crc2.fillStyle = "yellow";
            crc2.moveTo(_x, _y + 3);
            crc2.lineTo(_x + 2, _y + 3);
            crc2.lineTo(_x + 2, _y + 3);
            crc2.lineTo(_x + 2, _y - 3);
            crc2.lineTo(_x, _y - 3);
            crc2.lineTo(_x, _y + 3);

            crc2.moveTo(_x + 4, _y + 3);
            crc2.lineTo(_x + 6, _y + 3);
            crc2.lineTo(_x + 6, _y + 3);
            crc2.lineTo(_x + 6, _y - 3);
            crc2.lineTo(_x + 4, _y - 3);
            crc2.lineTo(_x + 4, _y + 3);

            crc2.moveTo(_x + 8, _y + 3);
            crc2.lineTo(_x + 10, _y + 3);
            crc2.lineTo(_x + 10, _y + 3);
            crc2.lineTo(_x + 10, _y - 3);
            crc2.lineTo(_x + 8, _y - 3);
            crc2.lineTo(_x + 8, _y + 3);

            crc2.fill();

            //Kopf
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(_x - 3, _y - 4, 5, 0, 2 * Math.PI);
            crc2.fill();
            //Fühler
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.moveTo(_x - 5, _y - 7);
            crc2.lineTo(_x - 10, _y - 11);
            crc2.lineTo(_x - 10, _y - 10);
            crc2.lineTo(_x - 6, _y - 8);
            crc2.lineTo(_x - 5, _y - 7);
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.moveTo(_x - 4, _y - 9);
            crc2.lineTo(_x - 9, _y - 13);
            crc2.lineTo(_x - 9, _y - 12);
            crc2.lineTo(_x - 5, _y - 10);
            crc2.lineTo(_x - 4, _y - 9);
            crc2.fill();


            //flügel links
            crc2.beginPath();
            //        crc2.fillStyle = "lightblue";
            crc2.fillStyle = this.fluegelColor;
            crc2.moveTo(_x + 5, _y - 3.5);
            crc2.bezierCurveTo(_x - 3, _y - 15, _x + 12, _y - 15, _x + 5, _y - 3.5);
            crc2.stroke();
            crc2.stroke();
            crc2.fill();
            //flügel rechts
            crc2.beginPath();
            //        crc2.fillStyle = "lightblue";
            crc2.fillStyle = this.fluegelColor;
            crc2.moveTo(_x + 6, _y - 3.5);
            crc2.bezierCurveTo(_x + 3, _y - 15, _x + 18, _y - 15, _x + 6, _y - 3.5);
            crc2.stroke();
            crc2.fill();
        }



       



        move(): void {
            //crc2.putImageData(hintergrund, 0, 0);


            this.x += Math.random() * (- 2);
            this.y += Math.random() * 10 - 5;



            //if-Abfragen um die Bienen beim erreichen eines Bildrandes auf der anderen Seite wieder erscheinen zu lassen




            
            if (this.x > crc2.canvas.width) {
                this.x = 0;
            }
            if (this.y > crc2.canvas.height) {
                this.y = 0;
            }
            if (this.y < 0) {
                this.y = crc2.canvas.width;
            }
            
            if (this.y < 0) {
                this.y = crc2.canvas.height;
            }

        }
          
           setRandomColor(): void {
            let bienenFabe: string[] = ["#FFF700", "#FFD500", "#FFBC00", "#FFA600", "#FFD041", "#FFE041", "#FFFA41", "#EDFF41"];
            let fluegelFabe: string[] = ["#F8E1FF", "#FFE1FE", "#EBE1FF", "#E1E1FF", "#E1F2FF", "#E1FFFF", "#E1FFF7", "#E1FFE1"];
            this.bienenColor = bienenFabe[Math.floor(Math.random() * bienenFabe.length)];
            this.fluegelColor = fluegelFabe[Math.floor(Math.random() * fluegelFabe.length)];
        }
         





//        draw(): void {
//            let _x: number = this.x;
//            let _y: number = this.y;
//            crc2.beginPath();
//            crc2.fillStyle = "#000000";
//            crc2.arc(this.x, _y, 3.5, 0.5 * Math.PI, 1.5 * Math.PI);
//            crc2.lineTo(_x + 10, _y - 3.5);
//            crc2.lineTo(_x + 10, _y + 3.5);
//            crc2.lineTo(_x, _y + 3.5);
//            crc2.moveTo(_x + 10, _y + 3.5);
//            crc2.arc(_x + 10, _y, 3.5, 1.5 * Math.PI, 0.5 * Math.PI);
//            crc2.moveTo(_x + 12, _y + 2);
//            crc2.lineTo(_x + 15, _y);
//            crc2.lineTo(_x + 12, _y - 2);
//            crc2.fill();
//
//            //gelbe Streifen
//            crc2.beginPath();
//            //Achtung Flimmer,-Farbwechsler-bienen :D
//            crc2.fillStyle = this.bienenColor;
//            //        crc2.fillStyle = "yellow";
//            crc2.moveTo(_x, _y + 3);
//            crc2.lineTo(_x + 2, _y + 3);
//            crc2.lineTo(_x + 2, _y + 3);
//            crc2.lineTo(_x + 2, _y - 3);
//            crc2.lineTo(_x, _y - 3);
//            crc2.lineTo(_x, _y + 3);
//
//            crc2.moveTo(_x + 4, _y + 3);
//            crc2.lineTo(_x + 6, _y + 3);
//            crc2.lineTo(_x + 6, _y + 3);
//            crc2.lineTo(_x + 6, _y - 3);
//            crc2.lineTo(_x + 4, _y - 3);
//            crc2.lineTo(_x + 4, _y + 3);
//
//            crc2.moveTo(_x + 8, _y + 3);
//            crc2.lineTo(_x + 10, _y + 3);
//            crc2.lineTo(_x + 10, _y + 3);
//            crc2.lineTo(_x + 10, _y - 3);
//            crc2.lineTo(_x + 8, _y - 3);
//            crc2.lineTo(_x + 8, _y + 3);
//
//            crc2.fill();
//
//            //Kopf
//            crc2.beginPath();
//            crc2.fillStyle = "#000000";
//            crc2.arc(_x - 3, _y - 4, 5, 0, 2 * Math.PI);
//            crc2.fill();
//            //Fühler
//            crc2.beginPath();
//            crc2.fillStyle = "#000000";
//            crc2.moveTo(_x - 5, _y - 7);
//            crc2.lineTo(_x - 10, _y - 11);
//            crc2.lineTo(_x - 10, _y - 10);
//            crc2.lineTo(_x - 6, _y - 8);
//            crc2.lineTo(_x - 5, _y - 7);
//            crc2.fill();
//
//            crc2.beginPath();
//            crc2.fillStyle = "#000000";
//            crc2.moveTo(_x - 4, _y - 9);
//            crc2.lineTo(_x - 9, _y - 13);
//            crc2.lineTo(_x - 9, _y - 12);
//            crc2.lineTo(_x - 5, _y - 10);
//            crc2.lineTo(_x - 4, _y - 9);
//            crc2.fill();
//
//
//            //flügel links
//            crc2.beginPath();
//            //        crc2.fillStyle = "lightblue";
//            crc2.fillStyle = this.fluegelColor;
//            crc2.moveTo(_x + 5, _y - 3.5);
//            crc2.bezierCurveTo(_x - 3, _y - 15, _x + 12, _y - 15, _x + 5, _y - 3.5);
//            crc2.stroke();
//            crc2.stroke();
//            crc2.fill();
//            //flügel rechts
//            crc2.beginPath();
//            //        crc2.fillStyle = "lightblue";
//            crc2.fillStyle = this.fluegelColor;
//            crc2.moveTo(_x + 6, _y - 3.5);
//            crc2.bezierCurveTo(_x + 3, _y - 15, _x + 18, _y - 15, _x + 6, _y - 3.5);
//            crc2.stroke();
//            crc2.fill();
//        }





    }


    //pushZusatzBiene() 
















//
//
//
//    //Überfunktion für Animation und bienenzeichnen
//    function biene(): void {
//
//
//
//        //Biene anfangsposition
//        for (let i: number = 0; i < n; i++) {
//            let bee: Bees = { x: 0, y: 0, color: "", fluegelColor: "" }
//
//            bee.x = 300;
//            bee.y = 200;
//
//            bee.color = bienenFabe[Math.floor(Math.random() * bienenFabe.length)];
//
//
//
//
//            bees[i] = bee;
//        }
//
//
//        window.setTimeout(animate, 20);
//    }
//
//    function animate(): void {
//
//        crc2.putImageData(hintergrund, 0, 0);
//
//        for (let i: number = 0; i < n; i++) {
//
//            let bee: Bees = bees[i];
//            bee.x += Math.random() * (- 2);
//            bee.y += Math.random() * 10 - 5;
//
//
//
//            //if-Abfragen um die Bienen beim erreichen eines Bildrandes auf der anderen Seite wieder erscheinen zu lassen
//
//
//            if (bee.x >= 350) {
//                bee.x = 0;
//            }
//            if (bee.y <= 0) {
//                bee.y = 320;
//            }
//            if (bee.x < 0) {
//                bee.x = 350;
//            }
//            if (bee.y > 250) {
//                bee.y = 0;
//            }
//
//
//            drawBees(bee.x, bee.y, bee.color, bee.fluegelColor);
//        }
//
//        window.setTimeout(animate, 20);
//        //Eventlistener für zusätzliche biene bei click/touch auf canvas
//        canvas.addEventListener("click", zusatzBiene);
//        canvas.addEventListener("touch", zusatzBiene);
//    }
//    //zusätzliche biene zeichnen     
////    function zusatzBiene(_event: Event): void {
////
////        //Zahlen dem Array hinzufügen
////        //Bei allen hinzugefügten Bienen durch clicken, sollen Flügel und Körperfarbe gleich bleiben
////        bees.push({ x: 300, y: 200, color: "#FFDB1F", fluegelColor: "72F7FF" });
////        //anzahl der Bienen um 1 erhöhen
////        n++;
////
////        console.log(n);
////    }
//    //10 Anfangsbienen zeichnen 
//    function drawBees(_x: number, _y: number, _color: string, _fluegelColor: string): void {
//
//        //        _fluegelColor = fluegelFabe[Math.floor(Math.random() * fluegelFabe.length)];
//
//        //Schwarzer Körper 
//        crc2.beginPath();
//        crc2.fillStyle = "#000000";
//        crc2.arc(_x, _y, 3.5, 0.5 * Math.PI, 1.5 * Math.PI);
//        crc2.lineTo(_x + 10, _y - 3.5);
//        crc2.lineTo(_x + 10, _y + 3.5);
//        crc2.lineTo(_x, _y + 3.5);
//        crc2.moveTo(_x + 10, _y + 3.5);
//        crc2.arc(_x + 10, _y, 3.5, 1.5 * Math.PI, 0.5 * Math.PI)
//        crc2.moveTo(_x + 12, _y + 2);
//        crc2.lineTo(_x + 15, _y);
//        crc2.lineTo(_x + 12, _y - 2);
//        crc2.fill();
//
//        //gelbe Streifen
//        crc2.beginPath();
//        //Achtung Flimmer,-Farbwechsler-bienen :D
//        crc2.fillStyle = _color;
//        //        crc2.fillStyle = "yellow";
//        crc2.moveTo(_x, _y + 3);
//        crc2.lineTo(_x + 2, _y + 3);
//        crc2.lineTo(_x + 2, _y + 3);
//        crc2.lineTo(_x + 2, _y - 3);
//        crc2.lineTo(_x, _y - 3);
//        crc2.lineTo(_x, _y + 3);
//
//        crc2.moveTo(_x + 4, _y + 3);
//        crc2.lineTo(_x + 6, _y + 3);
//        crc2.lineTo(_x + 6, _y + 3);
//        crc2.lineTo(_x + 6, _y - 3);
//        crc2.lineTo(_x + 4, _y - 3);
//        crc2.lineTo(_x + 4, _y + 3);
//
//        crc2.moveTo(_x + 8, _y + 3);
//        crc2.lineTo(_x + 10, _y + 3);
//        crc2.lineTo(_x + 10, _y + 3);
//        crc2.lineTo(_x + 10, _y - 3);
//        crc2.lineTo(_x + 8, _y - 3);
//        crc2.lineTo(_x + 8, _y + 3);
//
//        crc2.fill();
//
//        //Kopf
//        crc2.beginPath();
//        crc2.fillStyle = "#000000";
//        crc2.arc(_x - 3, _y - 4, 5, 0, 2 * Math.PI);
//        crc2.fill();
//        //Fühler
//        crc2.beginPath();
//        crc2.fillStyle = "#000000";
//        crc2.moveTo(_x - 5, _y - 7);
//        crc2.lineTo(_x - 10, _y - 11);
//        crc2.lineTo(_x - 10, _y - 10);
//        crc2.lineTo(_x - 6, _y - 8);
//        crc2.lineTo(_x - 5, _y - 7);
//        crc2.fill();
//
//        crc2.beginPath();
//        crc2.fillStyle = "#000000";
//        crc2.moveTo(_x - 4, _y - 9);
//        crc2.lineTo(_x - 9, _y - 13);
//        crc2.lineTo(_x - 9, _y - 12);
//        crc2.lineTo(_x - 5, _y - 10);
//        crc2.lineTo(_x - 4, _y - 9);
//        crc2.fill();
//
//
//        //flügel links
//        crc2.beginPath();
//        //        crc2.fillStyle = "lightblue";
//        crc2.fillStyle = _fluegelColor;
//        crc2.moveTo(_x + 5, _y - 3.5);
//        crc2.bezierCurveTo(_x - 3, _y - 15, _x + 12, _y - 15, _x + 5, _y - 3.5);
//        crc2.stroke();
//        crc2.stroke();
//        crc2.fill();
//        //flügel rechts
//        crc2.beginPath();
//        //        crc2.fillStyle = "lightblue";
//        crc2.fillStyle = _fluegelColor;
//        crc2.moveTo(_x + 6, _y - 3.5);
//        crc2.bezierCurveTo(_x + 3, _y - 15, _x + 18, _y - 15, _x + 6, _y - 3.5);
//        crc2.stroke();
//        crc2.fill();
//
//    }



















}


