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
var aufgabe7a;
(function (aufgabe7a) {
    window.addEventListener("load", init);
    let canvas;
    let bees = [];
    let flowers = [];
    aufgabe7a.n = 10;
    let hintergrund;
    let blaetterFarbe = ["#cb0051", "#b628bf", "#28d2d4", "#ffd2d4", "#00bcec", "#ff4e00", "#ffa400", "#bcff00"];
    let blueteFarbe = ["#f1ffcb", "#ffc4aa", "#fff8c6", "#cefeff", "#ffd2d4", "#ffb8ea", "#fe7aa4", "#e9abff"];
    //    let bienenFabe: string[] = ["#FFF700", "#FFD500", "#FFBC00", "#FFA600", "#FFD041", "#FFE041", "#FFFA41", "#EDFF41"];
    //    let fluegelFabe: string[] = ["#F8E1FF", "#FFE1FE", "#EBE1FF", "#E1E1FF", "#E1F2FF", "#E1FFFF", "#E1FFF7", "#E1FFE1"];
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        aufgabe7a.crc2 = canvas.getContext("2d");
        console.log(aufgabe7a.crc2);
        drawSky();
        drawMountain();
        drawGrass();
        drawSun();
        drawTree(50, 145);
        drawTree(110, 155);
        //        f.drawTulpe(240, 200, "#ffa400");
        //        drawBlume(290, 175, "#ff4e00", "#ffbfd4");
        //        drawBlume(315, 230, ", "#d5f3ee");
        //        drawZufallsBlu        
        for (let i = 0; i < 15; i++) {
            let f = new aufgabe7a.Flower(0, 0);
            console.log("zufallsblume");
            //            flowers[i] = f;
            f.drawRandomFlowers();
        }
        for (let i = 0; i < 5; i++) {
            let f = new aufgabe7a.Flower(200, 150);
            f.setRandomColor();
            f.drawStaticFlower();
            flowers.push(f);
        }
        //der Teil mit den Bienen funktioniert eigentlich das nichts dargestellt wird muss an bei
        //dem Teil mit den Blumen liegen. Das programm stoppt sobald new Flower erzeugt werden soll
        drawKorb(290, 210);
        hintergrund = aufgabe7a.crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log("alle fkt für Blumenwiese ausgeführt");
        //        biene();
        //Biene anfangsposition
        for (let i = 0; i < aufgabe7a.n; i++) {
            console.log(aufgabe7a.n);
            let b = new aufgabe7a.Bee(300, 200);
            bees[i] = b;
            b.setRandomColor();
        }
        console.log(bees);
        window.setTimeout(animate, 20);
        canvas.addEventListener("click", zusatzBiene);
        canvas.addEventListener("touch", zusatzBiene);
    }
    //FKT. Himmel malen
    function drawSky() {
        aufgabe7a.crc2.beginPath();
        aufgabe7a.crc2.fillStyle = "#91e7ff";
        aufgabe7a.crc2.rect(0, 0, canvas.width, canvas.height);
        aufgabe7a.crc2.fill();
    }
    //FKT. Berge malen
    function drawMountain() {
        aufgabe7a.crc2.beginPath();
        aufgabe7a.crc2.moveTo(-20, 125); //Wiese Startpunkt
        aufgabe7a.crc2.lineTo(44, 20);
        aufgabe7a.crc2.lineTo(84, 100);
        aufgabe7a.crc2.lineTo(120, 45);
        aufgabe7a.crc2.lineTo(140, 80);
        aufgabe7a.crc2.lineTo(185, 10);
        aufgabe7a.crc2.lineTo(260, 80);
        aufgabe7a.crc2.lineTo(280, 60);
        aufgabe7a.crc2.lineTo(300, 95);
        aufgabe7a.crc2.lineTo(335, 50);
        aufgabe7a.crc2.lineTo(350, 80);
        aufgabe7a.crc2.lineTo(350, 130);
        aufgabe7a.crc2.closePath();
        aufgabe7a.crc2.fillStyle = "#c8c8c8";
        aufgabe7a.crc2.fill();
    }
    //FKT. Gras malen
    function drawGrass() {
        aufgabe7a.crc2.beginPath();
        aufgabe7a.crc2.fillStyle = "#00aa24";
        aufgabe7a.crc2.rect(0, 125, 350, 250);
        aufgabe7a.crc2.fill();
    }
    //FKT. Sonne malen
    function drawSun() {
        aufgabe7a.crc2.beginPath();
        aufgabe7a.crc2.fillStyle = "#ffe527";
        aufgabe7a.crc2.arc(305, 27, 22, 0, 2 * Math.PI);
        aufgabe7a.crc2.fill();
    }
    //FKT. Baum malen
    function drawTree(_x, _y) {
        //Baumstamm
        aufgabe7a.crc2.beginPath();
        aufgabe7a.crc2.fillStyle = "#ab6909";
        aufgabe7a.crc2.moveTo(_x, _y);
        aufgabe7a.crc2.lineTo(_x, _y - 30);
        aufgabe7a.crc2.lineTo(_x + 5, _y - 30);
        aufgabe7a.crc2.lineTo(_x + 5, _y);
        aufgabe7a.crc2.closePath();
        aufgabe7a.crc2.fill();
        //Krone
        aufgabe7a.crc2.beginPath();
        aufgabe7a.crc2.fillStyle = "#006d0a";
        aufgabe7a.crc2.arc(_x, _y - 32, 8, 0, 2 * Math.PI);
        aufgabe7a.crc2.arc(_x - 5, _y - 40, 10, 0, 2 * Math.PI);
        aufgabe7a.crc2.arc(_x + 2, _y - 48, 11, 0, 2 * Math.PI);
        aufgabe7a.crc2.arc(_x + 8, _y - 39, 11, 0, 2 * Math.PI);
        aufgabe7a.crc2.fill();
    }
    // zufällige Blume mit zufälliger Farbe malen
    //Liste mit verschieden Farben für Blätter und Blüten
    // Schleife um 15 Blumen in Festgelegtem Bereich mit zufälligen X und Y Koordinaten zu malen
    //    function drawZufallsBlumen(): void {
    //        console.log("zufallsblume");
    //
    //        for (let i: number = 0; i < 15; i++) {
    //
    //            let f: Flower = new Flower(0, 0);
    //            f.drawRandomFlowers();
    //
    //
    //        }
    //    }
    function animate() {
        aufgabe7a.crc2.putImageData(hintergrund, 0, 0);
        for (let i = 0; i < aufgabe7a.n; i++) {
            let b = bees[i];
            b.update();
        }
        window.setTimeout(animate, 20);
    }
    //zusätzliche biene zeichnen     
    function zusatzBiene(_event) {
        //Zahlen dem Array hinzufügen
        //neue Biene bei Klick
        let b = new aufgabe7a.Bee(300, 200);
        b.setRandomColor();
        bees.push(b);
        //anzahl der Bienen um 1 erhöhen
        aufgabe7a.n++;
        console.log(aufgabe7a.n);
    }
    function drawKorb(_x, _y) {
        aufgabe7a.crc2.beginPath();
        aufgabe7a.crc2.fillStyle = "#955500";
        aufgabe7a.crc2.moveTo(_x, _y);
        aufgabe7a.crc2.lineTo(_x + 25, _y);
        aufgabe7a.crc2.lineTo(_x + 25, _y - 20);
        aufgabe7a.crc2.lineTo(_x, _y - 20);
        aufgabe7a.crc2.lineTo(_x, _y);
        aufgabe7a.crc2.fill();
        //Eingang
        aufgabe7a.crc2.beginPath();
        aufgabe7a.crc2.fillStyle = "#000000";
        aufgabe7a.crc2.arc(_x + 12, _y - 10, 5, 0, 2 * Math.PI);
        aufgabe7a.crc2.fill();
        //        
    }
})(aufgabe7a || (aufgabe7a = {}));
//# sourceMappingURL=main.js.map