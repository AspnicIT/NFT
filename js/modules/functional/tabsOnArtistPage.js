function tabsOnArtistPage() {
    let btns = document.querySelectorAll('.artist__btn'),
        section = document.querySelectorAll('.artist__section '),
        counter = document.querySelectorAll('.artist__counter ');

    function active(elem, activClass){
        elem.classList.add(activClass);

    }
    function unActive (elem, activClass){
        elem.classList.remove(activClass);
    }

    btns.forEach((item, i) => {
        item.addEventListener('click', () => {

            section.forEach(item => unActive(item, 'section_active'));
            counter.forEach(item => unActive(item, 'counter_active'));

            active(section[i], 'section_active');
            active(counter[i], 'counter_active');
        });
    });
}

export default tabsOnArtistPage;