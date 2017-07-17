var aufgabe12;
(function (aufgabe12) {
    window.addEventListener("load", init);
    let canvas;
    let things = [];
    let figur = [];
    aufgabe12.n = 3;
    let hintergrund;
    aufgabe12.counter = 0;
    let j = 0;
    let stopper = false;
    let id;
    aufgabe12.startposition = [29.1, 87.4, 145.7];
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        aufgabe12.crc2 = canvas.getContext("2d");
        drawBackground();
        createFigur();
        installInterval();
    }
    function drawBackground() {
        aufgabe12.crc2.beginPath();
        aufgabe12.crc2.fillStyle = "skyblue";
        aufgabe12.crc2.rect(0, 0, canvas.width, canvas.height);
        aufgabe12.crc2.fill();
        hintergrund = aufgabe12.crc2.getImageData(0, 0, canvas.width, canvas.height);
    }
    function createFigur() {
        //
        //        let f: Figur = new Figur(145.7, 15)
        //        console.log("neue Figur wurde erstellt");
        //         figur[0] = f;
        let f = new aufgabe12.Figur(145.7, 50);
        console.log("neue Figur wurde erstellt");
        //            figur[0] = f;
    }
    function installInterval() {
        if (stopper == false) {
            //Anonyme Funktion weil innerhalb von setInterval
            id = setInterval(myFunction, 3000);
        }
        else {
            clearInterval(id);
        }
        window.setTimeout(animate, 20);
    }
    function myFunction() {
        console.log(j);
        createThings(j);
        j++;
        stopGame();
    }
    function stopGame() {
        if (j == 5) {
            stopper = true;
            clearInterval(id);
        }
    }
    function createThings(_i) {
        let z;
        z = aufgabe12.startposition[Math.floor(Math.random() * aufgabe12.startposition.length)];
        let b = new aufgabe12.Thing(z, canvas.height);
        console.log("neues Thing erstellt");
        things[_i] = b;
        b.setRandomColor();
    }
    function animate() {
        aufgabe12.crc2.putImageData(hintergrund, 0, 0);
        for (let i = 0; i < things.length; i++) {
            let b = things[i];
            b.update();
        }
        window.setTimeout(animate, 20);
    }
})(aufgabe12 || (aufgabe12 = {}));
//# sourceMappingURL=main.js.map