

function createNftCard(objectNFT, selectorForParent) {
    let parentElement = document.querySelector(selectorForParent);

    function nftCards(obj) {
        class Nft {
            constructor(img, title, artist, artistAvat, price, hBid) {
                this.img = img;
                this.title = title;
                this.artist = artist;
                this.artistAvat = artistAvat;
                this.price = price;
                this.hBid = hBid;
            }
            render() {
                let card = document.createElement('div');
                card.classList.add('discover__grid_item');
                card.innerHTML =
                `                                    
                <img src="../src/img/NFT_IMG/${this.img}.jpg" alt="nft" class="discover__grid">
                <div class="discover__grid_descr">
                    <h5 class="nft__item_name discover__grid_name">${this.title}</h5>
                    <div class="discover__grid_autor">
                        <img src="../src/icons/artists/${this.artistAvat}.jpg" alt="ava" class="nft__item_avatar">
                        <div class="nft__item_nickname discover__grid_nickname">${this.artist}</div>
                    </div>
                    <div class="discover__grid_price">
                        <div class="discover__grid_ETH">
                            <span class="discover__grid_span">Price</span>
                            <div class="nft__item_nickname discover__grid_nickname">${this.price} ETH</div>
                        </div>
                        <div class="discover__grid_wETH">
                            <span class="discover__grid_span">Highest Bid</span>
                            <div class="nft__item_nickname discover__grid_nickname">${this.hBid} wETH</div>
                        </div>
                    </div>
                    
                </div>                    
                `;

                parentElement.append(card);
            }
        }
        new Nft(
            obj.img,
            obj.title,
            obj.artist,
            obj.artistAvat,
            obj.price,
            obj.hBid
        ).render(

        );
    }

    nftCards(objectNFT);
}

export default createNftCard;