function useLocalStorage(location, selector, key) {
    let goToartistPage = document.querySelectorAll(selector);
        goToartistPage.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                let storageId = e.target.id;
                localStorage.setItem(key, storageId);
                window.location = location;
            });
        });
}

export default useLocalStorage;