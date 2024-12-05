

class Cart {
    constructor() {
        this.ProductList = []
    }

    addProduct( {productName, productPrice, productAmount = 1} ) {
        this.ProductList.push( {productName, productPrice, productAmount} )
        console.log(productName + " has been added to the cart (x" + productAmount + ")")
    }

    removeProduct( productName ) {
        index = this.ProductList.indexOf( {productName, ...rest} )
        if(index > -1) {
            this.ProductList.splice(index, 1)
        }
    }

    showCart() {
        console.log("List of products (name, price, amount): ")
        this.ProductList.forEach( i => console.log(i) ) 
    }
}

const cart1 = new Cart()
cart1.addProduct( {productName: "jajko", productPrice: "0.5", productAmount: 1} )
cart1.showCart()

cart1.addProduct( {productName: "japko", productPrice: "1.5", productAmount: 5} )
cart1.removeProduct( "jajko" )
cart1.showCart()