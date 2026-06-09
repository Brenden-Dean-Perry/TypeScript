type User = {
    id: number;
    name: string;
    email: string;
};

const user: User = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com"
};

console.log(user);

interface Product {
    id: number;
    name: string;
    price: number;
}

class Store {
    private products: Product[] = [];
    addProduct(product: Product): void {
        this.products.push(product);
    }
    
    getProducts(): Product[] {
        return this.products;
    }
}

const store = new Store();
store.addProduct({ id: 1, name: "Laptop", price: 999.99 });
console.log(store.getProducts());