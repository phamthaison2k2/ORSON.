const modal = document.querySelector('.js-modal');
const register = document.querySelector('.js-auth-form-register');
const logIn = document.querySelector('.js-auth-form-logIn');
const registerClick = document.querySelector('.js-header__navbar-item-register');
const logInClick = document.querySelector('.js-header__navbar-item-logIn');
const registerBacks = document.querySelectorAll('.js-auth-form__controls-back');
const registerLogIn = document.querySelector('.js-auth-form__switch-btn-register');
const registerForm = document.querySelector('.register-form');
const logInRegister = document.querySelector('.js-auth-form__switch-btn-logIn')



registerClick.onclick = function() {
    modal.style.display = 'flex';
    registerForm.classList.add('open-form')
    register.style.display = 'flex';
}

logInClick.onclick = function() {
    modal.style.display = 'flex';
    logIn.classList.add('open-form')
}

registerBacks.forEach((registerBack) => {
    registerBack.onclick = function() {
        registerForm.classList.remove('open-form');
        modal.style.display = 'none';
        logIn.classList.remove('open-form')

    }
})

registerLogIn.onclick = function() {
    logIn.classList.add('open-form');
    register.style.display = 'none';
}

logInRegister.onclick = function() {
    registerForm.classList.add('open-form');
    register.style.display = 'flex';
    logIn.classList.remove('open-form');
}



// mobile search

const mobileInput = document.querySelector('.header__search');
const mobileSearch = document.querySelector('.header__mobile-search');


mobileSearch.onclick = function() {
    mobileInput.classList.toggle('hide-on-mobile');
}


// mobile & tablet cart

const cart = document.querySelector('.header__cart-wrap');
const cartList = document.querySelector('.header__cart-list--no-cart');


cart.onclick = function() {
    cartList.classList.toggle('show-on-mobile-tablet')
}