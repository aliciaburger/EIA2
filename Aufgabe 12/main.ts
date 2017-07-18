namespace aufgabe12 {
    window.addEventListener("load", init);


    //Variabeln

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let things: Thing[] = [];
    let figur: Figur[] = [];
    export let n: number = 3;
    let hintergrund: ImageData;
    export let counter: number = 0;
    let j: number = 0;
    let f: Figur;
    let stopper: boolean = false;
    let id: number;
    export let position: number = 3;
    export let startposition: number[] = [29.1, 87.4, 145.7];
    function init(): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawBackground();
        createFigur();
        installInterval();
        let buttonlist: NodeListOf<HTMLButtonElement> = document.getElementsByTagName("button");
        for (let i: number = 0; i < buttonlist.length; i++) {

            let button: HTMLButtonElement = buttonlist[i];
            button.addEventListener("click", function() {; buttonClick(button); });
        }

        window.setTimeout(animate, 20);

    }

    function drawBackground(): void {
        crc2.beginPath();
        crc2.fillStyle = "skyblue";
        crc2.rect(0, 0, canvas.width, canvas.height);
        crc2.fill();

        hintergrund = crc2.getImageData(0, 0, canvas.width, canvas.height);
    }
    
    function buttonClick(_button: HTMLButtonElement): void {
        
        
        position = Number(_button.value);
       
    }
    
    function createFigur(): void {       

        f = new Figur(145.7, 265);
        console.log("neue Figur wurde erstellt" + f);
    }
    
    function installInterval(): void {
        //        if (stopper == fals        
        id = setInterval(myFunction, 3000);
        //        }
        //        else {
        //            clearInte;
        //        }

    }

    function myFunction(): void {

        console.log(j);
        createThings(j);

        j++;
        if (j == 5) {
            stopper = true;
            clearInterval(id);
        }
    }

    function createThings(_i: number): void {


        let z: number;
        z = startposition[Math.floor(Math.random() * startposition.length)];
        let b: Thing = new Thing(z, canvas.height);
        console.log("neues Thing erstellt");
        things[_i] = b;
        b.setRandomColor();

    }

    function animate(): void {

        crc2.putImageData(hintergrund, 0, 0);
        for (let i: number = 0; i < things.length; i++) {
            let b: Thing = things[i];
            b.update();

        }
        f.update();
        window.setTimeout(animate, 20);
    }




}