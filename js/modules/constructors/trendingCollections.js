function trendingCollections(arr, selector, dotsSrc){
    let trendingParent = document.querySelector(selector);
    function createTrendCollection(obj){
        class NewTrendCollection{
            constructor(mainImg, img1, img2, name, artist, amount){
                this.mainImg = mainImg;
                this.img1 = img1;
                this.img2 = img2;
                this.name = name;
                this.artist = artist;
                this.amount = amount;
            }
            render(){
                let trendCard = document.createElement('div');
                trendCard.classList.add('trend__card');
                trendCard.innerHTML = `
                <a id="${this.name}" class="miror" href="./html/collection.html"></a>
                <img src="${dotsSrc}/src/img/NFT_IMG/${this.mainImg}.jpg" alt="img" class="trend__card_topImg">

                <div class="trend__card_inner">
                    <div class="trend__card_bottomImg"><img src="${dotsSrc}/src/img/NFT_IMG/${this.img1}.jpg" alt="cat"></div>
                    <div class="trend__card_bottomImg"><img src="${dotsSrc}/src/img/NFT_IMG/${this.img2}.jpg" alt="bear"></div>
                    <div class="trend__card_bottomImg trend__card_counter"><h5>${this.amount}+</h5></div>
                </div>

                <div class="trend__card_descr">
                    <h5 class="nft__item_name">${this.name}</h5>
                    <div class="nft__item_autor">
                        <img src="${dotsSrc}/src/icons/artists/${this.artist}.jpg" alt="ava" class="nft__item_avatar">
                        <div class="nft__item_nickname">${this.artist}</div>
                    </div>
                </div>
                `;

                trendingParent.append(trendCard);
            }
        }

        new NewTrendCollection(
            obj.mainImg,
            obj.img1,
            obj.img2,
            obj.name,
            obj.artist,
            obj.amount
        ).render();
    }



    arr.forEach(item => createTrendCollection(item));

}
export default trendingCollections;