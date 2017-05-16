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
var aufgabe8;
(function (aufgabe8) {
    window.addEventListener("load", init);
    let canvas;
    let bees = [];
    let flowers = [];
    aufgabe8.n = 11;
    let hintergrund;
    let blaetterFarbe = ["#cb0051", "#b628bf", "#28d2d4", "#ffd2d4", "#00bcec", "#ff4e00", "#ffa400", "#bcff00"];
    let blueteFarbe = ["#f1ffcb", "#ffc4aa", "#fff8c6", "#cefeff", "#ffd2d4", "#ffb8ea", "#fe7aa4", "#e9abff"];
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        aufgabe8.crc2 = canvas.getContext("2d");
        drawFlowerField();
        createBees();
    }
    function drawFlowerField() {
        drawSky();
        drawMountain();
        drawGrass();
        drawSun();
        drawTree(50, 145);
        drawTree(110, 155);
        createZufallsBlumen();
        createFesteBlumen();
        drawKorb(290, 210);
        //Hintergrund speichern
        hintergrund = aufgabe8.crc2.getImageData(0, 0, canvas.width, canvas.height);
    }
    // Zusammenfassende FKT. für Bienen erstellen
    function createBees() {
        anfangsBienen();
        window.setTimeout(animate, 20);
        //bei click/touch neue Biene erzeugen
        canvas.addEventListener("click", zusatzBiene);
        canvas.addEventListener("touch", zusatzBiene);
        // Ausgabe der Arrays in der Konsole
        console.log("bees:" + bees);
        console.log("flowers:" + flowers);
    }
    //FKT. Himmel malen
    function drawSky() {
        aufgabe8.crc2.beginPath();
        aufgabe8.crc2.fillStyle = "#91e7ff";
        aufgabe8.crc2.rect(0, 0, canvas.width, canvas.height);
        aufgabe8.crc2.fill();
    }
    //FKT. Berge malen
    function drawMountain() {
        aufgabe8.crc2.beginPath();
        aufgabe8.crc2.moveTo(-20, 125); //Wiese Startpunkt
        aufgabe8.crc2.lineTo(44, 20);
        aufgabe8.crc2.lineTo(84, 100);
        aufgabe8.crc2.lineTo(120, 45);
        aufgabe8.crc2.lineTo(140, 80);
        aufgabe8.crc2.lineTo(185, 10);
        aufgabe8.crc2.lineTo(260, 80);
        aufgabe8.crc2.lineTo(280, 60);
        aufgabe8.crc2.lineTo(300, 95);
        aufgabe8.crc2.lineTo(335, 50);
        aufgabe8.crc2.lineTo(350, 80);
        aufgabe8.crc2.lineTo(350, 130);
        aufgabe8.crc2.closePath();
        aufgabe8.crc2.fillStyle = "#c8c8c8";
        aufgabe8.crc2.fill();
    }
    //FKT. Gras malen
    function drawGrass() {
        aufgabe8.crc2.beginPath();
        aufgabe8.crc2.fillStyle = "#00aa24";
        aufgabe8.crc2.rect(0, 125, 350, 250);
        aufgabe8.crc2.fill();
    }
    //FKT. Sonne malen
    function drawSun() {
        aufgabe8.crc2.beginPath();
        aufgabe8.crc2.fillStyle = "#ffe527";
        aufgabe8.crc2.arc(305, 27, 22, 0, 2 * Math.PI);
        aufgabe8.crc2.fill();
    }
    //FKT. Baum malen
    function drawTree(_x, _y) {
        //Baumstamm
        aufgabe8.crc2.beginPath();
        aufgabe8.crc2.fillStyle = "#ab6909";
        aufgabe8.crc2.moveTo(_x, _y);
        aufgabe8.crc2.lineTo(_x, _y - 30);
        aufgabe8.crc2.lineTo(_x + 5, _y - 30);
        aufgabe8.crc2.lineTo(_x + 5, _y);
        aufgabe8.crc2.closePath();
        aufgabe8.crc2.fill();
        //Krone
        aufgabe8.crc2.beginPath();
        aufgabe8.crc2.fillStyle = "#006d0a";
        aufgabe8.crc2.arc(_x, _y - 32, 8, 0, 2 * Math.PI);
        aufgabe8.crc2.arc(_x - 5, _y - 40, 10, 0, 2 * Math.PI);
        aufgabe8.crc2.arc(_x + 2, _y - 48, 11, 0, 2 * Math.PI);
        aufgabe8.crc2.arc(_x + 8, _y - 39, 11, 0, 2 * Math.PI);
        aufgabe8.crc2.fill();
    }
    // zufällige Blumen
    function createZufallsBlumen() {
        for (let i = 0; i < 15; i++) {
            //            let f: Flower = flowers[i];
            let f = new aufgabe8.Flower();
            f.drawRandomFlowers();
        }
    }
    // feste Blumen
    function createFesteBlumen() {
        for (let i = 0; i < 5; i++) {
            let f = new aufgabe8.Flower();
            flowers[i] = f;
            f.setRandomColor();
            f.drawStaticFlower();
        }
    }
    //10 Anfangsbienen
    function anfangsBienen() {
        for (let i = 0; i < aufgabe8.n; i++) {
            let b = new aufgabe8.Bee(300, 200);
            bees[i] = b;
            b.setRandomColor();
        }
    }
    // animate
    function animate() {
        aufgabe8.crc2.putImageData(hintergrund, 0, 0);
        for (let i = 0; i < aufgabe8.n; i++) {
            let b = bees[i];
            b.update();
        }
        window.setTimeout(animate, 20);
    }
    // zusätzliche Biene      
    function zusatzBiene(_event) {
        let b = new aufgabe8.Bee(300, 200);
        b.setRandomColor();
        bees.push(b);
        console.log("Anzahl der Bienen = " + aufgabe8.n);
        aufgabe8.n++;
    }
    // Bienenkorb
    function drawKorb(_x, _y) {
        aufgabe8.crc2.beginPath();
        aufgabe8.crc2.fillStyle = "#955500";
        aufgabe8.crc2.moveTo(_x - 15, _y + 10); //u links
        aufgabe8.crc2.lineTo(_x + 40, _y + 10); // u rechts
        aufgabe8.crc2.lineTo(_x + 40, _y - 30); //o rechts
        aufgabe8.crc2.lineTo(_x - 15, _y - 30); //o links
        aufgabe8.crc2.lineTo(_x - 15, _y + 10); //u links
        aufgabe8.crc2.fill();
        // Strich zur Seitenwand
        aufgabe8.crc2.beginPath();
        aufgabe8.crc2.strokeStyle = "#000000";
        aufgabe8.crc2.moveTo(_x + 40, _y - 30);
        aufgabe8.crc2.lineTo(_x + 40, _y + 10); // u rechts
        aufgabe8.crc2.stroke();
        // Seitenwand
        aufgabe8.crc2.beginPath();
        aufgabe8.crc2.fillStyle = "#844B00";
        aufgabe8.crc2.moveTo(_x + 40, _y - 30); //o links
        aufgabe8.crc2.lineTo(_x + 50, _y - 40); // o rechts
        aufgabe8.crc2.lineTo(_x + 50, _y); //u rechts
        aufgabe8.crc2.lineTo(_x + 40, _y + 10); //u links
        aufgabe8.crc2.lineTo(_x + 40, _y - 30); //o links
        aufgabe8.crc2.fill();
        //Schwrzer strich  unter dem Dach
        aufgabe8.crc2.beginPath();
        aufgabe8.crc2.strokeStyle = "#000000";
        aufgabe8.crc2.moveTo(_x - 20, _y - 25); //u links
        aufgabe8.crc2.lineTo(_x + 35, _y - 25); // u rechts
        aufgabe8.crc2.lineTo(_x + 50, _y - 40); //o rechts
        aufgabe8.crc2.stroke();
        // Dach
        aufgabe8.crc2.beginPath();
        aufgabe8.crc2.fillStyle = "#876D4A";
        aufgabe8.crc2.moveTo(_x - 20, _y - 25); //u links
        aufgabe8.crc2.lineTo(_x + 35, _y - 25); // u rechts
        aufgabe8.crc2.lineTo(_x + 50, _y - 40); //o rechts
        aufgabe8.crc2.lineTo(_x - 5, _y - 40); //o links
        aufgabe8.crc2.lineTo(_x - 20, _y - 25); //u links
        aufgabe8.crc2.fill();
        //Eingang
        aufgabe8.crc2.beginPath();
        aufgabe8.crc2.fillStyle = "#000000";
        aufgabe8.crc2.arc(_x + 12, _y - 10, 10, 0, 2 * Math.PI);
        aufgabe8.crc2.fill();
        //        
    }
})(aufgabe8 || (aufgabe8 = {}));
//# sourceMappingURL=main.js.map