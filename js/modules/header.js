function insertHeader() {
    let parentElement = document.querySelector('header');   

    let headerContent = document.createElement('div');
    headerContent.classList.add('header');
    headerContent.innerHTML = `
        <a href="../index.html" class="header__logo">

            <img src="../src/icons/header/logo_top.svg" alt="logo" class="header__img">

            <img src="../src/icons/NFT Marketplace.svg" alt="" class="header__title">
        </a>

        <nav class="header__nav header__burgerNav">
            <ul class="header__ul">
                <li class="header__link"><a href="./marketplace.html">Marketplace</a></li>
                <li class="header__link"><a href="./topCreators.html">Rankings</a></li>
                <li class="header__link"><a href="./wallet.html">Connect a wallet</a></li>
                <button class="signUP">
                    <img src="../src/icons/header/sign-1.svg" alt="" class="signUP__img-1">
                    <img src="../src/icons/header/sign-2.svg" alt="" class="signUP__img-2">
                    <span>Sign Up</span>
                </button>
            </ul>
        </nav>

        <button class="header__burgerMenu">
            <div class="header__burgerMenu_line">
                </d>
        </button>`;

        parentElement.append(headerContent);

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

export default insertHeader;
