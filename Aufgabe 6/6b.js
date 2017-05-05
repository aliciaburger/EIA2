var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 für weiblich oder 1 für männlich) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        let eingabe = _input.split(",");
        //        let gesNum:number= Number(eingabe[4]); 
        //        let gesBool:boolean;
        if (parseInt(eingabe[4]) != 0 && parseInt(eingabe[4]) != 1) {
            return "bitte nur 0 oder 1 für Geschlecht angeben";
        }
        let student = {
            Matrikelnummer: parseInt(eingabe[0]),
            Name: eingabe[1],
            Vorname: eingabe[2],
            Alter: parseInt(eingabe[3]),
            Geschlecht: parseInt(eingabe[4]) == 0,
            Kommentar: eingabe[5]
        };
        students.push(student);
        //        let MatrikelnummerSpeicher: eingabe[0].parseInt,
        console.log(student);
        console.log("students" + students);
        return "Daten wurden gespeichert!";
    }
    //    function geschlechtToBoolean(_gesNum, _gesBool) {
    //        if(gesNum == 0){
    //        _gesBool=true;            
    //        }
    //        }
    function queryData(_matrikel) {
        //        let matrikelAbfrage: number = _matrikel;
        for (let i = 0; i <= students.length; i++) {
            if (students[i].Matrikelnummer == _matrikel) {
                //                                let geschlechtToString: String = students[i].Geschlecht.toString();
                let geschlechtString;
                if (students[i].Geschlecht == true) {
                    geschlechtString = "weiblich";
                    console.log("weiblich");
                }
                else {
                    geschlechtString = "männlich";
                    console.log("männlich");
                }
                return "Ausgabe" + students[i].Matrikelnummer + "\nName: " + students[i].Name + "\nVorname: " + students[i].Vorname + "\nAlter: " + students[i].Alter + "\nGeschlecht: " + geschlechtString + "\nKommentar: " + students[i].Kommentar;
            }
        }
        console.log("Fehler");
        return "Hier fehlt noch der richtige Code...";
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=6b.js.map