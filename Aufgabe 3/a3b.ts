/*
(Aufgabe 3)
Name: (Alicia Burger)
Matrikel: (254604)
Datum: (09.04.17)
    
Hiermit versichere ich, 
dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace aufgabe3b {
window.addEventListener("load", init);

let karten: string[] = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Ass", "Karo Bube", "Karo Dame",
    "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Ass", "Herz Bube", "Herz Dame",
    "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Ass", "Pik Bube", "Pik Dame",
    "Kreuz 7", "Kreuz 8", "Kreuz 9", "Karo 10", "Kreuz Ass", "Kreuz Bube", "Kreuz Dame"];

let leg: HTMLElement;
let zieh: HTMLElement;
let anzahlHandkarten: number = 0;

function init(): void {
    leg = document.getElementById("ablegstapel");
    zieh = document.getElementById("nachziehstapel");
    zieh.addEventListener("click", ziehen);
}

function ziehen(_event: Event): void {

    if (anzahlHandkarten < 5 && karten.length > 0) {
        let handkartenDiv: HTMLElement = document.createElement("div");

        let zufall: number = Math.floor(Math.random() * karten.length);
        let handKarte: string = karten[zufall];
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

 function ablegen(_event: Event): void {
            let aktiv: HTMLDivElement = <HTMLDivElement>_event.target;
            let sorte: string = aktiv.textContent;
            //aktiv.style.display = "none";
            anzahlHandkarten--;
            leg.textContent = sorte;
            aktiv.remove();
        }
}




