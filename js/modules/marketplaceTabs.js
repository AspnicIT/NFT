function marketplaceTabs(arrNft, arrCollect){
      const counterNft = document.querySelector('.counterNft'),
            counterCollection = document.querySelector('.counterCollection');

            counterNft.innerHTML = arrNft.length;
            counterCollection.innerHTML = arrCollect.length;

        const nftBtn = document.querySelector('.nftTab'),
              collectBtn = document.querySelector('.collectTab'),
              sectionNft = document.querySelector('.sectionNft'),
              sectionCollection = document.querySelector('.sectionCollection'),
              nftCards = document.querySelectorAll('.discover__grid_item'),
              collectCards = document.querySelectorAll('.trend__card');
              

    function  active(btn, section, counter, arr){
        btn.classList.add('artist__btn_active');
        section.classList.add('section_active');
        counter.classList.add('counter_active');
        arr.forEach((item) => item.classList.remove('hide'));
        
        
    }
    function offActive(btn, section, counter, arr){
        btn.classList.remove('artist__btn_active');
        section.classList.remove('section_active');
        counter.classList.remove('counter_active');
        arr.forEach(item => item.classList.add('hide'));
    }

    nftBtn.addEventListener('click', (e)=> {
        active(nftBtn, sectionNft, counterNft, nftCards);
        offActive(collectBtn, sectionCollection, counterCollection, collectCards);
    });
    collectBtn.addEventListener('click', (e)=> {
        offActive(nftBtn, sectionNft, counterNft, nftCards);
        active(collectBtn, sectionCollection, counterCollection, collectCards);
        

    });
}

export default marketplaceTabs;