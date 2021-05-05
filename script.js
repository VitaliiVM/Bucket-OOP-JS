if (localStorage.getItem('cart')) {//проверяю наличие в LocalStorage
    const cart = JSON.parse(localStorage.getItem('cart'));//получаю из LocalStorage cart
    let shopCart = new Cart(cart);// cart массив товаров в корзине
    console.log(shopCart);
    document.querySelector('.cart-out').innerHTML = '';//clear cart
    document.querySelector('.cart-out').append(shopCart.render());//add cart


    document.querySelector('.cart-out').addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('delete')) {
            shopCart.goodsDelete(target.dataset['articul']);
            document.querySelector('.cart-out').innerHTML = '';
            document.querySelector('.cart-out').append(shopCart.render());
            localStorage.setItem('cart', JSON.stringify(shopCart.items));
            return true;

        } else if (target.classList.contains('plus')) {
          shopCart.goodsPlus(target.dataset['articul']);
          console.log(shopCart);
          document.querySelector('.cart-out').innerHTML = '';
          document.querySelector('.cart-out').append(shopCart.render());
          localStorage.setItem('cart', JSON.stringify(shopCart.items));

        } else if (target.classList.contains('minus')) {
            shopCart.goodsMinus(target.dataset['articul']);
            document.querySelector('.cart-out').innerHTML = '';
            document.querySelector('.cart-out').append(shopCart.render());
            localStorage.setItem('cart', JSON.stringify(shopCart.items));
            return true;
        }
    });


}