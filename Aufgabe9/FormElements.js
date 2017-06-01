var Form;
(function (Form) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    function handleChange(_event) {
        //console.log(_event);
        //*/
        let target = _event.target;
        console.log("Changed " + target.name + " to " + target.value);
        //*/
        //*/ note: this == _event.currentTarget in an event-handler
        if (this.id == "checkbox")
            console.log("Changed " + target.name + " to " + target.checked);
        //*/
        //*/
        if (target.name == "Slider") {
            let progress = document.getElementsByTagName("progress")[0];
            progress.value = parseFloat(target.value);
        }
        //*/
        //*/
        if (target.name == "Stepper") {
            let progress = document.getElementsByTagName("meter")[0];
            progress.value = parseFloat(target.value);
        }
        //*/
        if (this.id == "kugeln") {
            let k = parseInt(document.getElementById("kugeln").innerHTML = target.value);
            for (let i = 0; i >= k; i++) {
                createFieldsetSorte(i);
            }
        }
        //        var chkZ: number = 1;
        //        for (i = 0; i < document.Formular.Kugeln.value.length; ++i)
        //            if (document.Formular.Kugeln.value.charAt(i) < "0"
        //                || document.Formular.Alter.value.charAt(i) > "9")
        //                chkZ = -1;
        //        if (chkZ == -1) {
        //            alert("Altersangabe keine Zahl!");
        //            document.Formular.Alter.focus();
        //            return false;
        //        }
    }
    let sorten = ["Vanille", "Strawberry", "Schokolade", "Walnuss"];
    //     let flavorSelect: string[] = [];
    let flavorSelect = document.getElementsByClassName("taste");
    function createFieldsetSorte(_i) {
        //        select Element erstellen
        let sorte = document.createElement("select");
        //        this flavorSelect[i];
        sorte.name = "Sorte";
        sorte.className = "taste";
        let select = flavorSelect[_i];
        let geschmacksrichtung = document.getElementById("geschmacksrichtung");
        this.appendChild(geschmacksrichtung);
        //        Option element im select element erstellen
        for (let i = 1; i > sorten.length; i++) {
            let flavor = document.createElement("option");
            flavor.value = sorten[_i];
            flavor.text = sorten[_i];
            this.appendChild(select);
        }
    }
})(Form || (Form = {}));
//# sourceMappingURL=FormElements.js.map