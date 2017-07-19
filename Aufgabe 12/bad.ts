namespace aufgabe12 {


    export class Bad extends Thing {
        bad: boolean = true;
        



        update(): void {
            this.move();
            this.draw();

        }
        draw(): void {
            let _x: number = this.x;
            let _y: number = this.y;

            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(_x - 3, _y - 4, 5, 0, 2 * Math.PI);
            crc2.fill();

        }







        move(): void {
            this.speed = 2;
            if (counter > 3) {
                this.speed = 2.5;
                if (counter > 5) {
                    this.speed = 3;
                    if (counter > 10) {
                    this.speed = 4;
                        if (counter > 15) {
                    this.speed = 5;
                }
                }
                }
            }

            this.y += Math.random() * this.speed;

        }

        setRandomColor(): void {
            let bienenFabe: string[] = ["#FFF700", "#FFD500", "#FFBC00", "#FFA600", "#FFD041", "#FFE041", "#FFFA41", "#EDFF41"];
            let fluegelFabe: string[] = ["#F8E1FF", "#FFE1FE", "#EBE1FF", "#E1E1FF", "#E1F2FF", "#E1FFFF", "#E1FFF7", "#E1FFE1"];
            this.bienenColor = bienenFabe[Math.floor(Math.random() * bienenFabe.length)];
            this.fluegelColor = fluegelFabe[Math.floor(Math.random() * fluegelFabe.length)];
        }

    }

}


