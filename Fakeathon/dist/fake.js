class Product {
    id;
    name;
    price;
    stock;
    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}
class ElectronicProduct extends Product {
    warrantyPeriod;
    constructor(id, name, price, stock, warrantyPeriod) {
        super(id, name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }
    sell(quantity) {
        this.stock -= quantity;
    }
    restock(quantity) {
        this.stock += quantity;
    }
    getDetails() {
        return `${this.name} - Price: $${this.price}, Stock: ${this.stock}, Warranty: ${this.warrantyPeriod} months`;
    }
}
class ClothingProduct extends Product {
    size;
    color;
    constructor(id, name, price, stock, size, color) {
        super(id, name, price, stock);
        this.size = size;
        this.color = color;
    }
    sell(quantity) {
        this.stock -= quantity;
    }
    restock(quantity) {
        this.stock += quantity;
    }
    getDetails() {
        return `${this.name} - Price: $${this.price}, Stock: ${this.stock}, Size: ${this.size}, Color: ${this.color}`;
    }
}
class Customer {
    id;
    name;
    email;
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}
class NormalCustomer extends Customer {
    purchase(product, quantity) {
        product.sell(quantity);
    }
    getDetails() {
        return `Customer: ${this.name}, Email: ${this.email}`;
    }
}
class Store {
    products = [];
    customers = [];
    addProduct(product) {
        this.products.push(product);
    }
    addCustomer(customer) {
        this.customers.push(customer);
    }
    listProducts() {
        this.products.forEach(p => console.log(p.getDetails()));
    }
}
export {};
//# sourceMappingURL=fake.js.map