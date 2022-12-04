function linkDefault(selectorSeveralLinks){
    let severalLinks = document.querySelectorAll(selectorSeveralLinks);
        
        if(severalLinks){
            severalLinks.forEach(item => item.addEventListener('click', (e) => e.preventDefault()));
        }     
}

export default linkDefault;