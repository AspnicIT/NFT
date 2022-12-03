function homePageBrowsersSection(){
    let themes = document.querySelectorAll('.category__grid_item');

    themes.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            item.style.opacity = '20%';
            setTimeout(() => {
                item.style.opacity = '100%';
            }, 1000);
        });
    });
}

export default homePageBrowsersSection;