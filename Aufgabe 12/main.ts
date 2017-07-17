namespace aufgabe12 {
    window.addEventListener("load", init);


    //Variabeln

    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let things: Thing[] = [];
    let figur: Figur[] = [];
    export let n: number = 3;
    let hintergrund: ImageData;
    export let counter: number = 0;
    let j: number = 0;
    let stopper: boolean = false;
    let id: number;
    export let startposition: number[] = [29.1, 87.4, 145.7];
    function init(): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawBackground();
        createFigur();

        installInterval();
            }

    function drawBackground(): void {
        crc2.beginPath();
        crc2.fillStyle = "skyblue";
        crc2.rect(0, 0, canvas.width, canvas.height);
        crc2.fill();

        hintergrund = crc2.getImageData(0, 0, canvas.width, canvas.height);
    }
    function createFigur(): void {
        //
        //        let f: Figur = new Figur(145.7, 15)
        //        console.log("neue Figur wurde erstellt");
        //         figur[0] = f;
        
            let f: Figur = new Figur(145.7, 50);
            console.log("neue Figur wurde erstellt");
//            figur[0] = f;
            
        

    }
    function installInterval(): void {
        if (stopper == false) {

            //Anonyme Funktion weil innerhalb von setInterval
            id = setInterval(myFunction, 3000);
        }
        else {
            clearInterval(id);
        }
        window.setTimeout(animate, 20);
    }

    function myFunction(): void {
        
        console.log(j);
        createThings(j);

        j++;
        stopGame();
    }
    function stopGame(): void {
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
        window.setTimeout(animate, 20);
    }




}