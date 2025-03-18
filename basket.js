const basket = (function () {
    let items = [];
    return {
        items: items,
        addItem: function (item) {
            items.push(item)
        },
        removeItem: function (itemToRemove) {
            let itemIndex = items.findIndex(item => {
                return item.name == itemToRemove
            })
            if (itemIndex > -1) {
                console.log("index", itemIndex)
                items = items.splice(itemIndex, 1)
            }

        },
        totalItems: function () {
            return items.length
        },
        totalPrice: function () {
            let totalPrice = items.reduce((prev, current) => prev + current.price, 0)
            return totalPrice
        },
        content: function () {
            return items
        },
        contentString: function () {
            return JSON.stringify(items)
        },
        clear: function () {
            items = [];
        },
        applyDiscount: function (percentage) {
            let totalPrice = items.reduce((prev, current) => prev + current.price, 0)
            totalPrice = totalPrice * (100 - percentage) / 100
            return totalPrice
        }
    }
})()

module.exports = basket