
function insertFooter() {
let parentElement = document.querySelector('footer');

    let headerContent = document.createElement('div');
    headerContent.classList.add('footer');
    headerContent.innerHTML = `
    <div class="footer__container">
    <div class="footer__left">
        <a href="./index.html" class="header__logo footer__logo">
            <div class="header__imgs">
                <img src="../src/icons/header/logo_top.svg" alt="logo" class="header__img header__img_logo-1">

                <img src="../src/icons/NFT Marketplace.svg" alt="" class="header__title">
            </div>
        </a>
        <p class="footer__text">NFT marketplace UI created with Anima for Figma.</p>
        <p class="footer__text footer__join">Join our community</p>

        <div class="footer__contacts">
            <div class="footer__svg footer__discord">
                <div class="artist__links_block">
                    <a href="#"><img src="../src/icons/footer/DiscordLogo.svg" alt="dscrd"
                            class="artist__links_img"></a>
                    <a href="#"><img src="../src/icons/footer/YoutubeLogo.svg" alt="YT"
                            class="artist__links_img"></a>
                    <a href="#"><img src="../src/icons/footer/TwitterLogo.svg" alt="twit"
                            class="artist__links_img"></a>
                    <a href="#"><img src="../src/icons/footer/InstagramLogo.svg" alt="inst"
                            class="artist__links_img"></a>
                </div>
            </div>
        </div>
    </div>
    <div class="footer__center">
        <h5 class="footer__center_title">Explore</h5>
        <p class="footer__text">Marketplace</p>
        <p class="footer__text">Rankings</p>
        <p class="footer__text">Connect a wallet</p>
    </div>
    <div class="footer__right">
        <h5 class="footer__center_title">Join our weekly digest</h5>
        <p class="footer__text footer__right_central">Get exclusive promotions & updates straight to your inbox.
        </p>
        <div class="footer__form">
            <form class="join__right_form footer__right_form">
                <input type="text" class="join__right_input footer__right_input"
                    placeholder="Enter your email here">
                <button type="submit" class="join__right_btn footer__right_btn">
                    <img src="../src/icons/Envelope.svg" alt="Envelope">
                    <span>Subscribe</span>
                </button>
            </form>
        </div>
    </div>
    </div>
    <p class="footer__bottom">
        Ⓒ NFT Market. Use this template freely.
    </p>`;

    parentElement.append(headerContent);
}

export default insertFooter;
