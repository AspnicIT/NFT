function welcomeCollectionPage(objectCollection){
    let sectionParent = document.querySelector('.collect');
    function createWelcomeColecctionPage(obj){
        class WelcomeCollection{
            constructor(name, title, date, artist, tag1, tag2, tag3, tag4, descr){
                this.name = name;
                this.title = title;
                this.date = date;
                this.artist = artist;
                this.tag1 = tag1;
                this.tag2 = tag2;
                this.tag3 = tag3;
                this.tag4 = tag4;
                this.descr = descr;
            }
            render(){
                let welcome = document.createElement('div');
                welcome.classList.add('collect__inner');
                welcome.innerHTML = `
                <div class="collect__topwall"></div>
            <div class="collect__container">
                <div class="collect__timer">
                    <div class="collect__timer_inner">
                        <a href="#" class="collect__timer_link">Place Bid</a>
                    </div>
                    <div class="timer">
                        <div class="timer__body">
                            <span class="discover__grid_span timer__title">Auction ends in:</span>

                            <div class="timer__blocks">
                                <div class="timer__block">
                                    <h3 id="hours" class="timer__counter">59</h3>
                                    <span class="discover__grid_span timer__subtitle">Hours</span>
                                </div>
                                <h4>:</h4>
                                <div class="timer__block">
                                    <h3 id="minutes" class="timer__counter">59</h3>
                                    <span class="discover__grid_span timer__subtitle">Minutes</span>
                                </div>
                                <h4>:</h4>
                                <div class="timer__block">
                                    <h3 id="seconds" class="timer__counter">59</h3>
                                    <span class="discover__grid_span timer__subtitle">Seconds</span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div class="collect__info">

                    <div class="collect__info_block1">
                        <h2 class="collect__info_title">${this.title}</h2>
                        <p class="collect__info_date">Minted on ${this.date}</p>
                    </div>

                    <div class="collect__info_block2">
                        <h5 class="collect__info_subtitle">Created By</h5>
                        <div class="nft__item_autor">
                            <img src="../src/icons/artists/${this.artist}.jpg" alt="ava" class="nft__item_avatar">
                            <a href="../html/artist.html" class="toplist__miror">
                                <div class="nft__item_nickname">${this.artist}</div>
                            </a>
                        </div>
                    </div>

                    <div class="collect__info_block3">
                        <h5 class="collect__info_subtitle">Description</h5>
                        <article>
                            <p class="collect__info_text">
                                ${this.descr}
                            </p>
                        </article>
                    </div>

                    <div class="collect__info_block4">
                        <h5 class="collect__info_subtitle">Detales</h5>
                        <div class="collect__info_detales">
                            <a href="#" class="collect__info_linkToDetales">
                                <img class="collect__info_globe" src="../src/icons/footer/Globe.svg" alt="">
                                <p class="collect__info_text">View on Etherscan</p>
                            </a>
                            <a href="#" class="collect__info_linkToDetales">
                                <img class="collect__info_globe" src="../src/icons/footer/Globe.svg" alt="">
                                <p class="collect__info_text">View Original</p>
                            </a>
                        </div>
                    </div>

                    <div class="collect__info_block5">
                        <h5 class="collect__info_subtitle">Tags</h5>
                        <div class="collect__info_tags">
                            <a href="#" class="collect__info_tag">${this.tag1}</a>
                            <a href="#" class="collect__info_tag">${this.tag2}</a>
                            <a href="#" class="collect__info_tag">${this.tag3}</a>
                            <a href="#" class="collect__info_tag">${this.tag4}</a>
                        </div>
                    </div>
                </div>
                <div class="collect__wrapTitle">
                    <h3 class="title">More from this artist</h3>
                    <div class="creats__wrapBtn content__btn">
                        <a id="${this.artist}" href="../html/artist.html">
                            <button class="creats__btn">
                                <img src="../src/icons/ArrowRight.svg" alt="" class="creats__img-1 content__arrow">
                                Go To Artist Page
                            </button>
                        </a>
                    </div>
                </div>
            </div>
                `;

                sectionParent.append(welcome);
                const topwall = document.querySelector('.collect__topwall');
                topwall.style.backgroundImage = `url(../src/img/topwallCollection/${this.name}.jpg)`;

            }
        }
        new WelcomeCollection(
            obj.name,
            obj.title,
            obj.date,
            obj.artist,
            obj.tag1,
            obj.tag2,
            obj.tag3,
            obj.tag4,
            obj.descr
        ).render();
    }
    createWelcomeColecctionPage(objectCollection);
}

export default welcomeCollectionPage;