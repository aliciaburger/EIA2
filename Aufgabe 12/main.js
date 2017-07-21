var aufgabe12;
(function (aufgabe12) {
    window.addEventListener("load", init);
    let things = [];
    let figur = [];
    aufgabe12.n = 3;
    let hintergrund;
    aufgabe12.counter = 0;
    let j = 0;
    let stopper = false;
    let id;
    let milliSec = 4000;
    aufgabe12.position = 3;
    aufgabe12.startposition = [29.1, 87.4, 145.7];
    function init() {
        document.getElementById("richtungsButtons").style.display = "none";
        document.getElementById("endtext").style.display = "none";
        document.getElementById("load").style.display = "none";
        document.getElementById("start").addEventListener("click", startGame);
        document.getElementById("start").addEventListener("touch", startGame);
    }
    function startGame() {
        document.getElementById("start").style.display = "none";
        document.getElementById("bild").style.display = "none";
        document.getElementById("anfangstext").style.display = "none";
        document.getElementById("richtungsButtons").style.display = "block";
        aufgabe12.canvas = document.getElementsByTagName("canvas")[0];
        aufgabe12.crc2 = aufgabe12.canvas.getContext("2d");
        drawBackground();
        createRentier();
        installInterval();
        let buttonlist = document.getElementsByTagName("button");
        for (let i = 0; i < buttonlist.length; i++) {
            let button = buttonlist[i];
            button.addEventListener("click", function () { ; buttonClick(button); });
            button.addEventListener("touch", function () { ; buttonClick(button); });
        }
        window.setTimeout(animate, 20);
    }
    function installInterval() {
        id = setTimeout(createThings, milliSec);
    }
    function eatThing(_t, _i) {
        if (_t.bad == true && _t.y > (277) && _t.y < (280) || _t.bad == false && _t.x > (aufgabe12.r.x - 5) && _t.x < (aufgabe12.r.x + 5) && _t.y > (aufgabe12.r.y - 4) && _t.y < (aufgabe12.r.y)) {
            if (stopper == false) {
                // gefressenes Objekt aus Array entfernen
                things.splice(_i, 1);
                // counter hochzählen
                aufgabe12.counter++;
            }
            console.log("counter: " + aufgabe12.counter);
            console.log("speed: " + _t.speed);
        }
        stopGame(_t);
    }
    aufgabe12.eatThing = eatThing;
    function stopGame(_t) {
        // wenn richtige Dinge den Boden berühren, oder wenn falsche Dinge gefangen werden => Spiel verloren
        if (_t.bad == false && _t.y > (277) && _t.y < (280) || _t.bad == true && _t.x > (aufgabe12.r.x - 5) && _t.x < (aufgabe12.r.x + 5) && _t.y > (aufgabe12.r.y - 4) && _t.y < (aufgabe12.r.y)) {
            stopper = true;
            clearTimeout(id);
            //Spiel Beenden 
            document.getElementById("bild").style.display = "block";
            document.getElementById("endtext").style.display = "block";
            document.getElementById("spielfeld").style.display = "none";
            document.getElementById("richtungsButtons").style.display = "none";
            if (aufgabe12.counter == 0) {
                document.getElementById("endtext").textContent = "Spiel beendet." + "\n" + "Schade, du hast " + aufgabe12.counter.toString() + " Punkte erzielt." + " klicke auf neu Laden um noch einmal zu spielen.";
            }
            else {
                if (aufgabe12.counter == 1) {
                    document.getElementById("endtext").textContent = "Spiel beendet." + "\n" + "Schade, du hast leider nur " + aufgabe12.counter.toString() + " Punkt erzielt." + " klicke auf neu Laden um noch einmal zu spielen.";
                }
                else {
                    document.getElementById("endtext").textContent = "Spiel beendet." + "\n" + "Glückwunsch! du hast " + aufgabe12.counter.toString() + " Punkte erzielt." + " klicke auf neu Laden um noch einmal zu spielen.";
                }
            }
            document.getElementById("load").style.display = "block";
            document.getElementById("load").addEventListener("click", neuLaden);
            document.getElementById("load").addEventListener("touch", neuLaden);
        }
    }
    function neuLaden() {
        window.location.reload();
    }
    function buttonClick(_button) {
        aufgabe12.position = Number(_button.value);
    }
    function createRentier() {
        aufgabe12.r = new aufgabe12.Rentier(145.7, 255);
    }
    function createThings() {
        console.log("milliSec: " + milliSec);
        let z;
        z = aufgabe12.startposition[Math.floor(Math.random() * aufgabe12.startposition.length)];
        let typ = Math.floor((Math.random() * 2) + 1);
        if (typ == 1) {
            let g = new aufgabe12.Good(z, 0);
            g.setRandomColor();
            things.push(g);
        }
        else {
            let a = Math.floor((Math.random() * 4) + 1);
            if (a == 1) {
                let tu = new aufgabe12.Tulpe(z, 0);
                things.push(tu);
            }
            else {
                if (a == 2) {
                    let b = new aufgabe12.Bluemchen(z, 0);
                    things.push(b);
                }
                else {
                    if (a == 3) {
                        let b = new aufgabe12.Pfirsich(z, 0);
                        things.push(b);
                    }
                    else {
                        if (a == 4) {
                            let b = new aufgabe12.Apfel(z, 0);
                            things.push(b);
                        }
                    }
                }
            }
        }
        if (aufgabe12.counter > 2) {
            milliSec = 3000;
            if (aufgabe12.counter > 6) {
                milliSec = 2000;
                if (aufgabe12.counter > 12) {
                    milliSec = 1500;
                    if (aufgabe12.counter > 16) {
                        milliSec = 1000;
                        if (aufgabe12.counter > 22) {
                            milliSec = 500;
                        }
                    }
                }
            }
        }
        installInterval();
    }
    function animate() {
        aufgabe12.crc2.putImageData(hintergrund, 0, 0);
        for (let i = 0; i < things.length; i++) {
            let t = things[i];
            t.update();
            eatThing(t, i);
        }
        aufgabe12.r.update();
        window.setTimeout(animate, 20);
    }
    function drawBackground() {
        var grd = aufgabe12.crc2.createLinearGradient(0, 0, 0, aufgabe12.canvas.height);
        grd.addColorStop(0, "#222157");
        grd.addColorStop(0.5, "#2446b6");
        grd.addColorStop(1, "#159ecf");
        aufgabe12.crc2.beginPath();
        aufgabe12.crc2.fillStyle = grd;
        aufgabe12.crc2.rect(0, 0, aufgabe12.canvas.width, aufgabe12.canvas.height);
        aufgabe12.crc2.fill();
        hintergrund = aufgabe12.crc2.getImageData(0, 0, aufgabe12.canvas.width, aufgabe12.canvas.height);
    }
})(aufgabe12 || (aufgabe12 = {}));
//# sourceMappingURL=main.js.map