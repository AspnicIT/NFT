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

   burgerNav.addEventListener('click', (e) => {
        if(e.target == burgerNav){
            headerOff();
        }
   });

    function headerOff(){
        burgerNav.classList.remove('thin');
        document.body.style.overflow = '';

        setTimeout(() => {
            burgerNav.style.display = 'none';  
        },700);
    }

    function headerOn(){
        burgerNav.style.display = 'block';
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            burgerNav.classList.add('thin');
        }, 0);
    }
}

export default burgerButton;