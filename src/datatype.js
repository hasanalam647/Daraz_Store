class ProductCls {
    id = "";
    name = "";
    price = 0;

    constructor({ name, price, id }) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    validateProduct() {
        // console.log(this.id);
        if (this.id === "" || this.id === undefined) {
            alert("not valid id");
            return false;
        }
        if (this.name === "") {
            return false;
        }
        if (this.price <= 0) {
            return false;
        }
        return true;
    }

}

export {
    ProductCls
}