function tabsOnArtistPage(
    btnsSelect,
    sectionsSelect,
    countrsSel,
    sectActiveClass,
    counterActiveClass
    ) {
    let btns = document.querySelectorAll(btnsSelect),
        section = document.querySelectorAll(sectionsSelect),
        counter = document.querySelectorAll(countrsSel);

    function active(elem, activClass){
        elem.classList.add(activClass);

    }
    function unActive (elem, activClass){
        elem.classList.remove(activClass);
    }

    btns.forEach((item, i) => {
        item.addEventListener('click', () => {

            section.forEach(item => unActive(item, sectActiveClass));
            counter.forEach(item => unActive(item, counterActiveClass));

            active(section[i], sectActiveClass);
            active(counter[i], counterActiveClass);
        });
    });
}

export default tabsOnArtistPage;