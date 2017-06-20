namespace aufgabe10 {
    export let sorten: string[] = ["Vanille", "Erdbeere", "Schokolade", "Walnuss"];
    export let wahlSorte: string[] = [];
    export let wahlSorteZahl: string[] = [];
    export let auswahlS: HTMLInputElement[] = [];
    export let toppings1: string[] = ["Erdbeeren", "Himbeern", "Schokostreusel", "Cookie Stückchen"];
    export let auswahlT1: HTMLInputElement[] = [];
    export let toppings2: string[] = ["nichts", "Schoko Souce", "Erdbeer Souce", "Sahne", "Karamell Souce"];
    export let auswahlT2: HTMLInputElement[] = [];
    let checkbox: HTMLInputElement;
    let summe: HTMLDivElement;
    let liste: HTMLDivElement;
    export let warenkorbInhalt: string[] = [];
    let eisPreis: number = 1;
    let toppingPreis: string = "0.50";
    let pruefen:  HTMLElement;  
    
    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Init");
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        createSorte();
        createTopping1();
        createTopping2();
        createWarenKorb();
        
       
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
//            berechnePreis();
            
             
        }
        pruefen = document.getElementById("pruefen");
        pruefen.addEventListener("click", senden);
//          Bestellung.addEventListener("click", senden);
    }

    function handleChange(_event: Event): void {

        let betrag: number = 0;
        // bisherige Liste des Warenkorbs leeren, um Elemente nicht doppelt zu haben.
        warenkorbInhalt = [];
        for (let i: number = 0; i < auswahlS.length; i++) {
            betrag += Number(auswahlS[i].value) * eisPreis;
           
            if (Number(auswahlS[i].value) > 0) {
                 let kugelanzahl: number = Number(auswahlS[i].value);

                 warenkorbInhalt.push(" " + kugelanzahl + " Kugel " + auswahlS[i].id + "eis  =   " + (eisPreis * kugelanzahl) + " €  \n");

                
            }


        }
        for (let i: number = 0; i < auswahlT1.length; i++) {
            if (auswahlT1[i].checked) {
                //            console.log("handleChange auswahlT1[i] : " + Number(auswahlT1[i].value));
                betrag += Number(auswahlT1[i].value);
                warenkorbInhalt.push(" Topping 1 " + toppings1[i] + " = " + toppingPreis + " €");
                
//               
            }
        }
        for (let i: number = 0; i < auswahlT2.length; i++) {
            if (auswahlT2[i].checked) {
                betrag += Number(auswahlT2[i].value);
                warenkorbInhalt.push(" Topping 2 " + toppings2[i] + " = " + toppingPreis + " €");
//                liste.textContent += "Topping   " + toppings2[i] + "    " + toppingPreis + " €" + "\n";
            }
        }
        let j: number;

        liste.textContent = warenkorbInhalt.toString();
        
        console.log("summe = " + betrag);
        //          let summeHtml: HTMLElement = document.getElementById("Summe");
        summe.textContent = "\n" + "Gesammtsumme =   " + betrag.toString() + " €";

        
    }





    function createWarenKorb(): void {
        let warenkorb: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("warenkorb");

        liste = document.createElement("div");
          
        warenkorb.appendChild(liste);

        summe = document.createElement("div");
        summe.id = "warensumme";
        warenkorb.appendChild(summe);

    }

    function createSorte(): void {
        for (let i: number = 0; i < sorten.length; i++) {
            //        Variable um select und div element dem Fieldset unterzuordnen
            let geschmacksrichtung: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("geschmacksrichtung");
            //        Div Element erstellen           
            let sorte: HTMLDivElement = document.createElement("div");
            sorte.className = "taste";
//            console.log(sorten[i]);
            sorte.textContent = sorten[i];
            geschmacksrichtung.appendChild(sorte);
            //        number Input erstellen 
            let kugelZahl: HTMLInputElement = document.createElement("input");
            kugelZahl.type = "number";
            kugelZahl.id = sorten[i];
            kugelZahl.name = "eissorte";
            kugelZahl.min = "0";
            kugelZahl.max = "3";
            kugelZahl.step = "1";
            kugelZahl.value = "0";
            sorte.appendChild(kugelZahl);
            auswahlS.push(kugelZahl);
            //            console.log("auswahlS[i] : " + auswahlS[i]);                   
        }
    }
    function createTopping1(): void {
        for (let i: number = 0; i < toppings1.length; i++) {
            //         Variable um Checkbox und Label  dem Fieldset unterzuordnen
            let topping1: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("topping1");
            //         Label erstellen 
            let text: HTMLLabelElement = document.createElement("label");
            text.className = "taste";
//            console.log(toppings1[i]);
            text.textContent = toppings1[i];
            //         Checkbox
            checkbox = document.createElement("input");
            text.appendChild(checkbox);
            checkbox.type = "checkbox";
            text.id = toppings1[i];
            checkbox.value = toppingPreis;
            topping1.appendChild(text);
            auswahlT1.push(checkbox);
//            console.log(checkbox.value);
        }
    }


    function createTopping2(): void {
        for (let i: number = 0; i < toppings2.length; i++) {
            //         Variable um Checkbox und Label  dem Fieldset unterzuordnen
            let topping2: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("topping2");
            //         Label erstellen 
            let text: HTMLLabelElement = document.createElement("label");
            text.className = "taste";
            //             console.log(toppings2[i]);
            text.textContent = toppings2[i];
            //         Checkbox
            let radioButton: HTMLInputElement = document.createElement("input");
            text.appendChild(radioButton);
            radioButton.type = "radio";
            radioButton.name = "Radiogroup";
            text.id = toppings2[i];
            if (i == 0) {
                radioButton.value = "0";
            }
            else {
                radioButton.value = "0.50";
            }
            topping2.appendChild(text);
            auswahlT2.push(radioButton);
        }
    }


    
function senden(): void {

    let korrektur: string[] = [];
        
    let nachname: HTMLInputElement = <HTMLInputElement> document.getElementById("Nachname");
    let vorname: HTMLInputElement = <HTMLInputElement>document.getElementById("Vorname");
    let postleizahl: HTMLInputElement = <HTMLInputElement>document.getElementById("Postleizahl");
    let stadt: HTMLInputElement = <HTMLInputElement>document.getElementById("Stadt");
    let strasse: HTMLInputElement = <HTMLInputElement>document.getElementById("Strasse");
    let hausnummer: HTMLInputElement = <HTMLInputElement> document.getElementById("Hausnummer");    
    let eMail: HTMLInputElement = <HTMLInputElement> document.getElementById("EMail");
    let fehler: boolean = false;  

    if (nachname.validity.valid == false) {
        nachname.style.backgroundColor = "#E6003D";
        nachname.style.borderColor = "#E6003D";
        fehler = true;
        
    }
    else {
        nachname.style.backgroundColor = "#00E664";
        nachname.style.borderColor = "#00E664";
    }
    if (vorname.validity.valid == false) {
        vorname.style.backgroundColor = "#E6003D";
        vorname.style.borderColor = "#E6003D";
        fehler = true;
    }
    else {
        vorname.style.backgroundColor = "#00E664";
        vorname.style.borderColor = "#00E664";
    }
    if (postleizahl.validity.valid == false) {
        postleizahl.style.backgroundColor = "#E6003D";
        postleizahl.style.borderColor = "#E6003D";
        fehler = true;
    }
    else {
        postleizahl.style.backgroundColor = "#00E664";
        postleizahl.style.borderColor = "#00E664";
    }
    if (stadt.validity.valid == false) {
        stadt.style.backgroundColor = "#E6003D";
        stadt.style.borderColor = "#E6003D";
        fehler = true;
    }
    else {
        stadt.style.backgroundColor = "#00E664";
        stadt.style.borderColor = "#00E664";
    }
    if (strasse.validity.valid == false) {
        strasse.style.backgroundColor = "#E6003D";
        strasse.style.borderColor = "#E6003D";
        fehler = true;
    }
    else {
        strasse.style.backgroundColor = "#00E664";
        strasse.style.borderColor = "#00E664";
    }
    if (hausnummer.validity.valid == false) {
        hausnummer.style.backgroundColor = "#E6003D";
        hausnummer.style.borderColor = "#E6003D";
        fehler = true;
    }
    else {
        hausnummer.style.backgroundColor = "#00E664";
        hausnummer.style.borderColor = "#00E664";
    }
    if (eMail.validity.valid == false) {
        eMail.style.backgroundColor = "#E6003D";
        eMail.style.borderColor = "#E6003D";
        fehler = true;
    }
    else {
        eMail.style.backgroundColor = "#00E664";
        eMail.style.borderColor = "#00E664";
        
    }
    
    
    
    if (fehler == true) {
        console.log("fehlerZaehler bei alert" + fehler );
        alert("Bitte ueberprüfen sie ihre Bestellung.");
    }
    else {
        alert("Vielen Dank! Ihre Bestellung wird jetzt bearbeitet.");
    }
  
}


}
