function burgerButton(){
    const burgerBtn = document.querySelector('.header__burgerMenu'),
      burgerNav = document.querySelector('.header__burgerNav');

   burgerBtn.addEventListener('click', () => {

    if(burgerNav.classList.contains('thin')){
        headerOff();
    } else {
         headerOn();
    }

   });

    function headerOff(){
        burgerNav.classList.remove('thin');
        setTimeout(() => {
            burgerNav.style.display = 'none';  
        },700);
    }

    function headerOn(){
        burgerNav.style.display = 'block';
        setTimeout(() => {
            burgerNav.classList.add('thin');
        }, 0);
    }
}

export default burgerButton;