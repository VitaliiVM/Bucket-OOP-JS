

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

    render() {
        let table = document.createElement('table');//создал таблицу
        table.classList.add(this.cartClass);//добавил класс
        for (let key in this.items) {//прошелся циклом по массиву товаров
            let goods = this.items[key];//промежуточная переменная
            //делаю строку
            const tr = document.createElement('tr');
            //делаю удаление товара с корзины
            let td = document.createElement('td');
            let button = document.createElement('button');//создал кнопку
            button.classList.add(this.deleteClass);//добавил класс
            button.classList.add('button-primary');//добавил для визуального оформления класс mustard ui
            button.innerHTML=  "x";//рисую крестик на кнопке
            button.setAttribute('data-articul', key);//установил аттрибуты для кнопки
            td.append(button);
            tr.append(td);
            //делаю картинку
            td = document.createElement('td');
            let img = document.createElement('img');
            img.src = goods.image;
            td.append(img);
            tr.append(td);
            //делаю название
            td = document.createElement('td');
            //создаю заголовок
            let  h4 = document.createElement('h4');
            h4.innerHTML = goods.name;
            td.append(h4);
            tr.append(td);
            //делаю минус товара
            td = document.createElement('td');
            button = document.createElement('button');
            button.classList.add(this.minusClass);//добавил класс через конструктор
            button.classList.add('button-primary');//добавил класс mustard ui
            button.innerHTML = '-';
            button.setAttribute('data-articul', key);
            td.append(button);
            tr.append(td);

        }
        //делаю full total для суммы товаров
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.setAttribute('colspan',7);//merge 7 td
        td.style.textAlign = 'right';//выровнял по правому краю
        td.innerHTML = '<span class="total">Total:</span>' + this.getTotal()
        + ' ' + this.currency;//вставляю текст и добавляю метод подсчета getToatal и валюту
        tr.append(td);
        table.append(tr);
        return table;
    }
}