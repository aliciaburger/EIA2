/*
(Aufgabe 3)
Name: (Alicia Burger)
Matrikel: (254604)
Datum: (09.04.17)
    
Hiermit versichere ich, 
dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace aufgabe3 {
    window.addEventListener("load", init);

    let black: boolean = true;
    let r: number = 0;
    let anzahl: number = 0;

    function init(): void {
        createSchachbrett();       
        installEventlistener();
        createMousbox();

        document.addEventListener("mousemove", moveBox);
    }

    function createSchachbrett(): void {
        for (let z: number = 0; z < 8; z++) {


            for (let f: number = 0; f < 8; f++) {
                let div: HTMLDivElement = document.createElement("div");
                document.body.appendChild(div);

                if (r == 0) {
                    r = r + 1;
                    div.innerText = "" + r;
                }
                else {
                    r = r * 2;
                    div.innerText = "" + r;
                }

                if (black == true) {
                    div.className += "black";
                }
                else {
                    div.className += "white";
                }

                black = !black;
            }


            black = !black;
        }

    }

    function installEventlistener(): void {
        for (let i: number = 0; i < 8; i++) {
            let erstereihe: NodeListOf<HTMLDivElement> = document.getElementsByTagName("div");
            erstereihe[i].addEventListener("click", colorAndCount);
        }
    }




    function colorAndCount(_event: Event): void {

        let clickedDiv: HTMLDivElement = <HTMLDivElement>_event.target;

        if (clickedDiv.classList.contains("farbe")) {

            if (clickedDiv.classList.contains("black")) {
                // abziehen
                let currentAnzahl: number = Number(this.textContent);
                anzahl -= currentAnzahl;
                updateMouseBoxContent(anzahl);
                console.log("schwarz");

            }
            if (clickedDiv.classList.contains("white")) {
                // abziehen
                let currentAnzahl: number = Number(this.textContent);
                anzahl -= currentAnzahl;
                updateMouseBoxContent(anzahl);
                console.log("weis");

            }
            this.classList.toggle("farbe");
        }
        else {
            this.classList.toggle("farbe");
            console.log("farbe da")
            // dazuzählen
            let currentAnzahl: number = Number(this.textContent);
            anzahl += currentAnzahl;
            updateMouseBoxContent(anzahl);

        }
    }


    function createMousbox(): void {
        let mouseBox: HTMLDivElement = document.createElement("div");
        mouseBox.id = "mouseBox";
        mouseBox.style.backgroundColor = "hotpink";
        mouseBox.style.position = "absolute";
        mouseBox.style.width = "300px";
        mouseBox.style.height = "50px";
        document.body.appendChild(mouseBox);
    }

    //
    //
    //    let farbig: NodeListOf<Element> = document.getElementsByClassName("farbe");
    //    let anzahl: number = 0;
    //
    //    if (document.getElementsByClassName("farbe").length > 0) {
    //        mouseBox.style.display = "inline-block";
    //    }
    //    else {
    //        mouseBox.style.display = "none";
    //    }
    //
    //    for (var i: number = 0; i < farbig.length; i++) {
    //        anzahl += Number(farbig[i].textContent);
    //        console.log(anzahl);
    //        var hexadezimal: string = anzahl.toString(16);
    //        var dezimal: string = anzahl.toString();
    //        document.getElementById("mouseBox").textContent = "Reis:" + "\r\n" + "Dezim" + dezimal + "\r\n" + "Hexadezimal: " + hexadezimal;
    //    }
    //

    function moveBox(_event: MouseEvent): void {
        document.getElementById("mouseBox").style.left = (_event.pageX + 10) + "px";
        document.getElementById("mouseBox").style.top = (_event.pageY + 10) + "px";
    }

    function updateMouseBoxContent(_anzahl: number): void {
        let hexadezimal: string = _anzahl.toString(16);
        let dezimal: string = _anzahl.toString();
        document.getElementById("mouseBox").textContent = "Reis:" + "\r\n" + "Dezimal: " + dezimal + "\r\n" + "Hexadezimal: " + hexadezimal;
    }

}