function useLocalStorage(location) {
    let goToartistPage = document.querySelectorAll('.toplist__list_miror');
        goToartistPage.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                let artistId = e.target.id;
                localStorage.setItem("artist", artistId);
                window.location = location;
            });
        });
}

export default useLocalStorage;