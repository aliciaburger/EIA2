var Form;
(function (Form) {
    Form.sorten = ["Vanille", "Erdbeere", "Schokolade", "Walnuss"];
    Form.wahlSorte = [];
    Form.wahlSorteZahl = [];
    Form.auswahlS = [];
    Form.toppings1 = ["Erdbeeren", "Himbeern", "Schokostreusel", "Cookie Stückchen"];
    Form.auswahlT1 = [];
    Form.toppings2 = ["nichts", "Schoko Souce", "Erdbeer Souce", "Sahne", "Karamell Souce"];
    Form.auswahlT2 = [];
    let checkbox;
    let summe;
    let liste;
    Form.warenkorbInhalt = [];
    let eisPreis = 1;
    let toppingPreis = "0.50";
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let fieldsets = document.getElementsByTagName("fieldset");
        createSorte();
        createTopping1();
        createTopping2();
        createWarenKorb();
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            berechnePreis();
        }
    }
    function handleChange(_event) {
        let betrag = 0;
        for (let i = 0; i < Form.auswahlS.length; i++) {
            betrag += Number(Form.auswahlS[i].value) * eisPreis;
            if (Number(Form.auswahlS[i].value) > 0) {
                Form.warenkorbInhalt.push("1 Kugel " + Form.sorten[i] + "eis     " + eisPreis + " €");
                //            console.log("warenkorbInhalt[i]: " + sorten[i] + "     " + auswahlS[i].value);
                //                console.log("warenkorbInhalt[i]: " + warenkorbInhalt);
                //                warenkorbAusgeben(i);
                liste.textContent += "1 Kugel " + Form.sorten[i] + "eis     " + eisPreis + " €" + "\n";
            }
        }
        for (let i = 0; i < Form.auswahlT1.length; i++) {
            if (Form.auswahlT1[i].checked) {
                //            console.log("handleChange auswahlT1[i] : " + Number(auswahlT1[i].value));
                betrag += Number(Form.auswahlT1[i].value);
                Form.warenkorbInhalt.push("Topping " + Form.toppings1[i] + toppingPreis + " €");
                liste.textContent += "Topping   " + Form.toppings1[i] + "    " + toppingPreis + " €" + "\n";
            }
        }
        for (let i = 0; i < Form.auswahlT2.length; i++) {
            if (Form.auswahlT2[i].checked) {
                betrag += Number(Form.auswahlT2[i].value);
                liste.textContent += "Topping   " + Form.toppings2[i] + "    " + toppingPreis + " €" + "\n";
            }
        }
        console.log("summe : " + betrag);
        //          let summeHtml: HTMLElement = document.getElementById("Summe");
        summe.textContent = betrag.toString() + " €";
    }
    function warenkorbAusgeben(_i) {
        //        for (let j: number = 0; j < warenkorbInhalt.length; j++) {
        //            let produkt: HTMLDivElement = document.createElement("div");
        //        //        liste.id = "warensumme";        
        //        liste.appendChild(produkt);
        //            //             console.log("warenkorbInhalt[j]: " + warenkorbInhalt[j]+ j);
        //            produkt.textContent += warenkorbInhalt;
        //
        //        }
        //        Number(auswahal  
    }
    function createWarenKorb() {
        let warenkorb = document.getElementById("warenkorb");
        liste = document.createElement("div");
        warenkorb.appendChild(liste);
        summe = document.createElement("div");
        summe.id = "warensumme";
        warenkorb.appendChild(summe);
    }
    function createSorte() {
        for (let i = 0; i < Form.sorten.length; i++) {
            //        Variable um select und div element dem Fieldset unterzuordnen
            let geschmacksrichtung = document.getElementById("geschmacksrichtung");
            //        Div Element erstellen           
            let sorte = document.createElement("div");
            sorte.className = "taste";
            console.log(Form.sorten[i]);
            sorte.textContent = Form.sorten[i];
            geschmacksrichtung.appendChild(sorte);
            //        number Input erstellen 
            let kugelZahl = document.createElement("input");
            kugelZahl.type = "number";
            kugelZahl.id = Form.sorten[i];
            kugelZahl.min = "0";
            kugelZahl.max = "3";
            kugelZahl.step = "1";
            kugelZahl.value = "0";
            sorte.appendChild(kugelZahl);
            Form.auswahlS.push(kugelZahl);
        }
    }
    function createTopping1() {
        for (let i = 0; i < Form.toppings1.length; i++) {
            //         Variable um Checkbox und Label  dem Fieldset unterzuordnen
            let topping1 = document.getElementById("topping1");
            //         Label erstellen 
            let text = document.createElement("label");
            text.className = "taste";
            console.log(Form.toppings1[i]);
            text.textContent = Form.toppings1[i];
            //         Checkbox
            checkbox = document.createElement("input");
            text.appendChild(checkbox);
            checkbox.type = "checkbox";
            text.id = Form.toppings1[i];
            checkbox.value = toppingPreis;
            topping1.appendChild(text);
            Form.auswahlT1.push(checkbox);
            console.log(checkbox.value);
        }
    }
    function createTopping2() {
        for (let i = 0; i < Form.toppings2.length; i++) {
            //         Variable um Checkbox und Label  dem Fieldset unterzuordnen
            let topping2 = document.getElementById("topping2");
            //         Label erstellen 
            let text = document.createElement("label");
            text.className = "taste";
            //             console.log(toppings2[i]);
            text.textContent = Form.toppings2[i];
            //         Checkbox
            let radioButton = document.createElement("input");
            text.appendChild(radioButton);
            radioButton.type = "radio";
            radioButton.name = "Radiogroup";
            text.id = Form.toppings2[i];
            if (i == 0) {
                radioButton.value = "0";
            }
            else {
                radioButton.value = "0.50";
            }
            topping2.appendChild(text);
            Form.auswahlT2.push(radioButton);
        }
    }
    function berechnePreis() {
        let ausgabe = document.getElementById("ausgabe");
        let s1 = document.getElementById(Form.sorten[0]);
        //      ausgabe.textContent = sorten[0] +  ;
    }
})(Form || (Form = {}));
//# sourceMappingURL=FormElements.js.map