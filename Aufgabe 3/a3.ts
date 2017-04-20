/*
Aufgabe: (Nummer und Titel der Aufgabe)
Name: (Ihr Name)
Matrikel: (Ihre Matrikelnummer)
Datum: (Datum der letzten Bearbeitung)
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
document.addEventListener("DOMContentLoaded", function() {

//    let black: boolean = true;
    let farbig: boolean = false;
    let black: boolean = true;
    let r: number = 0;
    for (let z: number = 0; z < 8; z++) {

        for (let f: number = 0; f < 8; f++) {
            let div: HTMLDivElement = document.createElement("div");
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



    let felderListe: NodeListOf<HTMLElement> = document.getElementsByTagName("div");
    for (let i = 0; i < 8; i++) {
        felderListe[i].addEventListener("click", function() {

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
            //        showSummeKoerner();
        });
    }
    
   let mouseBox: HTMLDivElement = document.createElement("div");   
     document.body.appendChild(mouseBox);
     mouseBox.className = "mouseBox";
    mouseBox.id= "mouseBox";

        
function mark(event: MouseEvent) {
   
        
    }
  let  sum = 0;
    let auswahl: NodeListOf<HTMLElement> = <NodeListOf<HTMLElement>>document.getElementsByClassName("marked");

    for (let i = 0; i < auswahl.length; i++) {
        sum += parseInt(auswahl[i].innerText);
        mouseBox.innerText = "Dez:"+ sum.toString() +"\r\n" + "hexDez:"+ sum.toString(16);
 }
    console.log(sum);

  
     


  document.addEventListener("mousemove", function(Event:MouseEvent) { 
   document.getElementById("mouseBox").style.left = (Event.clientX+10) +"px";
   document.getElementById("mouseBox").style.top = (Event.clientX+10) +"px"; });

    
    
        //     let auswahl: NodeListOf<Element> = document.getElementsByClassName("auswahl");
        //    let summe: number = 0; // wird die summe aller angeklickten divs nachher ergeben 
        //    let toolTip: HTMLElement = document.getElementById("tooltip"); // div im html mit id wo die summe der angeklickten divs nacher angezeigt wird
        //    
        //function summeK(): void { 
        //
        //    if (auswahl.length == 0) {  // wenn 0 divs angeklickt sind, 
        //        toolTip.style.display = "none"; //dann ist auch das tooltip.div nicht da 
        //    }
        //    else {
        //        toolTip.style.display = "inline-block"; //wenn nicht 0 divs angeklickt sind, dann wird das tooltip.div angezeigt
        //    }
        //
        //    for (let i: number = 0; i < auswahl.length; i++) {     // durchläuft alle angeklickten und somit roten divs und registriert somit dessen inhalt= die benötigten zahlen zum zusammen berechnen der summe 
        //        summe += Number(auswahl[i].textContent);           //der nummerninhat der angeklickten divs summiert sich
        //        let hexa: string = summe.toString(16);              //berechnet die hexadezimalzahl aus der summe der reiskörner der angeklickten divs
        //        let dezi: string = summe.toString();                //berechnet die dezimalzahl aus der summe der reiskörner der angeklickten divs
        //        toolTip.textContent = "Summe vom Reis:" + "\r\n" /* absatz */ + "Dezimal: " + dezi + "\r\n" + "Hexadezimal: " + hexa; //schreibt in das tooltip.div die benötigten zahlen
        //    }
        //}
        //    
        //    document.addEventListener("mousemove", function(Event) {
        //        document.getElementById("tooltip").style.left = (Event.clientX + 10) + "px";
        //        document.getElementById("tooltip").style.top = (Event.clientY + 10) + "px";
        //}); 

// 
//    let auswahl : HTMLDivElement;
// function select(event: MouseEvent): void {
//        auswahl = <HTMLDivElement>event.target;
//    }
//
//    function markierungAn(event: MouseEvent): void {
//        let style: CSSStyleDeclaration = auswahl.style;
//        style.backgroundColor = "green";
//    }
//    function markierungAus(event: MouseEvent): void {
//        let style: CSSStyleDeclaration = auswahl.style;
//        style.display += "none";
//    }
//    //Anzahl der Körner anzeigen
//    document.addEventListener("mousemove", function(Event) {
//        document.getElementById("summe").style.left = (Event.clientX + 10) + "px";
//        document.getElementById("summe").style.top = (Event.clientY + 10) + "px";
//        document.getElementById("summe").textContent = "Summe der selektierten Reiskörner:" + "\r\n" + "Dezimal: " + r.toString() + "\r\n" + "Hexadezimal: " + r.toString(16);
//});    
//      

//function showSummeKoerner():void {
//    
//    let box: HTMLDivElement = document.createElement("div");
//            document.body.appendChild(box);
//    
//    let selectedDivs : NodeListOf<Element> = document.getElementsByClassName("auswahl");
//    let summeKoerner : number = 0;
//
//    if (selectedDivs.length == 0){  /* Zeigt die Tooltip Box nur an, wenn Felder selektiert sind */
//        document.getElementById("box").style.display = "none";
//    }
//    else {
//        document.getElementById("box").style.display = "inline-block";
//    }
//
//    for (let i = 0; i < selectedDivs.length; i++) {  /* Schreibt die Summe der Körner auf den selektierten Feldern in die Tooltip Box */
//        summeKoerner += Number(selectedDivs[i].innerText);
//        document.getElementById("box").textContent = "Summe der selektierten Reiskörner:" + "\r\n" + "Dezimal: " + summeKoerner.toString() + "\r\n" + "Hexadezimal: " + summeKoerner.toString(16);
//    }
//}
// //Anzeigefeld der Summe an den Mauszeiger koppeln
//    document.addEventListener("mousemove", function(Event) {
//        document.getElementById("Summe").style.left = (Event.clientX + 10) + "px";
//        document.getElementById("Summe").style.top = (Event.clientY + 10) + "px";
//});











});







//let divList : NodeListOf<HTMLElement> = document.getElementsByTagName("div");
//for (let i = 0; i < 9; i++) {   /* Gibt den Feldern in der ersten Reihe bei einem Klick die Klasse "selected", wodurch sie rot werden */
//    divList[i].addEventListener("click", function() {
//        this.classList.toggle("selected");
//        showSummeKoerner();
//    });
//}








//    
//}
//
//
//);