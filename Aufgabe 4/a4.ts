/*
(Aufgabe 4)
Name: (Alicia Burger)
Matrikel: (254604)
Datum: (17.04.17)
    
Hiermit versichere ich, 
dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/
document.addEventListener('DOMContentLoaded', function() {

    let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
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
    };
    // zufällige Blume mit zufälliger Farbe malen
        
    //Liste mit verschieden Farben für Blätter und Blütenkopf
    
    var blaetterFarbe: string[] = ["#cb0051", "#b628bf", "#28d2d4", "#ffd2d4", "#00bcec", "#ff4e00", "#ffa400", "#bcff00"];
    var blueteFarbe: string[] = ["#f1ffcb", "#ffc4aa", "#fff8c6", "#cefeff", "#ffd2d4", "#ffb8ea", "#fe7aa4", "#e9abff"];

    // Schleife um 15 Blumen in Festgelegtem Bereich mit zufälligen X und Y Koordinaten zu malen
    for (var i: number = 0; i < 15; i++) {

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
});