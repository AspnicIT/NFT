import linkDefault from "../functional/linksDefault";

function createArtistPage(objectFromTopList, parentSelector) {
    const topParent = document.querySelector(parentSelector);

    function createPage(obj) {
        class NewPage {
            constructor(avatar, name, sold, volume, followers, bio) {
                this.avatar = avatar;
                this.name = name;
                this.sold = sold;
                this.volume = volume;
                this.followers = followers;
                this.bio = bio;
            }
            render() {
                let welcome = document.createElement('div');
                welcome.classList.add('artist__welcome');
                welcome.innerHTML = `
            <div class="artist__topwall">
                <div class="artist__gradient"></div>
                <div class="artist__avatar">
                    <div class="artist__avawrap">
                        <img src="../src/icons/artists/${this.avatar}.jpg" alt="${this.avatar}">
                    </div>
                </div>
            </div>
            <style>
                .artist__topwall{
                    background-image: url(../src/img/artistPages/topwall/${this.avatar}.jpg);
                } 
            </style>

            <div id="welcomeArtist" class="artist__container">
                <div class="artist__header">
                    <h2 class="artist__title">${this.name}</h2>
                    <div class="artist__btns">
                        <button class="artist__copykey">
                            <img src="../src/icons/Copy.svg" alt="copy" class="artist__copykey_img">
                            <span class="copySpan">0xc0E3...B79C</span>
                        </button>
                        <button class="artist__follow">
                            
                            <svg class="artist__follow_img" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 10C2.5 9.65482 2.77982 9.375 3.125 9.375H16.875C17.2202 9.375 17.5 9.65482 17.5 10C17.5 10.3452 17.2202 10.625 16.875 10.625H3.125C2.77982 10.625 2.5 10.3452 2.5 10Z" fill="#A259FF"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2.5C10.3452 2.5 10.625 2.77982 10.625 3.125V16.875C10.625 17.2202 10.3452 17.5 10 17.5C9.65482 17.5 9.375 17.2202 9.375 16.875V3.125C9.375 2.77982 9.65482 2.5 10 2.5Z" fill="#A259FF"/>
                            </svg>

                            Follow
                        </button>
                    </div>
                </div>
                <div class="artist__info">
                    <div class="artist__info_counter">
                        <div class="artist__info_block">
                            <h4 class="artist__info_num">${this.volume} <span>ETH</span></h4>
                            <h5 class="artist__info_subtitle">Volume</h5>
                        </div>
                        <div class="artist__info_block">
                            <h4 class="artist__info_num">${this.sold}+</h4>
                            <h5 class="artist__info_subtitle">NFTs Sold</h5>
                        </div>
                        <div class="artist__info_block">
                            <h4 class="artist__info_num">${this.followers}+</h4>
                            <h5 class="artist__info_subtitle">Followers</h5>
                        </div>
                    </div>

                    <div class="artist__bio">
                        <h5 class="artist__bio_title">Bio</h5>
                        <div class="artist__info_subtitle">${this.bio}</div>
                    </div>

                    <div class="artist__links">
                        <h5 class="artist__bio_title">Links</h5>
                        <div class="artist__links_block">
                            <a class="defaultLink" href="#"><img src="../src/icons/footer/Globe.svg" alt="globe"
                                    class="artist__links_img"></a>
                            <a class="defaultLink" href="#"><img src="../src/icons/footer/DiscordLogo.svg" alt="dscrd"
                                    class="artist__links_img"></a>
                            <a class="defaultLink" href="#"><img src="../src/icons/footer/YoutubeLogo.svg" alt="YT"
                                    class="artist__links_img"></a>
                            <a class="defaultLink" href="#"><img src="../src/icons/footer/TwitterLogo.svg" alt="twit"
                                    class="artist__links_img"></a>
                            <a class="defaultLink" href="#"><img src="../src/icons/footer/InstagramLogo.svg" alt="inst"
                                    class="artist__links_img"></a>
                        </div>
                    </div>
                </div>
            </div>
            `;
                topParent.append(welcome);
                linkDefault(".defaultLink");
               
                let btn = document.querySelector('.artist__copykey'),
                    spanBtn = document.querySelector('.copySpan'),
                    follow = document.querySelector('.artist__follow'),
                    followImg = document.querySelector('.artist__follow_img');
        
                    btn.addEventListener('click', () =>{
                        navigator.clipboard.writeText('0xc0E3458OPRT7BH3NncfRE2B79C');
                        spanBtn.innerHTML = `number copied`;
                        setTimeout(() => {
                            spanBtn.innerHTML = `0xc0E3...B79C`; 
                        }, 2000);
                        
                    });
                    follow.addEventListener('click', () => {
                        followImg.classList.toggle('rotate');
                    });
          
                
            }
        }

        new NewPage(
            obj.avatar,
            obj.name,
            obj.sold,
            obj.volume,
            obj.followers,
            obj.bio
        ).render();
    }

    createPage(objectFromTopList);
}


export default createArtistPage;
