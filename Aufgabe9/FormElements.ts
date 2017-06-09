namespace Form {
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
    }

    function handleChange(_event: Event): void {

        let betrag: number = 0;
        // bisherige Liste des Warenkorbs leeren, um Elemente nicht doppelt zu haben.
        warenkorbInhalt = [];
        for (let i: number = 0; i < auswahlS.length; i++) {
            betrag += Number(auswahlS[i].value) * eisPreis;
           
            if (Number(auswahlS[i].value) > 0) {
                 
//                warenkorbInhalt[i].className = "nj";
                warenkorbInhalt.push(" 1 Kugel " + auswahlS[i].id + "eis     " + eisPreis + " €");
//                warenkorbInhalt.push("1 Kugel " + sorten[i] + "eis     " + eisPreis + " €");
                //            console.log("warenkorbInhalt[i]: " + sorten[i] + "     " + auswahlS[i].value);
                //                console.log("warenkorbInhalt[i]: " + warenkorbInhalt);
//                warenkorbAusgeben(i);
                
            }


        }
        for (let i: number = 0; i < auswahlT1.length; i++) {
            if (auswahlT1[i].checked) {
                //            console.log("handleChange auswahlT1[i] : " + Number(auswahlT1[i].value));
                betrag += Number(auswahlT1[i].value);
                warenkorbInhalt.push(" Topping " + toppings1[i] + " = " + toppingPreis + " €");
                
//               
            }
        }
        for (let i: number = 0; i < auswahlT2.length; i++) {
            if (auswahlT2[i].checked) {
                betrag += Number(auswahlT2[i].value);
                warenkorbInhalt.push(" Topping " + toppings2[i] + " = " + toppingPreis + " €");
//                liste.textContent += "Topping   " + toppings2[i] + "    " + toppingPreis + " €" + "\n";
            }
        }
        let j: number;
//        warenkorbAusgeben();
//        for (let i: number = 0; i < warenkorbInhalt.length; i++) {
////                    let produkt: HTMLDivElement = document.createElement("div");
////                    liste.appendChild(produkt);
//        
//            
//            console.log("warenkorbInhalt[i]" + warenkorbInhalt[i] + "i : " + i);
////            warenkorbInhalt.shift();
//        }

        liste.textContent = warenkorbInhalt.toString();
        
        console.log("summe = " + betrag);
        //          let summeHtml: HTMLElement = document.getElementById("Summe");
        summe.textContent = "\n" + "Gesammtsumme =   " + betrag.toString() + " €";

        
    }

//    function warenkorbAusgeben(): void {
//
//    
//
//        
//
//
//
////        for (let j: number = 0; j < warenkorbInhalt.length; j++) {
////            let produkt: HTMLDivElement = document.createElement("div");
////        //        liste.id = "warensumme";        
////        liste.appendChild(produkt);
////            //             console.log("warenkorbInhalt[j]: " + warenkorbInhalt[j]+ j);
////            produkt.textContent += warenkorbInhalt;
////
////        }
//        //        Number(auswahal  
//        
//    
//    }






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
//            kugelZahl.className = "hj";
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

//    function berechnePreis(): void {
//        let ausgabe: HTMLDivElement = <HTMLDivElement>document.getElementById("ausgabe");
//        let s1: HTMLInputElement = <HTMLInputElement>document.getElementById(sorten[0]);
//        //      ausgabe.textContent = sorten[0] +  ;
//    }




}
