/*
(Aufgabe 3)
Name: (Alicia Burger)
Matrikel: (254604)
Datum: (09.04.17)
    
Hiermit versichere ich,
dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
*/
var aufgabe3;
(function (aufgabe3) {
    window.addEventListener("load", init);
    let black = true;
    let r = 0;
    let anzahl = 0;
    function init() {
        createSchachbrett();
        installEventlistener();
        createMousbox();
        document.addEventListener("mousemove", moveBox);
    }
    function createSchachbrett() {
        for (let z = 0; z < 8; z++) {
            for (let f = 0; f < 8; f++) {
                let div = document.createElement("div");
                document.body.appendChild(div);
                if (r == 0) {
                    r = r + 1;
                    div.innerText = "" + r;
                }
                else {
                    r = r * 2;
                    div.innerText = "" + r;
                }
                if (black == true) {
                    div.className += "black";
                }
                else {
                    div.className += "white";
                }
                black = !black;
            }
            black = !black;
        }
    }
    function installEventlistener() {
        for (let i = 0; i < 8; i++) {
            let erstereihe = document.getElementsByTagName("div");
            erstereihe[i].addEventListener("click", colorAndCount);
        }
    }
    function colorAndCount(_event) {
        let clickedDiv = _event.target;
        if (clickedDiv.classList.contains("farbe")) {
            if (clickedDiv.classList.contains("black")) {
                // abziehen
                let currentAnzahl = Number(this.textContent);
                anzahl -= currentAnzahl;
                updateMouseBoxContent(anzahl);
                console.log("schwarz");
            }
            if (clickedDiv.classList.contains("white")) {
                // abziehen
                let currentAnzahl = Number(this.textContent);
                anzahl -= currentAnzahl;
                updateMouseBoxContent(anzahl);
                console.log("weis");
            }
            this.classList.toggle("farbe");
        }
        else {
            this.classList.toggle("farbe");
            console.log("farbe da");
            // dazuzählen
            let currentAnzahl = Number(this.textContent);
            anzahl += currentAnzahl;
            updateMouseBoxContent(anzahl);
        }
    }
    function createMousbox() {
        let mouseBox = document.createElement("div");
        mouseBox.id = "mouseBox";
        mouseBox.style.backgroundColor = "hotpink";
        mouseBox.style.position = "absolute";
        mouseBox.style.width = "300px";
        mouseBox.style.height = "50px";
        document.body.appendChild(mouseBox);
    }
    //
    //
    //    let farbig: NodeListOf<Element> = document.getElementsByClassName("farbe");
    //    let anzahl: number = 0;
    //
    //    if (document.getElementsByClassName("farbe").length > 0) {
    //        mouseBox.style.display = "inline-block";
    //    }
    //    else {
    //        mouseBox.style.display = "none";
    //    }
    //
    //    for (var i: number = 0; i < farbig.length; i++) {
    //        anzahl += Number(farbig[i].textContent);
    //        console.log(anzahl);
    //        var hexadezimal: string = anzahl.toString(16);
    //        var dezimal: string = anzahl.toString();
    //        document.getElementById("mouseBox").textContent = "Reis:" + "\r\n" + "Dezim" + dezimal + "\r\n" + "Hexadezimal: " + hexadezimal;
    //    }
    //
    function moveBox(_event) {
        document.getElementById("mouseBox").style.left = (_event.pageX + 10) + "px";
        document.getElementById("mouseBox").style.top = (_event.pageY + 10) + "px";
    }
    function updateMouseBoxContent(_anzahl) {
        let hexadezimal = _anzahl.toString(16);
        let dezimal = _anzahl.toString();
        document.getElementById("mouseBox").textContent = "Reis:" + "\r\n" + "Dezimal: " + dezimal + "\r\n" + "Hexadezimal: " + hexadezimal;
    }
})(aufgabe3 || (aufgabe3 = {}));
//# sourceMappingURL=a3a.js.map