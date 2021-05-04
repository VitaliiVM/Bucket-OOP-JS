

class Cart {
    constructor(
        items, // массив с товарами в корзине
        cartClass = "cart",
        plusClass = 'plus',
        minusClass = 'minus',
        deleteClass = 'delete',
        currency = '',
    ) {
        this.items = items;
        this.plusClass = plusClass;
        this.minusClass = minusClass;
        this.deleteClass = deleteClass;
        this.cartClass = cartClass;
        this.currency = 'UAH';
    }

    goodsPlus(art) {
        this.items[art]['count']++;
    }
    goodsMinus(art) {
        if (this.items[art]['count'] - 1 === 0) {
            this.goodsDelete(art);
        } else {
            this.items[art]['count']--;
        }
    }
    goodsDelete(art) {
        delete this.items[art];
    }
    getTotal() {
        let total = 0;
        for (let key in this.items) {
            total += this.items[key]['count'] * this.items[key]['price'];
        }
        return total;
    }
}