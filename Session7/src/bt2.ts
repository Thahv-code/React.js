    abstract class vehicle {
        name: string;
        speed: number;
        id: number;
        
        constructor(name: string, speed: number, id: number) {  
            this.name = name;
            this.speed = speed;
            this.id = id;
        }

        getInfor(): string {
            return `Tên: ${this.name}, Tốc độ: ${this.speed}, ID: ${this.id}`;
        }
        
        speedUp(increase: number): void {
            this.speed += increase;
            console.log(`Tốc độ mới: ${this.speed}`);
        }

        slowDown(decrease: number): void {
            this.speed -= decrease;
            console.log(`Tốc độ mới: ${this.speed}`);
        }

        showSpeed(): void {
            console.log(`Tốc độ hiện tại: ${this.speed}`);
        }
}

    const myCar = new Car("Toyota", 120, 1, 50);
    console.log(myCar.getInfor());xx
    myCar.speedUp(20);
    myCar.slowDown(10);
    myCar.showSpeed();