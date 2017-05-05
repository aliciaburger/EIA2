namespace StudiVZ {
    interface StudentData {
        // hier ist noch die richtige Datenstruktur festzulegen
        Matrikelnummer: number;
        Name: string;
        Vorname: string;
        Alter: number;
        Geschlecht: boolean;
        Kommentar: string;

    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 für weiblich oder 1 für männlich) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":

                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let eingabe: string[] = _input.split(",");
        //        let gesNum:number= Number(eingabe[4]); 
        //        let gesBool:boolean;
        if (isNaN(parseInt(eingabe[0]))) {
            return "Bitte die Matrikelnummer als Zahl eingeben.";
        }
        if (isNaN(parseInt(eingabe[3]))) {
            return "Bitte das Alter als Zahl eingeben.";
        }
        if (eingabe.length < 5) {
            return "Bitte alle Daten eingeben.";
        }
        if (eingabe.length > 6) {
            return "Bitte nicht mehr als 6 Angaben machen.";
        }


        if (parseInt(eingabe[4]) != 0 && parseInt(eingabe[4]) != 1) {
            return "Bitte nur 0 für weiblich oder 1 für männlich eingeben.";
        }

        let student: StudentData = {
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
    
    function queryData(_matrikel: number): string {

        if (isNaN(_matrikel)) {
            return "Bitte die Matrikelnummer als Zahl eingeben.";
        }
        for (let i: number = 0; i <= students.length; i++) {
            if (students[i].Matrikelnummer == _matrikel) {

                //                                let geschlechtToString: String = students[i].Geschlecht.toString();

                let geschlechtString: string;

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

}


















