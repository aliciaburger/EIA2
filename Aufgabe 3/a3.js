/*
Aufgabe: (Nummer und Titel der Aufgabe)
Name: (Ihr Name)
Matrikel: (Ihre Matrikelnummer)
Datum: (Datum der letzten Bearbeitung)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
document.addEventListener("DOMContentLoaded", function () {
    //    let black: boolean = true;
    let farbig = false;
    let black = true;
    let r = 0;
    for (let z = 0; z < 8; z++) {
        for (let f = 0; f < 8; f++) {
            let div = document.createElement("div");
            document.body.appendChild(div);
            div.className += "box";
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
            }
            else {
                div.style.backgroundColor = "#ffffff";
                div.style.color = "#000000";
            }
            black = !black;
        }
        black = !black;
    }
    let felderListe = document.getElementsByTagName("div");
    for (let i = 0; i < 8; i++) {
        felderListe[i].addEventListener("click", function () {
            let div = document.getElementsByTagName('div')[i];
            if (farbig == false) {
                farbig = true;
                div.style.backgroundColor = "#C3FFF4";
                div.style.color = "#000000";
            }
            else {
                farbig = false;
                if (i % 2 == 0) {
                    div.style.backgroundColor = "#000000";
                    div.style.color = "#ffffff";
                }
                else {
                    div.style.backgroundColor = "#ffffff";
                    div.style.color = "#000000";
                }
            }
            div.className += "auswahl";
        });
    }
});
//# sourceMappingURL=a3.js.map