function marketplaceTabs(
    arrNft, arrCollect,
    countNftSelect, countCollectSelect,
    nftBtnSel, collectBtnSel,
    sectNftSel, sectCollectSel,
    nftCardsSel, collectCardSel,
    hide, btnActivClass,
    sectActiveClass, counterAaactiveClass
    ){
      const counterNft = document.querySelector(countNftSelect),
            counterCollection = document.querySelector(countCollectSelect);

            counterNft.innerHTML = arrNft.length;
            counterCollection.innerHTML = arrCollect.length;

        const nftBtn = document.querySelector(nftBtnSel),
              collectBtn = document.querySelector(collectBtnSel),
              sectionNft = document.querySelector(sectNftSel),
              sectionCollection = document.querySelector(sectCollectSel),
              nftCards = document.querySelectorAll(nftCardsSel),
              collectCards = document.querySelectorAll(collectCardSel);

              collectCards.forEach(item => item.classList.add(hide));
              
              

    function  active(btn, section, counter, arr){
        btn.classList.add(btnActivClass);
        section.classList.add(sectActiveClass);
        counter.classList.add(counterAaactiveClass);
        arr.forEach((item) => item.classList.remove(hide));
        
        
    }
    function offActive(btn, section, counter, arr){
        btn.classList.remove(btnActivClass);
        section.classList.remove(sectActiveClass);
        counter.classList.remove(counterAaactiveClass);
        arr.forEach(item => item.classList.add(hide));
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