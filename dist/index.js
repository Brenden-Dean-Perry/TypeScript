"use strict";
const user = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com"
};
console.log(user);
class Store {
    products = [];
    addProduct(product) {
        this.products.push(product);
    }
    getProducts() {
        return this.products;
    }
}
const store = new Store();
store.addProduct({ id: 1, name: "Laptop", price: 999.99 });
console.log(store.getProducts());
