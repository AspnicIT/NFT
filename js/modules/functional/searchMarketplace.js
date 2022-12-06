function searchigMarketplace(inputSel, nftsSel, collectsSel, hideClass){
    
    let input = document.querySelector(inputSel),
        nfts = document.querySelectorAll(nftsSel),
        collects = document.querySelectorAll(collectsSel);

        input.oninput = function(){
           let value = this.value.trim();
           
        

           if(value){
            nfts.forEach((item) => {
                let words = item.innerText.toUpperCase();
                if(words.search(value.toUpperCase()) == -1){
                    item.classList.add();
                } else{
                    item.classList.remove(hideClass);
                }
            });
            collects.forEach((item) => {
                let words = item.innerText.toUpperCase();
                if(words.search(value.toUpperCase()) == -1){
                    item.classList.add(hideClass);
                } else{
                    item.classList.remove(hideClass);
                }
            });
           } else{collects.forEach(item => item.classList.remove(hideClass));}
        };
}

export default searchigMarketplace;