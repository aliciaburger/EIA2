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
            let progress: HTMLProgressElement = <HTMLProgressElement>document.getElementsByTagName("progress")[0];
            progress.value = parseFloat(target.value);
        }
        //*/
        //*/
        if (target.name == "Stepper") {
            let progress: HTMLProgressElement = <HTMLProgressElement>document.getElementsByTagName("meter")[0];
            progress.value = parseFloat(target.value);
        }
        //*/
        if (this.id == "kugeln") {
          let k: number = parseInt(document.getElementById("kugeln").innerHTML = target.value);
           
          for (let i: number = 0; i >= k; i++) {
                createFieldsetSorte(i);
          }
            
//            let x: HTMLInputElement = <HTMLInputElement>document.getElementById("kugel");
//            x.value = 5;
//          var x = document.getElementById("kugel").value;
//            var x: <HTMLInputElement> = document.getElementByName("Kugel");
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
     let sorten: string[] = ["Vanille", "Strawberry", "Schokolade", "Walnuss"];
//     let flavorSelect: string[] = [];
     let flavorSelect: NodeListOf<Element> = document.getElementsByClassName("taste");
    
    function createFieldsetSorte(_i: number): void {
//        select Element erstellen
        let sorte: HTMLSelectElement = document.createElement("select");
       
//        this flavorSelect[i];
        sorte.name = "Sorte";
        sorte.className = "taste";
        let select: Element = flavorSelect[_i];
        let geschmacksrichtung: HTMLElement = document.getElementById("geschmacksrichtung");
        this.appendChild(geschmacksrichtung);
        
//        Option element im select element erstellen
        for (let i: number = 1; i > sorten.length; i++) {
            let flavor: HTMLOptionElement = document.createElement("option");
            flavor.value = sorten[_i];
            flavor.text = sorten[_i];
            this.appendChild(select);
        }
       
        
    }
}