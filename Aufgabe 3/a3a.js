/*
Aufgabe: (Nummer und Titel der Aufgabe)
Name: (Ihr Name)
Matrikel: (Ihre Matrikelnummer)
Datum: (Datum der letzten Bearbeitung)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
document.addEventListener("DOMContentLoaded", function () {
    let black = true;
    let r = 0;
    //    var box = document.getElementById("box");
    for (let z = 0; z < 8; z++) {
        for (let f = 0; f < 8; f++) {
            let div = document.createElement("div");
            document.body.appendChild(div);
            if (z == 0) {
                div.className += "zeile1";
            }
            //            div.className += "box";
            if (r == 0) {
                r = r + 1;
                div.innerText = "" + r;
            }
            else {
                r = r * 2;
                div.innerText = "" + r;
            }
            if (black == true) {
                div.style.backgroundColor = "#000000";
                div.style.color = "#ffffff";
                div.className += "black";
            }
            else {
                div.style.backgroundColor = "#ffffff";
                div.style.color = "#000000";
                div.className += "white";
            }
            black = !black;
        }
        black = !black;
    }
    //Liste aller div elemente
    let felderListe = document.getElementsByTagName("div");
    //    let z1DivListe: NodeListOf<Element> = document.getElementsByClassName("zeile1");
    let z1DivListe = document.getElementsByClassName("zeile1");
    //     let target: HTMLDivElement = <HTMLDivElement>event.target;
    //     if (target.className.includes("marked")) {
    //   if elemente klassennamen z1DivListe besitzen
    //         if(.classList.contains("eineklasse");)
    //    let elm: HTMLElement;
    //    elm.addEventListener("click", faerben)
    //
    for (var i = 0; i < 8; i++) {
        var erstereihe = document.getElementsByTagName("div");
        erstereihe[i].addEventListener("click", faerben);
        function faerben() {
            if (erstereihe[i].classList.contains("farbe")) {
                if (erstereihe[i].classList.contains("black")) {
                    this.style.backgroundColor = "#000000";
                    this.style.color = "#ffffff";
                    console.log("schwarz");
                }
                if (erstereihe[i].classList.contains("white")) {
                    this.style.backgroundColor = "#ffffff";
                    this.style.color = "#000000";
                    console.log("weis");
                }
                this.classList.toggle("farbe");
            }
            else {
                this.classList.toggle("farbe");
                console.log("farbe da");
                this.style.backgroundColor = "#C3FFF4";
                this.style.color = "#000000";
            }
        }
        ;
    }
});
//# sourceMappingURL=a3a.js.map