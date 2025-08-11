
abstract class Shape {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name; 
    }

    public abstract getSize(): void; 
}


class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }

    public getSize(): void {
        console.log(`Chiều rộng: ${this.width}, Chiều cao: ${this.height}`);
    }
}


const rec = new Rectangle("Hình chữ nhật", 5.5, 3.2);
console.log("Tên hình:", rec.getName());
rec.getSize();
