function searchigMarketplace(){
    
    let input = document.querySelector('.search__input'),
        nfts = document.querySelectorAll('.discover__grid_item'),
        collects = document.querySelectorAll('.trend__card');

        input.oninput = function(){
           let value = this.value.trim();
           
        

           if(value){
            nfts.forEach((item) => {
                let words = item.innerText.toUpperCase();
                if(words.search(value.toUpperCase()) == -1){
                    item.classList.add('hide');
                } else{
                    item.classList.remove('hide');
                }
            });
            collects.forEach((item) => {
                let words = item.innerText.toUpperCase();
                if(words.search(value.toUpperCase()) == -1){
                    item.classList.add('hide');
                } else{
                    item.classList.remove('hide');
                }
            });
           } else{collects.forEach(item => item.classList.remove('hide'));}
        };
}

export default searchigMarketplace;