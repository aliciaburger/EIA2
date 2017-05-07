/*
(Aufgabe 4)
Name: (Alicia Burger)
Matrikel: (254604)
Datum: (17.04.17)
    
Hiermit versichere ich, 
dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/

//---------------------------------------



namespace aufgabe4 {
    window.addEventListener("load", init);

    let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;


    let blaetterFarbe: string[] = ["#cb0051", "#b628bf", "#28d2d4", "#ffd2d4", "#00bcec", "#ff4e00", "#ffa400", "#bcff00"];
    let blueteFarbe: string[] = ["#f1ffcb", "#ffc4aa", "#fff8c6", "#cefeff", "#ffd2d4", "#ffb8ea", "#fe7aa4", "#e9abff"];

    interface Bees {
        x: number;
        y: number;

    }


    let bees: Bees[] = [];

    let n: number = 10;
    let hintergrund: ImageData;


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
        biene();

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




    //Überfunktion für Animation und bienenzeichnen
    function biene(): void {



        //Biene anfangsposition
        for (let i: number = 0; i < n; i++) {
            let bee: Bees = { x: 0, y: 0, }

            bee.x = 300;
            bee.y = 200;
            
            bees[i] = bee;
        }

        window.setTimeout(animate, 20);
    }

    function animate(): void {

        crc2.putImageData(hintergrund, 0, 0);

        for (let i: number = 0; i < n; i++) {

            let bee: Bees = bees[i];
            bee.x += Math.random() * (- 2);
            bee.y += Math.random() * 10 - 5;
            


            //if-Abfragen um die Bienen beim erreichen eines Bildrandes auf der anderen Seite wieder erscheinen zu lassen


            if (bee.x >= 350) {
                bee.x = 0;
            }
            if (bee.y <= 0) {
                bee.y = 320;
            }
            if (bee.x < 0) {
                bee.x = 350;
            }
            if (bee.y > 250) {
                bee.y = 0;
            }
            
            drawBees(bee.x, bee.y);
        }

        window.setTimeout(animate, 20);
        //Eventlistener für zusätzliche biene bei click/touch auf canvas
        canvas.addEventListener("click", zusatzBiene);
        canvas.addEventListener("touch", zusatzBiene);
    }
    //zusätzliche biene zeichnen     
    function zusatzBiene(_event: Event): void {
        //Zahlen dem Array hinzufügen
        bees.push({ x: 300, y: 200 });
        //anzahl der Bienen um 1 erhöhen
        n++;

        console.log(n);
    }
    //10 Anfangsbienen zeichnen 
    function drawBees(_x: number, _y: number): void {
        //Schwarzer Körper 
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.arc(_x, _y, 3.5, 0.5 * Math.PI, 1.5 * Math.PI);
        crc2.lineTo(_x + 10, _y - 3.5);
        crc2.lineTo(_x + 10, _y + 3.5);
        crc2.lineTo(_x, _y + 3.5);
        crc2.moveTo(_x + 10, _y + 3.5);
        crc2.arc(_x + 10, _y, 3.5, 1.5 * Math.PI, 0.5 * Math.PI)
        crc2.moveTo(_x + 12, _y + 2);
        crc2.lineTo(_x + 15, _y);
        crc2.lineTo(_x + 12, _y - 2);
        crc2.fill();

        //gelbe Streifen
        crc2.beginPath();
        crc2.fillStyle = "yellow";
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
        crc2.fillStyle = "lightblue";
        crc2.moveTo(_x + 5, _y - 3.5);
        crc2.bezierCurveTo(_x - 3, _y - 15, _x + 12, _y - 15, _x + 5, _y - 3.5);
        crc2.stroke();
        crc2.stroke();
        crc2.fill();
        //flügel rechts
        crc2.beginPath();
        crc2.fillStyle = "lightblue";
        crc2.moveTo(_x + 6, _y - 3.5);
        crc2.bezierCurveTo(_x + 3, _y - 15, _x + 18, _y - 15, _x + 6, _y - 3.5);
        crc2.stroke();
        crc2.fill();

    }


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

