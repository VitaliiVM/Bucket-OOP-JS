if (localStorage.getItem('cart')) {//проверяю наличие в LocalStorage
    const cart = JSON.parse(localStorage.getItem('cart'));
    let shopCart = new Cart(cart);
    console.log(shopCart);
}