/*
(Aufgabe 3)
Name: (Alicia Burger)
Matrikel: (254604)
Datum: (09.04.17)
    
Hiermit versichere ich, 
dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/
document.addEventListener('DOMContentLoaded', function() {

    let Karten: string[] = ["Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Ass", "Karo Bube", "Karo Dame",
        "Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Ass", "Herz Bube", "Herz Dame",
        "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Ass", "Pik Bube", "Pik Dame",
        "Kreuz 7", "Kreuz 8", "Kreuz 9", "Karo 10", "Kreuz Ass", "Kreuz Bube", "Kreuz Dame"];


   
    let leg: HTMLElement = document.getElementById("ablegstapel"); 
    let zieh: HTMLElement = document.getElementById("nachziehstapel");
    let handkartenListe: string[] = [];  
    let r: number = 0;

    zieh.addEventListener("click", function (_event: Event): void {
//        for(let r: number = 0;r<5;i++){
//            }
        if (r < 5) {
            let handkarte: HTMLElement = document.createElement("div"); 
            document.body.appendChild(handkarte); 

            let zufall = Karten[Math.round(Math.random() * Karten.length)];
            handkarte.textContent += zufall; 
            r = r+1; 
            handkartenListe[r] = zufall;

            handkarte.addEventListener("click",  function (_event: Event): void {
        let aktiv: HTMLDivElement = <HTMLDivElement>_event.target;
        let sorte: string = aktiv.textContent;
        aktiv.style.display = "none"; 
        r= r-1;
        leg.textContent = sorte; 
        console.log(sorte, Event);
    });
        }
        console.log(Event, handkartenListe);
    });


   

});