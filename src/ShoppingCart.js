class ShoppingCart {
    constructor(items) {
    this.items = []
    }
    getItems() {
    return this.items
    }
    addItem(name,quantity,pricePerUnit) {
    return this.items.push({name, quantity, pricePerUnit})
    }
    clear() {
    this.items = []
    }
    total() {
       return this.items.reduce((a, b) =>
       a + b.quantity * b.pricePerUnit,0)
    }
    }

    class Cart extends ShoppingCart {
        constructor(items) {
            super(items)
            this.name       = "Name of the Item",
            this.quantity   = 1,
            this.pricePerUnit = 99.99
            
        }
        
    }



module.exports = ShoppingCart, Cart