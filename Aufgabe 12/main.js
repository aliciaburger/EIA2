var aufgabe12;
(function (aufgabe12) {
    window.addEventListener("load", init);
    let canvas;
    let things = [];
    aufgabe12.n = 3;
    let hintergrund;
    aufgabe12.counter = 0;
    let k = 0;
    let j = 0;
    let stopper = false;
    let id;
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        aufgabe12.crc2 = canvas.getContext("2d");
        drawBackground();
        installInterval();
    }
    function drawBackground() {
        aufgabe12.crc2.beginPath();
        aufgabe12.crc2.fillStyle = "skyblue";
        aufgabe12.crc2.rect(0, 0, canvas.width, canvas.height);
        aufgabe12.crc2.fill();
        hintergrund = aufgabe12.crc2.getImageData(0, 0, canvas.width, canvas.height);
    }
    function installInterval() {
        if (stopper == false) {
            //Anonyme Funktion weil innerhalb von setInterval
            id = setInterval(function () { j++; console.log(j); createThings(j); window.setTimeout(animate, 20); test(); }, 3000);
        }
        else {
            clearInterval(id);
        }
    }
    function test() {
        if (j == 5) {
            stopper = true;
            installInterval();
        }
    }
    function createThings(_i) {
        let startposition = [29.1, 87.4, 145.7];
        let z;
        z = startposition[Math.floor(Math.random() * startposition.length)];
        let b = new aufgabe12.Thing(z, canvas.height);
        console.log("neues Thing erstellt");
        things[_i] = b;
        b.setRandomColor();
    }
    function animate() {
        aufgabe12.crc2.putImageData(hintergrund, 0, 0);
        for (let i = 0; i < 10; i++) {
            let b = things[i];
            b.update();
        }
        window.setTimeout(animate, 20);
    }
})(aufgabe12 || (aufgabe12 = {}));
//# sourceMappingURL=main.js.map