import burgerButton from './burgerButton';


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
                <a href="./create_acount.html" class="signUP">
                    <img src="../src/icons/header/sign-1.svg" alt="" class="signUP__img-1">
                    <img src="../src/icons/header/sign-2.svg" alt="" class="signUP__img-2">
                    <span>Sign Up</span>
                </a>
            </ul>
        </nav>

        <button class="header__burgerMenu">
            <div class="header__burgerMenu_line">
                </d>
        </button>`;

        parentElement.append(headerContent);

        burgerButton();
}

export default insertHeader;
