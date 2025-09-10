abstract class Product {
    id: number;
    name: string;
    price: number;
    stock: number;

    constructor(id: number, name: string, price: number, stock: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    abstract sell(quantity: number): void;
    abstract restock(quantity: number): void;
    abstract getDetails(): string;
}

class ElectronicProduct extends Product {
    warrantyPeriod: number;

    constructor(id: number, name: string, price: number, stock: number, warrantyPeriod: number) {
        super(id, name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }

    sell(quantity: number): void {
        this.stock -= quantity;
    }

    restock(quantity: number): void {
        this.stock += quantity;
    }

    getDetails(): string {
        return `${this.name} - Price: $${this.price}, Stock: ${this.stock}, Warranty: ${this.warrantyPeriod} months`;
    }
}

class ClothingProduct extends Product {
    size: string;
    color: string;

    constructor(id: number, name: string, price: number, stock: number, size: string, color: string) {
        super(id, name, price, stock);
        this.size = size;
        this.color = color;
    }

    sell(quantity: number): void {
        this.stock -= quantity;
    }

    restock(quantity: number): void {
        this.stock += quantity;
    }

    getDetails(): string {
        return `${this.name} - Price: $${this.price}, Stock: ${this.stock}, Size: ${this.size}, Color: ${this.color}`;
    }
}

abstract class Customer {
    id: number;
    name: string;
    email: string;

    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    abstract purchase(product: Product, quantity: number): void;
    abstract getDetails(): string;
}

class NormalCustomer extends Customer {
    purchase(product: Product, quantity: number): void {
        product.sell(quantity);
    }

    getDetails(): string {
        return `Customer: ${this.name}, Email: ${this.email}`;
    }
}

class Store {
    products: Product[] = [];
    customers: Customer[] = [];

    addProduct(product: Product) {
        this.products.push(product);
    }

    addCustomer(customer: Customer) {
        this.customers.push(customer);
    }

    listProducts() {
        this.products.forEach(p => console.log(p.getDetails()));
    }
}
