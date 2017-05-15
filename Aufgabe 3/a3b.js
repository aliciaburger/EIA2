/*
(Aufgabe 3)
Name: (Alicia Burger)
Matrikel: (254604)
Datum: (09.04.17)
    
Hiermit versichere ich,
dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert.
*/
var aufgabe3b;
(function (aufgabe3b) {
    window.addEventListener("load", init);
    let karten = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Ass", "Karo Bube", "Karo Dame",
        "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Ass", "Herz Bube", "Herz Dame",
        "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Ass", "Pik Bube", "Pik Dame",
        "Kreuz 7", "Kreuz 8", "Kreuz 9", "Karo 10", "Kreuz Ass", "Kreuz Bube", "Kreuz Dame"];
    let leg;
    let zieh;
    let anzahlHandkarten = 0;
    function init() {
        leg = document.getElementById("ablegstapel");
        zieh = document.getElementById("nachziehstapel");
        zieh.addEventListener("click", ziehen);
    }
    function ziehen(_event) {
        if (anzahlHandkarten < 5 && karten.length > 0) {
            let handkartenDiv = document.createElement("div");
            let zufall = Math.floor(Math.random() * karten.length);
            let handKarte = karten[zufall];
            handkartenDiv.textContent += handKarte;
            // karte aus großem array entfernen
            karten.splice(zufall, 1);
            console.log(karten.length);
            document.body.appendChild(handkartenDiv);
            anzahlHandkarten++;
            handkartenDiv.addEventListener("click", ablegen);
        }
        //console.log(Event, handkartenListe);
    }
    function ablegen(_event) {
        let aktiv = _event.target;
        let sorte = aktiv.textContent;
        //aktiv.style.display = "none";
        anzahlHandkarten--;
        leg.textContent = sorte;
        aktiv.remove();
    }
})(aufgabe3b || (aufgabe3b = {}));
//# sourceMappingURL=a3b.js.map