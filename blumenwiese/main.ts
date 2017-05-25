/*
(Aufgabe 6)
Name: (Alicia Burger)
Matrikel: (254604) 
Datum: (07.05.17)
    
Hiermit versichere ich, 
dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/



//---------------------------------------

namespace aufgabe8 {
    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    export let bees: Bee[] = [];
    export let honeybees: Honeybee[] = [];
    export let flowers: Flower[] = [];
    export let fBlumen: number = 10;
    export let n: number = 10;
//    export let hfx: number;
//    export let hfy: number;
    //    let beetype: number;

    let hintergrund: ImageData;
    let blaetterFarbe: string[] = ["#cb0051", "#b628bf", "#28d2d4", "#ffd2d4", "#00bcec", "#ff4e00", "#ffa400", "#bcff00"];
    let blueteFarbe: string[] = ["#f1ffcb", "#ffc4aa", "#fff8c6", "#cefeff", "#ffd2d4", "#ffb8ea", "#fe7aa4", "#e9abff"];

    function init(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawFlowerField();
        createBees();

        //bei click/touch neue Biene erzeugen
        canvas.addEventListener("click", zusatzBiene);
        canvas.addEventListener("touch", zusatzBiene);
        // Ausgabe der Arrays in der Konsole
        console.log("bees:" + bees);
        console.log("flowers:" + flowers);
        window.setTimeout(animate, 20);

        console.log(bees);
        console.log(bees.length);
    }

    function drawFlowerField(): void {
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
        hintergrund = crc2.getImageData(0, 0, canvas.width, canvas.height);




    }
    // Zusammenfassende FKT. für Bienen erstellen
    function createBees(): void {
        anfangsBienen();
        createHoneybees();

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
    // zufällige Blumen
    function createZufallsBlumen(): void {

        for (let i: number = 0; i < 15; i++) {

            let zufallBlume: number = Math.floor((Math.random() * 2)) + 1;
            // if für zufällige Blumensorte
            if (zufallBlume == 1) {

                let f: Bluemchen = new Bluemchen();
                f.setRandomColor();
                f.setRandomPosition();
                f.drawBlume();

            } else {

                let f: Tulpe = new Tulpe();
                f.setRandomColor();
                f.setRandomPosition();
                f.drawBlume();

            }
        }
    }

    // feste Blumen
    function createFesteBlumen(): void {
        for (let i: number = 0; i < fBlumen; i++) {



            let zufallBlume: number = Math.floor((Math.random() * 2)) + 1;
            // if für zufällige Blumensorte
            if (zufallBlume == 1) {
                let f: Bluemchen = new Bluemchen();
                flowers[i] = f;
                f.setRandomColor();
                f.flowerType = "Bluemchen";
                f.setRandomPositionStatic();
                f.drawBlume();
                console.log("X = " + f.x + " Y = " + f.y + " flowerType = " + f.flowerType);

            } else {
                let f: Tulpe = new Tulpe();
                flowers[i] = f;
                f.setRandomColor();
                f.flowerType = "Tulpe";
                f.setRandomPositionStatic();
                f.drawBlume();
                console.log("X = " + f.x + " Y = " + f.y + " flowerType = " + f.flowerType);

            }

            //            flowers.push(f);
        }
        console.log(flowers);
    }
    //10 Anfangsbienen
    function anfangsBienen(): void {

        for (let i: number = 0; i < n; i++) {
            let b: Bee = new Bee(300, 200);
            b.setRandomColor();
            bees[i] = b;
            console.log("neue Bee");
            b.beetype = true;

        }
    }
    function createHoneybees(): void {
        for (let i: number = 0; i < 5; i++) {
             
            let b: Honeybee = new Honeybee(300, 200);
            b.askHoneyflower();
            console.log("neue honigbiene x: " + b.hfx + " y: " + b.hfy);
            b.setRandomColor();
            
            //            bees[i] = b;
            bees.push(b);
            
            b.beetype = false;
        }
    }
    // animate
    function animate(): void {

//        for (let j: number = 0; j < bees.length; j++) {
//            let ab: Bee = bees[j];
//            crc2.putImageData(hintergrund, 0, 0);
//            if (ab.beetype == false) {
//                for (let i: number = 0; i < 5; i++) {
//                    let b: Honeybee = bees[i];
//                    b.update();
//                }
//            }
//            if (ab.beetype == true) {
        crc2.putImageData(hintergrund, 0, 0);
        for (let i: number = 0; i < bees.length; i++) {
            let b: Bee = bees[i];
            b.update();
//            b.move();

}
//                for (let i: number = 0; i < n; i++) {
//                    let b: Bee = bees[i];
//                    b.update();
//                }
//                for (let i: number = 0; i < shapes.length; i++) {
//                    let s: MovingShape = shapes[i];
//                    s.update();
//                }
//
//            }
//        }


        
        



        window.setTimeout(animate, 20);
    }
    // zusätzliche Biene      
    function zusatzBiene(_event: Event): void {

        let b: Bee = new Bee(300, 200);
        b.setRandomColor();
        bees.push(b);
        console.log("Anzahl der Bienen = " + n);
        n++;
    }
    // Bienenkorb
    function drawKorb(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "#955500";
        crc2.moveTo(_x - 15, _y + 10);   //u links
        crc2.lineTo(_x + 40, _y + 10);  // u rechts
        crc2.lineTo(_x + 40, _y - 30);  //o rechts
        crc2.lineTo(_x - 15, _y - 30);  //o links
        crc2.lineTo(_x - 15, _y + 10);  //u links
        crc2.fill();
        // Strich zur Seitenwand
        crc2.beginPath();
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x + 40, _y - 30);
        crc2.lineTo(_x + 40, _y + 10);  // u rechts
        crc2.stroke();

        // Seitenwand
        crc2.beginPath();
        crc2.fillStyle = "#844B00";
        crc2.moveTo(_x + 40, _y - 30);   //o links
        crc2.lineTo(_x + 50, _y - 40);  // o rechts
        crc2.lineTo(_x + 50, _y);  //u rechts
        crc2.lineTo(_x + 40, _y + 10);  //u links
        crc2.lineTo(_x + 40, _y - 30);  //o links
        crc2.fill();

        //Schwrzer strich  unter dem Dach
        crc2.beginPath();
        crc2.strokeStyle = "#000000";
        crc2.moveTo(_x - 20, _y - 25);   //u links
        crc2.lineTo(_x + 35, _y - 25);  // u rechts
        crc2.lineTo(_x + 50, _y - 40);  //o rechts
        crc2.stroke();

        // Dach
        crc2.beginPath();
        crc2.fillStyle = "#876D4A";
        crc2.moveTo(_x - 20, _y - 25);   //u links
        crc2.lineTo(_x + 35, _y - 25);  // u rechts
        crc2.lineTo(_x + 50, _y - 40);  //o rechts
        crc2.lineTo(_x - 5, _y - 40);  //o links
        crc2.lineTo(_x - 20, _y - 25);  //u links
        crc2.fill();

        //Eingang
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.arc(_x + 12, _y - 10, 10, 0, 2 * Math.PI);
        crc2.fill();
        //        
    }
}

