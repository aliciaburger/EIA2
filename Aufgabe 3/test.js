document.addEventListener("DOMContentLoaded", function () {
    let rice = 1;
    let zeile = 0;
    let n = 64;
    for (let i = 0; i < n; i++) {
        let element = document.createElement("div");
        element.textContent = rice.toString();
        //Umbruch
        if (i % 8 == 0) {
            zeile = zeile + 1;
        }
        //Schwarzweiß
        if (zeile % 2 == 0) {
            if (i % 2 != 0) {
                element.className = "board white";
            }
            else {
                element.className = "board black";
            }
        }
        else {
            if (i % 2 != 0) {
                element.className = "board black";
            }
            else {
                element.className = "board white";
            }
        }
        rice = rice * 2;
        document.body.appendChild(element);
    }
    var erstereihe = document.getElementsByTagName("div");
    for (var i = 0; i < 8; i++) {
        erstereihe[i].addEventListener("click", function () {
            this.classList.toggle("farbe");
            ricesumme();
        });
    }
    var gDivs = document.getElementsByClassName("farbe");
    var summe = 0;
    var pfeil = document.getElementById("pfeil");
    function ricesumme() {
        if (gDivs.length == 0) {
            pfeil.style.display = "none";
        }
        else {
            pfeil.style.display = "inline-block";
        }
        for (var i = 0; i < gDivs.length; i++) {
            summe += Number(gDivs[i].textContent);
            var hexadezimal = summe.toString(16);
            var dezimal = summe.toString();
            pfeil.textContent = "Reis:" + "\r\n" + "Dezimal: " + dezimal + "\r\n" + "Hexadezimal: " + hexadezimal;
        }
    }
    document.addEventListener("mousemove", function (event) {
        document.getElementById("pfeil").style.left = (event.clientX + 10) + "px";
        document.getElementById("pfeil").style.top = (event.clientY + 10) + "px";
    });
});
//# sourceMappingURL=test.js.map