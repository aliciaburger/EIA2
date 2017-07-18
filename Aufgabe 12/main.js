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
    aufgabe12.position = 3;
    aufgabe12.startposition = [29.1, 87.4, 145.7];
    function init() {
        aufgabe12.canvas = document.getElementsByTagName("canvas")[0];
        aufgabe12.crc2 = aufgabe12.canvas.getContext("2d");
        drawBackground();
        createFigur();
        installInterval();
        let buttonlist = document.getElementsByTagName("button");
        for (let i = 0; i < buttonlist.length; i++) {
            let button = buttonlist[i];
            button.addEventListener("click", function () { ; buttonClick(button); });
        }
        window.setTimeout(animate, 20);
    }
    function eatThing(_b, _i) {
        console.log("eat");
        //        for (let i: number = 0; i < things.length; i++) {
        //            let b: Thing = things[i];
        if (_b.x == aufgabe12.f.x && _b.y == aufgabe12.f.y) {
            console.log(things.length);
            things.splice(_i, 1);
            console.log(things.length);
        }
        //        }
    }
    aufgabe12.eatThing = eatThing;
    function buttonClick(_button) {
        aufgabe12.position = Number(_button.value);
    }
    function createFigur() {
        aufgabe12.f = new aufgabe12.Figur(145.7, 265);
        console.log("neue Figur wurde erstellt" + aufgabe12.f);
    }
    function installInterval() {
        //        if (stopper == fals        
        id = setInterval(myFunction, 3000);
        //        }
        //        else {
        //            clearInte;
        //        }
    }
    function myFunction() {
        console.log(j);
        createThings(j);
        j++;
        if (j == 5) {
            stopper = true;
            clearInterval(id);
        }
    }
    function createThings(_i) {
        let z;
        z = aufgabe12.startposition[Math.floor(Math.random() * aufgabe12.startposition.length)];
        let b = new aufgabe12.Thing(z, aufgabe12.canvas.height);
        console.log("neues Thing erstellt");
        things[_i] = b;
        console.log("things.length" + things.length);
    }
    function animate() {
        aufgabe12.crc2.putImageData(hintergrund, 0, 0);
        for (let i = 0; i < things.length; i++) {
            let b = things[i];
            b.update();
            eatThing(b, i);
        }
        aufgabe12.f.update();
        window.setTimeout(animate, 20);
    }
    function drawBackground() {
        aufgabe12.crc2.beginPath();
        aufgabe12.crc2.fillStyle = "skyblue";
        aufgabe12.crc2.rect(0, 0, aufgabe12.canvas.width, aufgabe12.canvas.height);
        aufgabe12.crc2.fill();
        hintergrund = aufgabe12.crc2.getImageData(0, 0, aufgabe12.canvas.width, aufgabe12.canvas.height);
    }
})(aufgabe12 || (aufgabe12 = {}));
//# sourceMappingURL=main.js.map