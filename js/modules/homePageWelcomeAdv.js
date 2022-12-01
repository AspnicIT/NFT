function homePageWelcomeAdv(arr){
    let parentEllement = document.querySelector('.main__right');

    function welcom(obj){
        class WelcomeAdv {
            constructor(img, title, artist){
                this.img = img;
                this.title = title;
                this.artist = artist;
            }
            render() {
                let advBlock = document.createElement('div');
                advBlock.classList.add('nft__item');
                advBlock.style.width = '100%';
                advBlock.innerHTML = `
                <img src="./src/img/NFT_IMG/${this.img}.jpg" alt="" class="nft__item_img">

                <div class="nft__item_descr">
                    <h5 class="nft__item_name">${this.title}</h5>
                    <div class="nft__item_autor">
                        <img src="./src/icons/artists/${this.artist}.jpg" alt="ava" class="nft__item_avatar">
                        <a href="./html/artist.html"><div class="nft__item_nickname">Animakid</div></a>
                    </div>
                </div>
                `;
                parentEllement.append(advBlock);

            }
        }

        new WelcomeAdv(
            obj.img,
            obj.title,
            obj.artist
        ).render();
    }

    welcom(arr[0]);

    setInterval(() => {
        let curent = 1;
        welcom(arr[curent]);
        curent >= arr.length ? curent = 0 : curent++;
    }, 1000);
    
    
}

export default homePageWelcomeAdv;