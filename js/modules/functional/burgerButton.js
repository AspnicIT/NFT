function burgerButton(btnSelect, navSelect, activeClass){
    const burgerBtn = document.querySelector(btnSelect),
      burgerNav = document.querySelector(navSelect);

   burgerBtn.addEventListener('click', () => {

    if(burgerNav.classList.contains(activeClass)){
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
        burgerNav.classList.remove(activeClass);
        document.body.style.overflow = '';

        setTimeout(() => {
            burgerNav.style.display = 'none';  
        },700);
    }

    function headerOn(){
        burgerNav.style.display = 'block';
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            burgerNav.classList.add(activeClass);
        }, 0);
    }
}

export default burgerButton;