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
    aufgabe7a.n = 11;
    let hintergrund;
    let blaetterFarbe = ["#cb0051", "#b628bf", "#28d2d4", "#ffd2d4", "#00bcec", "#ff4e00", "#ffa400", "#bcff00"];
    let blueteFarbe = ["#f1ffcb", "#ffc4aa", "#fff8c6", "#cefeff", "#ffd2d4", "#ffb8ea", "#fe7aa4", "#e9abff"];
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        aufgabe7a.crc2 = canvas.getContext("2d");
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
        let _x = 150;
        let _y = 100;
        aufgabe7a.crc2.beginPath();
        aufgabe7a.crc2.strokeStyle = "#88492c";
        aufgabe7a.crc2.moveTo(_x, _y);
        aufgabe7a.crc2.lineTo(_x, _y - 12);
        aufgabe7a.crc2.lineWidth = 2;
        aufgabe7a.crc2.stroke();
        aufgabe7a.crc2.beginPath();
        aufgabe7a.crc2.fillStyle = "#68c15d";
        aufgabe7a.crc2.strokeStyle = "#44803d";
        aufgabe7a.crc2.fillStyle = this.fluegelColor;
        aufgabe7a.crc2.moveTo(_x, _y - 9);
        aufgabe7a.crc2.bezierCurveTo(_x + 8, _y - 5, _x + 12, _y - 18.5, _x, _y - 9);
        aufgabe7a.crc2.lineWidth = 0.5;
        aufgabe7a.crc2.fill();
        //        Pfirsich
        var grd = aufgabe7a.crc2.createLinearGradient(_x, _y + 9, _x, _y - 6.5);
        grd.addColorStop(0, "red");
        grd.addColorStop(0.75, "orange");
        grd.addColorStop(1, "yellow");
        aufgabe7a.crc2.beginPath();
        aufgabe7a.crc2.fillStyle = grd;
        aufgabe7a.crc2.arc(_x - 1, _y, 6, 0, 2 * Math.PI);
        aufgabe7a.crc2.fill();
        //        crc2.beginPath();
        //        crc2.fillStyle = "#68c15d";
        //        crc2.arc(_x - 3, _y - 4, 5, 0, 2 * Math.PI);
        //        crc2.f        
        drawKorb(290, 210);
        //Hintergrund speichern
        hintergrund = aufgabe7a.crc2.getImageData(0, 0, canvas.width, canvas.height);
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
    // zufällige Blumen
    function createZufallsBlumen() {
        for (let i = 0; i < 15; i++) {
            //            let f: Flower = flowers[i];
            let f = new aufgabe7a.Flower();
            f.drawRandomFlowers();
        }
    }
    // feste Blumen
    function createFesteBlumen() {
        for (let i = 0; i < 5; i++) {
            let f = new aufgabe7a.Flower();
            flowers[i] = f;
            f.setRandomColor();
            f.drawStaticFlower();
        }
    }
    //10 Anfangsbienen
    function anfangsBienen() {
        for (let i = 0; i < aufgabe7a.n; i++) {
            let b = new aufgabe7a.Bee(300, 200);
            bees[i] = b;
            b.setRandomColor();
        }
    }
    // animate
    function animate() {
        aufgabe7a.crc2.putImageData(hintergrund, 0, 0);
        for (let i = 0; i < aufgabe7a.n; i++) {
            let b = bees[i];
            b.update();
        }
        window.setTimeout(animate, 20);
    }
    // zusätzliche Biene      
    function zusatzBiene(_event) {
        let b = new aufgabe7a.Bee(300, 200);
        b.setRandomColor();
        bees.push(b);
        console.log("Anzahl der Bienen = " + aufgabe7a.n);
        aufgabe7a.n++;
    }
    // Bienenkorb
    function drawKorb(_x, _y) {
        aufgabe7a.crc2.beginPath();
        aufgabe7a.crc2.fillStyle = "#955500";
        aufgabe7a.crc2.moveTo(_x - 15, _y + 10); //u links
        aufgabe7a.crc2.lineTo(_x + 40, _y + 10); // u rechts
        aufgabe7a.crc2.lineTo(_x + 40, _y - 30); //o rechts
        aufgabe7a.crc2.lineTo(_x - 15, _y - 30); //o links
        aufgabe7a.crc2.lineTo(_x - 15, _y + 10); //u links
        aufgabe7a.crc2.fill();
        // Strich zur Seitenwand
        aufgabe7a.crc2.beginPath();
        aufgabe7a.crc2.strokeStyle = "#000000";
        aufgabe7a.crc2.moveTo(_x + 40, _y - 30);
        aufgabe7a.crc2.lineTo(_x + 40, _y + 10); // u rechts
        aufgabe7a.crc2.stroke();
        // Seitenwand
        aufgabe7a.crc2.beginPath();
        aufgabe7a.crc2.fillStyle = "#844B00";
        aufgabe7a.crc2.moveTo(_x + 40, _y - 30); //o links
        aufgabe7a.crc2.lineTo(_x + 50, _y - 40); // o rechts
        aufgabe7a.crc2.lineTo(_x + 50, _y); //u rechts
        aufgabe7a.crc2.lineTo(_x + 40, _y + 10); //u links
        aufgabe7a.crc2.lineTo(_x + 40, _y - 30); //o links
        aufgabe7a.crc2.fill();
        //Schwrzer strich  unter dem Dach
        aufgabe7a.crc2.beginPath();
        aufgabe7a.crc2.strokeStyle = "#000000";
        aufgabe7a.crc2.moveTo(_x - 20, _y - 25); //u links
        aufgabe7a.crc2.lineTo(_x + 35, _y - 25); // u rechts
        aufgabe7a.crc2.lineTo(_x + 50, _y - 40); //o rechts
        aufgabe7a.crc2.stroke();
        // Dach
        aufgabe7a.crc2.beginPath();
        aufgabe7a.crc2.fillStyle = "#876D4A";
        aufgabe7a.crc2.moveTo(_x - 20, _y - 25); //u links
        aufgabe7a.crc2.lineTo(_x + 35, _y - 25); // u rechts
        aufgabe7a.crc2.lineTo(_x + 50, _y - 40); //o rechts
        aufgabe7a.crc2.lineTo(_x - 5, _y - 40); //o links
        aufgabe7a.crc2.lineTo(_x - 20, _y - 25); //u links
        aufgabe7a.crc2.fill();
        //Eingang
        aufgabe7a.crc2.beginPath();
        aufgabe7a.crc2.fillStyle = "#000000";
        aufgabe7a.crc2.arc(_x + 12, _y - 10, 10, 0, 2 * Math.PI);
        aufgabe7a.crc2.fill();
        //        
    }
})(aufgabe7a || (aufgabe7a = {}));
//# sourceMappingURL=main.js.map