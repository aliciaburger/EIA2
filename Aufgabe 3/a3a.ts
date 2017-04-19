/*
Aufgabe: (Nummer und Titel der Aufgabe)
Name: (Ihr Name)
Matrikel: (Ihre Matrikelnummer)
Datum: (Datum der letzten Bearbeitung)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
document.addEventListener("DOMContentLoaded", function() {



    let black: boolean = true;
    let r: number = 0;
    //    var box = document.getElementById("box");
    for (let z: number = 0; z < 8; z++) {


        for (let f: number = 0; f < 8; f++) {
            let div: HTMLDivElement = document.createElement("div");
            document.body.appendChild(div);

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
                //                div.style.backgroundColor = "#000000";
                //                div.style.color = "#ffffff";
                div.className += "black";
            }
            else {
                //                div.style.backgroundColor = "#ffffff";
                //                div.style.color = "#000000";
                div.className += "white";
            }
            
            black = !black;
        }


        black = !black;

    }
    //Liste aller div elemente
    //    let felderListe: NodeListOf<HTMLElement> = document.getElementsByTagName("div");
    //    let z1DivListe: NodeListOf<Element> = document.getElementsByClassName("zeile1");
    //    let z1DivListe: NodeListOf<HTMLElement> = <NodeListOf<HTMLElement>>document.getElementsByClassName("zeile1");
    //     let target: HTMLDivElement = <HTMLDivElement>event.target;
    //     if (target.className.includes("farbe")) {
    //   if elemente klassennamen z1DivListe besitzen
    //         if(.classList.contains("farbe");)
    //    let elm: HTMLElement;
    //    elm.addEventListener("click", faerben)
    //



    for (var i: number = 0; i < 8; i++) {

        var erstereihe: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
        erstereihe[i].addEventListener("click", faerben)
        function faerben(): void {

            if (erstereihe[i].classList.contains("farbe")) {

                if (erstereihe[i].classList.contains("black")) {
                    //                    this.style.backgroundColor = "#000000";
                    //                    this.style.color = "#ffffff";
                    console.log("schwarz");                    
                }
                if (erstereihe[i].classList.contains("white")) {
                    //                    this.style.backgroundColor = "#ffffff";
                    //                    this.style.color = "#000000";
                    console.log("weis");
                    
                }
                this.classList.toggle("farbe");
            }
            else {
                this.classList.toggle("farbe");
                console.log("farbe da")
                //                this.style.backgroundColor = "#C3FFF4";
                //                this.style.color = "#000000";

            }
        };
    }

 

    let mouseBox: HTMLDivElement = document.createElement("div");
    document.body.appendChild(mouseBox);
//    mouseBox.className = "mouseBox";
    mouseBox.id = "mouseBox";

    let farbig: NodeListOf<Element> = document.getElementsByClassName("farbe");
    let anzahl: number = 0;
    
    if (document.getElementsByClassName("farbe").length > 0) {
           mouseBox.style.display = "inline-block";   
        }
        else {
            mouseBox.style.display = "none";
}
    
    for (var i: number = 0; i < farbig.length; i++) {
        anzahl += Number(farbig[i].textContent);
        console.log(anzahl);
        var hexadezimal: string = anzahl.toString(16);
        var dezimal: string = anzahl.toString();
        document.getElementById("mouseBox").textContent = "Reis:" + "\r\n" + "Dezimal: " + dezimal + "\r\n" + "Hexadezimal: " + hexadezimal;
    }

    document.addEventListener("mousemove", function(event: MouseEvent):void {
        document.getElementById("mouseBox").style.left = (event.clientX + 10) + "px";
        document.getElementById("mouseBox").style.top = (event.clientX + 10) + "px";
    });














});