class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = []
        this.totalCost = 0;
    }
    addProduct(product) {
        if (this.capacity >= product.quantity) {
            this.storage.push(product);
            this.capacity -= Number(product['quantity'])
            this.totalCost += Number(product['price']) * product['quantity']
        }
    }
    getProducts() {
        return this.storage.map(x => JSON.stringify(x)).join("\n")
    }
} 