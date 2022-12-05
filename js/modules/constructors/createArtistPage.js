import linkDefault from "../functional/linksDefault";

function createArtistPage(objectFromTopList) {
    const topParent = document.querySelector('.welcome');

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
                            <img src="../src/icons/Plus.svg" alt="plus" class="artist__follow_img">
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
