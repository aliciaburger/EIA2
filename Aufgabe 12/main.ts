namespace aufgabe12 {
    window.addEventListener("load", init);


    //Variabeln

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let things: Thing[] = [];
    let figur: Figur[] = [];
    export let n: number = 3;
    let hintergrund: ImageData;
    export let counter: number = 0;
    let j: number = 0;
    export let f: Figur;
    let stopper: boolean = false;
    let id: number;
    let milliSec: number = 4000;

    export let position: number = 3;
    export let startposition: number[] = [29.1, 87.4, 145.7];
    function init(): void {
        document.getElementById("richtungsButtons").style.display = "none";
        document.getElementById("load").style.display = "none";
        document.getElementById("cl6").addEventListener("click", function() {
            document.getElementById("bild").style.display = "none";
            document.getElementById("cl6").style.display = "none";
            document.getElementById("richtungsButtons").style.display = "block";



            canvas = document.getElementsByTagName("canvas")[0];
            crc2 = canvas.getContext("2d");
            drawBackground();
            createFigur();


            installInterval();

            let buttonlist: NodeListOf<HTMLButtonElement> = document.getElementsByTagName("button");
            for (let i: number = 0; i < buttonlist.length; i++) {

                let button: HTMLButtonElement = buttonlist[i];
                button.addEventListener("click", function() { ; buttonClick(button); });
            }

            window.setTimeout(animate, 20);
        }
        );
    }
    function installInterval(): void {
        id = setTimeout(createThings, milliSec);
    }


    export function eatThing(_t: Thing, _i: number): void {

        if (_t.bad == true && _t.y > (277) && _t.y < (280) || _t.bad == false && _t.x > (f.x - 5) && _t.x < (f.x + 5) && _t.y > (f.y - 4) && _t.y < (f.y)) {
            if (stopper == false) {
                // gefressenes Objekt aus Array entfernen
                things.splice(_i, 1);
                // counter hochzählen
                counter++;

            }
            console.log("counter: " + counter);

            console.log("speed: " + _t.speed);
        }
        stopGame(_t);
    }

    function stopGame(_t: Thing): void {

        // wenn richtige Dinge den Boden berühren, oder wenn falsche Dinge gefangen werden => Spiel verloren

        if (_t.bad == false && _t.y > (277) && _t.y < (280) || _t.bad == true && _t.x > (f.x - 5) && _t.x < (f.x + 5) && _t.y > (f.y - 4) && _t.y < (f.y)) {
            stopper = true;
            clearTimeout(id);
            //Spiel Beenden noch einbauen
            document.getElementById("bild").style.display = "block";
            document.getElementById("spielfeld").style.display = "none";
            document.getElementById("richtungsButtons").style.display = "none";
            document.getElementById("load").style.display = "block";
            document.getElementById("load").addEventListener("click", function() {
                window.location.reload();
            })


        }
    }




    function buttonClick(_button: HTMLButtonElement): void {


        position = Number(_button.value);

    }

    function createFigur(): void {

        f = new Figur(145.7, 255);

    }


    function createThings(): void {


        console.log("milliSec: " + milliSec);
        let z: number;
        z = startposition[Math.floor(Math.random() * startposition.length)];

        let typ: number = Math.floor((Math.random() * 2) + 1);
        if (typ == 1) {
            //            || typ == 2
            let g: Good = new Good(z, 0);

            things.push(g);

        }
        else {
            let a: number = Math.floor((Math.random() * 4) + 1);
            if (a == 1) {
                let tu: Tulpe = new Tulpe(z, 0);
                things.push(tu);


            }
            else {
                if (a == 2) {
                    let b: Bluemchen = new Bluemchen(z, 0);
                    things.push(b);


                }
                else {
                    if (a == 3) {
                        
                        let b: Pfirsich = new Pfirsich(z, 0);
                        things.push(b);


                    }
                    else {
                        if (a == 4) {
                        let b: Apfel = new Apfel(z, 0);
                        things.push(b);


                    }
                        

                    }


                }


            }

            //            switch (a) {
            //                case 1:
            //                    let bl: Bluemchen = new Bluemchen(z, 0);
            //                    things.push(bl);
            //                    break;
            //                    case 2:
            //                    let tu: Tulpe = new Tulpe(z, 0);
            //                    things.push(tu);
            //                    break;
            //            }




console.log("a: " + a);
        }
        

        if (counter > 2) {
            milliSec = 3000;
            if (counter > 6) {
                milliSec = 2000;
                if (counter > 12) {
                    milliSec = 1500;
                    if (counter > 16) {
                        milliSec = 1000;
                        if (counter > 22) {
                            milliSec = 500;
                        }
                    }
                }
            }
        }
        installInterval();

    }

    function animate(): void {

        crc2.putImageData(hintergrund, 0, 0);
        for (let i: number = 0; i < things.length; i++) {
            let t: Thing = things[i];
            t.update();

            eatThing(t, i);
        }
        f.update();

        window.setTimeout(animate, 20);
    }
    function drawBackground(): void {
        crc2.beginPath();
        crc2.fillStyle = "skyblue";
        crc2.rect(0, 0, canvas.width, canvas.height);
        crc2.fill();

        hintergrund = crc2.getImageData(0, 0, canvas.width, canvas.height);
    }





}