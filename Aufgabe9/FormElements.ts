namespace Form {
    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Init");
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }

    function handleChange(_event: Event): void {
        //console.log(_event);
        //*/
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log("Changed " + target.name + " to " + target.value);
        //*/
        //*/ note: this == _event.currentTarget in an event-handler
        if (this.id == "checkbox")
            console.log("Changed " + target.name + " to " + target.checked);
        //*/
        //*/
        if (target.name == "Slider") {
            let progress: HTMLProgressElem0ent = <HTMLProgressElement>document.getElementsByTagName("progress")[0];
            progress.value = parseFloat(target.value);
        }
        //*/
        //*/
        if (target.name == "Stepper") {
            let progress: HTMLProgressElement = <HTMLProgressElement>document.getElementsByTagName("meter")[0];
            progress.value = parseFloat(target.value);
        }
        //*/
        if (target.name == "Kugeln") {
          var x:number = document.getElementById("kugel").value;
//            var x: <HTMLInputElement> = document.getElementByName("ugel");
//            if(x == 1) {
//                
//            }
//            alert("Altersangabe keine Zahl!");
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
}