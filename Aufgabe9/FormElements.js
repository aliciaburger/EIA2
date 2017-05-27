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
        //        if (target.name == "Kugeln") {
        //            var x: <HTMLInputElement> = document.getElementByName("ugel");
        //            if(x == 1) {
        //                
        //            }
        //            alert("Altersangabe keine Zahl!");
        //        }
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
})(Form || (Form = {}));
//# sourceMappingURL=FormElements.js.map