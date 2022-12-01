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
                <img src="./src/img/NFT_IMG/${this.img}.jpg" alt="" class="nft__item_img jsPicture">

                <div class="nft__item_descr">
                    <h5 class="nft__item_name jsTitle">${this.title}</h5>
                    <div class="nft__item_autor">
                        <img src="./src/icons/artists/${this.artist}.jpg" alt="ava" class="nft__item_avatar">
                        <div><div class="nft__item_nickname jsNameArtist">${this.artist}</div></div>
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

    const title = document.querySelector('.jsTitle'),
          picture = document.querySelector('.jsPicture'),
          nameArtist = document.querySelector('.jsNameArtist');

          parentEllement.style.transition = '1s';
          

    let curent = 1;

   setInterval(() => {
        
         if(curent < arr.length){
            console.log(curent);
            parentEllement.style.opacity = '0';

            setTimeout(() => {
                title.innerHTML = `${arr[curent].title}`;
                nameArtist.innerHTML = `${arr[curent].artist}`;
                picture.src = `./src/img/NFT_IMG/${arr[curent].img}.jpg`;

                parentEllement.style.opacity = '100%';
                
            }, 1500); 
            curent++;
         } else{
            curent = 0;
         }
         
     }, 7000);
 

}

export default homePageWelcomeAdv;