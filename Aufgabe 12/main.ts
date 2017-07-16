namespace aufgabe12 {
    window.addEventListener("load", init);


//Variabeln

    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let things: Thing[] = [];
    export let n: number = 3;
    let hintergrund: ImageData;
    export let counter: number = 0;
    let k: number = 0;
    let j: number = 0;
    let stopper: boolean = false;
    let id: number;
    
    //init
    function init(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        drawBackground();
        installInterval();
    }

    function drawBackground(): void {


        crc2.beginPath();
        crc2.fillStyle = "skyblue";
        crc2.rect(0, 0, canvas.width, canvas.height);
        crc2.fill();

        hintergrund = crc2.getImageData(0, 0, canvas.width, canvas.height);
    }

    function installInterval(): void {


       

            //Anonyme Funktion weil innerhalb von setInterval
            id = setInterval(function(): void { j++; console.log(j); createThings(j); window.setTimeout(animate, 20); stopGame(); }, 3000);
       
  

    }
    function stopGame(): void {
        if (j == 5) {
            stopper = true;
            clearInterval(id);
        }
    }
    function createThings(_i: number): void {

        let startposition: number[] = [29.1, 87.4, 145.7];
        let z: number;
        z = startposition[Math.floor(Math.random() * startposition.length)];
        let b: Thing = new Thing(z, canvas.height);
        console.log("neues Thing erstellt");
        things[_i] = b;
        b.setRandomColor();

    }

    function animate(): void {

        crc2.putImageData(hintergrund, 0, 0);
        for (let i: number = 0; i < 10; i++) {
            let b: Thing = things[i];
            b.update();
        }
        window.setTimeout(animate, 20);
    }




}