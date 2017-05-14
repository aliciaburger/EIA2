/*
(Aufgabe 6)
Name: (Alicia Burger)
Matrikel: (254604)
Datum: (07.05.17)
    
Hiermit versichere ich, 
dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/




//  Anmerkung: 
//  Übersetzung zu js funktioniert wieder:)

//---------------------------------------
 
   

   


namespace aufgabe7 {
    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let bees: Bee[] = [];
    export let n: number = 10;
    let hintergrund: ImageData;



    let blaetterFarbe: string[] = ["#cb0051", "#b628bf", "#28d2d4", "#ffd2d4", "#00bcec", "#ff4e00", "#ffa400", "#bcff00"];
    let blueteFarbe: string[] = ["#f1ffcb", "#ffc4aa", "#fff8c6", "#cefeff", "#ffd2d4", "#ffb8ea", "#fe7aa4", "#e9abff"];
    //    let bienenFabe: string[] = ["#FFF700", "#FFD500", "#FFBC00", "#FFA600", "#FFD041", "#FFE041", "#FFFA41", "#EDFF41"];
    //    let fluegelFabe: string[] = ["#F8E1FF", "#FFE1FE", "#EBE1FF", "#E1E1FF", "#E1F2FF", "#E1FFFF", "#E1FFF7", "#E1FFE1"];

    


    function init(_event: Event): void {

        
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        drawSky();
        drawMountain();
        drawGrass();
        drawSun();
        drawTree(50, 145);
        drawTree(110, 155);
        drawTulpe(240, 200, "#ffa400");
        drawBlume(290, 175, "#ff4e00", "#ffbfd4");
        drawBlume(315, 230, "#cb0051", "#d5f3ee");
        drawZufallsBlumen();
        drawKorb(290, 210);
        hintergrund = crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log("alle fkt für Blumenwiese ausgeführt");
//        biene();
                //Biene anfangsposition
        for (let i: number = 0; i < n; i++) {
            console.log(n);
            let b: Bee = new Bee(300, 200);
            bees[i] = b;
            b.setRandomColor();
            console.log(n);


        }

        window.setTimeout(animate, 20);
        canvas.addEventListener("click", zusatzBiene);
        canvas.addEventListener("touch", zusatzBiene);

    }

    //FKT. Himmel malen
    function drawSky(): void {

        crc2.beginPath();
        crc2.fillStyle = "#91e7ff";
        crc2.rect(0, 0, canvas.width, canvas.height);
        crc2.fill();
    }
    //FKT. Berge malen
    function drawMountain(): void {

        crc2.beginPath();
        crc2.moveTo(-20, 125); //Wiese Startpunkt
        crc2.lineTo(44, 20);
        crc2.lineTo(84, 100);
        crc2.lineTo(120, 45);
        crc2.lineTo(140, 80);
        crc2.lineTo(185, 10);
        crc2.lineTo(260, 80);
        crc2.lineTo(280, 60);
        crc2.lineTo(300, 95);
        crc2.lineTo(335, 50);
        crc2.lineTo(350, 80);
        crc2.lineTo(350, 130);
        crc2.closePath();
        crc2.fillStyle = "#c8c8c8";
        crc2.fill();
    }
    //FKT. Gras malen
    function drawGrass(): void {

        crc2.beginPath();
        crc2.fillStyle = "#00aa24";
        crc2.rect(0, 125, 350, 250);
        crc2.fill();
    }
    //FKT. Sonne malen
    function drawSun(): void {

        crc2.beginPath();
        crc2.fillStyle = "#ffe527";
        crc2.arc(305, 27, 22, 0, 2 * Math.PI);
        crc2.fill();
    }

    //FKT. Baum malen
    function drawTree(_x: number, _y: number): void {

        //Baumstamm
        crc2.beginPath();
        crc2.fillStyle = "#ab6909";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 30);
        crc2.lineTo(_x + 5, _y - 30);
        crc2.lineTo(_x + 5, _y);
        crc2.closePath();
        crc2.fill();

        //Krone
        crc2.beginPath();
        crc2.fillStyle = "#006d0a";
        crc2.arc(_x, _y - 32, 8, 0, 2 * Math.PI);
        crc2.arc(_x - 5, _y - 40, 10, 0, 2 * Math.PI);
        crc2.arc(_x + 2, _y - 48, 11, 0, 2 * Math.PI);
        crc2.arc(_x + 8, _y - 39, 11, 0, 2 * Math.PI);
        crc2.fill();
    }
    //FKT. Tulpe malen
    function drawTulpe(_x: number, _y: number, _blueteFarbe: string): void {

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
    };
    //FKT. 5 Blättrige Blume mit Blütenkopf malen 
    function drawBlume(_x: number, _y: number, _blaetterFarbe: string, _blueteFarbe: string): void {

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
    // zufällige Blume mit zufälliger Farbe malen

    //Liste mit verschieden Farben für Blätter und Blüten



    // Schleife um 15 Blumen in Festgelegtem Bereich mit zufälligen X und Y Koordinaten zu malen
    function drawZufallsBlumen(): void {

        for (let i: number = 0; i < 15; i++) {

            let minX: number = 0;
            let maxX: number = 175;
            let minY: number = 166;
            let maxY: number = 250;
            let zufallZahlX: number = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
            let zufallZahlY: number = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
            let zufallFarbeBlatt: string = blaetterFarbe[Math.floor(Math.random() * blaetterFarbe.length)];
            let zufallFarbeBluete: string = blueteFarbe[Math.floor(Math.random() * blueteFarbe.length)];
            let zufallBlume: number = Math.floor((Math.random() * 2)) + 1;

            // if für zufällige Blumensorte
            if (zufallBlume == 1) {
                drawTulpe(zufallZahlX, zufallZahlY, zufallFarbeBlatt);
            } else {
                drawBlume(zufallZahlX, zufallZahlY, zufallFarbeBlatt, zufallFarbeBluete);
            }
        }
    }

    
    
    
    
    
    
//    
//     function init(_event: Event): void {
//        let canvas: HTMLCanvasElement;
//        canvas = document.getElementsByTagName("canvas")[0]; //das erste von der Liste von elements        
//        crc2 = canvas.getContext("2d");
//        crc2.fillRect(0, 0, canvas.width, canvas.height);
//
//
//        //Landschaft Aufrufe
//        drawSky();
//        drawMountain(300, 170, "#BDC3C7", "#BDC3C7");
//        drawLawn();
//        drawSun();
//        drawHive(65, 183);
//        drawTree(40, 275);
//        //        drawFlower(60, 260, "#196F3D", "#F8C471", "#FBFCFC");
//        //        drawTulip(100, 280, "#196F3D", "#CB4335");
//        drawRandomFlowers();
//        drawCloud(160, 90, "white"); //Wolke zeichnen
//
//        for (let i: number = 0; i < 5; i++) {
//            let f: Flower = new Flower(200, 200);
//            f.drawNectarFlower();
//            flowers.push(f);
//        }
//        console.log("Blumen-Array: " + flowers);
//
//        //Fertige Landschaft wird gespeichert
//        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
//
//
//        for (let i: number = 0; i < beeNumber; i++) {
//            let b: Bee = new Bee(65, 183);
//            bees[i] = b;
//            b.setRandomStyle();
//
//        }
//
//        window.setTimeout(animate, 20);
//        canvas.addEventListener("click", addBee); //Canvas lauscht auf Klick -> neue Biene
//
//    }
//
//
//    function animate(): void {
//        crc2.putImageData(imgData, 0, 0); //gespeichertes Bild verwenden
//
//        for (let i: number = 0; i < bees.length; i++) {
//            let b: Bee = bees[i];
//            b.update(); //Bienen erhalten neue Werte aus Schleife
//        }
//        window.setTimeout(animate, 20);
//    }
//
//
//    //neue Biene bei Klick
//    function addBee(): void {
//        let b: Bee = new Bee(65, 183);
//        b.setRandomStyle();
//        bees.push(b);
//        beeNumber++;
//}
//    
//    
    
    
    
    
    
    
    
    
    
    
    
    



//    //Überfunktion für Animation und bienenzeichnen
//    function biene(): void {
//
//        //Biene anfangsposition
//        for (let i: number = 0; i < n; i++) {
//            let b: Bee = new Bee(300, 200);
//            bees[i] = b;
//            b.setRandomColor();
//
//        }
//
//        window.setTimeout(animate, 20);
//        canvas.addEventListener("click", zusatzBiene);
//        canvas.addEventListener("touch", zusatzBiene);
//
//    }

    
    
   
    
    
    function animate(): void {
 
        
        crc2.putImageData(hintergrund, 0, 0);

        for (let i: number = 0; i < n; i++) {

            let b: Bee = bees[i];
            b.update();
        }

        window.setTimeout(animate, 20);
        

        //                    drawBees(bee.x, bee.y, bee.color, bee.fluegelColor);
    }

    //    window.setTimeout(animate, 20);
    //Eventlistener für zusätzliche biene bei click/touch auf canv
   

    //zusätzliche biene zeichnen     
    function zusatzBiene(_event: Event): void {

        //Zahlen dem Array hinzufügen
        //Bei allen hinzugefügten Bienen durch clicken, sollen Flügel und Körperfarbe gleich bleiben
        
                 //neue Biene bei Klick
   
        let b: Bee = new Bee(300, 200);
        b.setRandomColor();
        bees.push(b);
        //anzahl der Bienen um 1 erhöhen
        n++;
        
        console.log(n);
        
        


        
        

    }
    //10 Anfangsbienen zeichnen 
    //function drawBees(_x: number, _y: number, _color: string, _fluegelColor: string): void {
    //
    //    //        _fluegelColor = fluegelFabe[Math.floor(Math.random() * fluegelFabe.length)];
    //
    //    //Schwarzer Körper 
    //    crc2.beginPath();
    //    crc2.fillStyle = "#000000";
    //    crc2.arc(_x, _y, 3.5, 0.5 * Math.PI, 1.5 * Math.PI);
    //    crc2.lineTo(_x + 10, _y - 3.5);
    //    crc2.lineTo(_x + 10, _y + 3.5);
    //    crc2.lineTo(_x, _y + 3.5);
    //    crc2.moveTo(_x + 10, _y + 3.5);
    //    crc2.arc(_x + 10, _y, 3.5, 1.5 * Math.PI, 0.5 * Math.PI)
    //    crc2.moveTo(_x + 12, _y + 2);
    //    crc2.lineTo(_x + 15, _y);
    //    crc2.lineTo(_x + 12, _y - 2);
    //    crc2.fill();
    //
    //    //gelbe Streifen
    //    crc2.beginPath();
    //    //Achtung Flimmer,-Farbwechsler-bienen :D
    //    crc2.fillStyle = _color;
    //    //        crc2.fillStyle = "yellow";
    //    crc2.moveTo(_x, _y + 3);
    //    crc2.lineTo(_x + 2, _y + 3);
    //    crc2.lineTo(_x + 2, _y + 3);
    //    crc2.lineTo(_x + 2, _y - 3);
    //    crc2.lineTo(_x, _y - 3);
    //    crc2.lineTo(_x, _y + 3);
    //
    //    crc2.moveTo(_x + 4, _y + 3);
    //    crc2.lineTo(_x + 6, _y + 3);
    //    crc2.lineTo(_x + 6, _y + 3);
    //    crc2.lineTo(_x + 6, _y - 3);
    //    crc2.lineTo(_x + 4, _y - 3);
    //    crc2.lineTo(_x + 4, _y + 3);
    //
    //    crc2.moveTo(_x + 8, _y + 3);
    //    crc2.lineTo(_x + 10, _y + 3);
    //    crc2.lineTo(_x + 10, _y + 3);
    //    crc2.lineTo(_x + 10, _y - 3);
    //    crc2.lineTo(_x + 8, _y - 3);
    //    crc2.lineTo(_x + 8, _y + 3);
    //
    //    crc2.fill();
    //
    //    //Kopf
    //    crc2.beginPath();
    //    crc2.fillStyle = "#000000";
    //    crc2.arc(_x - 3, _y - 4, 5, 0, 2 * Math.PI);
    //    crc2.fill();
    //    //Fühler
    //    crc2.beginPath();
    //    crc2.fillStyle = "#000000";
    //    crc2.moveTo(_x - 5, _y - 7);
    //    crc2.lineTo(_x - 10, _y - 11);
    //    crc2.lineTo(_x - 10, _y - 10);
    //    crc2.lineTo(_x - 6, _y - 8);
    //    crc2.lineTo(_x - 5, _y - 7);
    //    crc2.fill();
    //
    //    crc2.beginPath();
    //    crc2.fillStyle = "#000000";
    //    crc2.moveTo(_x - 4, _y - 9);
    //    crc2.lineTo(_x - 9, _y - 13);
    //    crc2.lineTo(_x - 9, _y - 12);
    //    crc2.lineTo(_x - 5, _y - 10);
    //    crc2.lineTo(_x - 4, _y - 9);
    //    crc2.fill();
    //
    //
    //    //flügel links
    //    crc2.beginPath();
    //    //        crc2.fillStyle = "lightblue";
    //    crc2.fillStyle = _fluegelColor;
    //    crc2.moveTo(_x + 5, _y - 3.5);
    //    crc2.bezierCurveTo(_x - 3, _y - 15, _x + 12, _y - 15, _x + 5, _y - 3.5);
    //    crc2.stroke();
    //    crc2.stroke();
    //    crc2.fill();
    //    //flügel rechts
    //    crc2.beginPath();
    //    //        crc2.fillStyle = "lightblue";
    //    crc2.fillStyle = _fluegelColor;
    //    crc2.moveTo(_x + 6, _y - 3.5);
    //    crc2.bezierCurveTo(_x + 3, _y - 15, _x + 18, _y - 15, _x + 6, _y - 3.5);
    //    crc2.stroke();
    //    crc2.fill();
    //
    //}


    function drawKorb(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "#955500";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 25, _y);
        crc2.lineTo(_x + 25, _y - 20);
        crc2.lineTo(_x, _y - 20);
        crc2.lineTo(_x, _y);
        crc2.fill();


        //Eingang
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.arc(_x + 12, _y - 10, 5, 0, 2 * Math.PI);
        crc2.fill();
        //        
    }
}

