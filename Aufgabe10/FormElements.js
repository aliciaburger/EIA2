var aufgabe10;
(function (aufgabe10) {
    aufgabe10.sorten = ["Vanille", "Erdbeere", "Schokolade", "Walnuss"];
    aufgabe10.wahlSorte = [];
    aufgabe10.wahlSorteZahl = [];
    aufgabe10.auswahlS = [];
    aufgabe10.toppings1 = ["Erdbeeren", "Himbeern", "Schokostreusel", "Cookie Stückchen"];
    aufgabe10.auswahlT1 = [];
    aufgabe10.toppings2 = ["nichts", "Schoko Souce", "Erdbeer Souce", "Sahne", "Karamell Souce"];
    aufgabe10.auswahlT2 = [];
    let checkbox;
    let summe;
    let liste;
    aufgabe10.warenkorbInhalt = [];
    let eisPreis = 1;
    let toppingPreis = "0.50";
    let pruefen;
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
        }
        pruefen = document.getElementById("pruefen");
        pruefen.addEventListener("click", senden);
        //          Bestellung.addEventListener("click", senden);
    }
    function handleChange(_event) {
        let betrag = 0;
        // bisherige Liste des Warenkorbs leeren, um Elemente nicht doppelt zu haben.
        aufgabe10.warenkorbInhalt = [];
        for (let i = 0; i < aufgabe10.auswahlS.length; i++) {
            betrag += Number(aufgabe10.auswahlS[i].value) * eisPreis;
            if (Number(aufgabe10.auswahlS[i].value) > 0) {
                let kugelanzahl = Number(aufgabe10.auswahlS[i].value);
                aufgabe10.warenkorbInhalt.push(" " + kugelanzahl + " Kugel " + aufgabe10.auswahlS[i].id + "eis  =   " + (eisPreis * kugelanzahl) + " €  \n");
            }
        }
        for (let i = 0; i < aufgabe10.auswahlT1.length; i++) {
            if (aufgabe10.auswahlT1[i].checked) {
                //            console.log("handleChange auswahlT1[i] : " + Number(auswahlT1[i].value));
                betrag += Number(aufgabe10.auswahlT1[i].value);
                aufgabe10.warenkorbInhalt.push(" Topping 1 " + aufgabe10.toppings1[i] + " = " + toppingPreis + " €");
            }
        }
        for (let i = 0; i < aufgabe10.auswahlT2.length; i++) {
            if (aufgabe10.auswahlT2[i].checked) {
                betrag += Number(aufgabe10.auswahlT2[i].value);
                aufgabe10.warenkorbInhalt.push(" Topping 2 " + aufgabe10.toppings2[i] + " = " + toppingPreis + " €");
            }
        }
        let j;
        liste.textContent = aufgabe10.warenkorbInhalt.toString();
        console.log("summe = " + betrag);
        //          let summeHtml: HTMLElement = document.getElementById("Summe");
        summe.textContent = "\n" + "Gesammtsumme =   " + betrag.toString() + " €";
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
        for (let i = 0; i < aufgabe10.sorten.length; i++) {
            //        Variable um select und div element dem Fieldset unterzuordnen
            let geschmacksrichtung = document.getElementById("geschmacksrichtung");
            //        Div Element erstellen           
            let sorte = document.createElement("div");
            sorte.className = "taste";
            //            console.log(sorten[i]);
            sorte.textContent = aufgabe10.sorten[i];
            geschmacksrichtung.appendChild(sorte);
            //        number Input erstellen 
            let kugelZahl = document.createElement("input");
            kugelZahl.type = "number";
            kugelZahl.id = aufgabe10.sorten[i];
            //            kugelZahl.className = "hj";
            kugelZahl.min = "0";
            kugelZahl.max = "3";
            kugelZahl.step = "1";
            kugelZahl.value = "0";
            sorte.appendChild(kugelZahl);
            aufgabe10.auswahlS.push(kugelZahl);
        }
    }
    function createTopping1() {
        for (let i = 0; i < aufgabe10.toppings1.length; i++) {
            //         Variable um Checkbox und Label  dem Fieldset unterzuordnen
            let topping1 = document.getElementById("topping1");
            //         Label erstellen 
            let text = document.createElement("label");
            text.className = "taste";
            //            console.log(toppings1[i]);
            text.textContent = aufgabe10.toppings1[i];
            //         Checkbox
            checkbox = document.createElement("input");
            text.appendChild(checkbox);
            checkbox.type = "checkbox";
            text.id = aufgabe10.toppings1[i];
            checkbox.value = toppingPreis;
            topping1.appendChild(text);
            aufgabe10.auswahlT1.push(checkbox);
        }
    }
    function createTopping2() {
        for (let i = 0; i < aufgabe10.toppings2.length; i++) {
            //         Variable um Checkbox und Label  dem Fieldset unterzuordnen
            let topping2 = document.getElementById("topping2");
            //         Label erstellen 
            let text = document.createElement("label");
            text.className = "taste";
            //             console.log(toppings2[i]);
            text.textContent = aufgabe10.toppings2[i];
            //         Checkbox
            let radioButton = document.createElement("input");
            text.appendChild(radioButton);
            radioButton.type = "radio";
            radioButton.name = "Radiogroup";
            text.id = aufgabe10.toppings2[i];
            if (i == 0) {
                radioButton.value = "0";
            }
            else {
                radioButton.value = "0.50";
            }
            topping2.appendChild(text);
            aufgabe10.auswahlT2.push(radioButton);
        }
    }
    function senden() {
        let korrektur = [];
        let nachname = document.getElementById("Nachname");
        let vorname = document.getElementById("Vorname");
        let postleizahl = document.getElementById("Postleizahl");
        let stadt = document.getElementById("Stadt");
        let strasse = document.getElementById("Strasse");
        let hausnummer = document.getElementById("Hausnummer");
        let eMail = document.getElementById("EMail");
        let fehler = false;
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
            console.log("fehlerZaehler bei alert" + fehler);
            alert("Bitte ueberprüfen sie ihre Bestellung.");
        }
        else {
            alert("Vielen Dank! Ihre Bestellung wird jetzt bearbeitet.");
        }
    }
})(aufgabe10 || (aufgabe10 = {}));
//# sourceMappingURL=FormElements.js.map