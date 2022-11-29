require('es6-promise').polyfill();

import creatorsList from '../js/modules/creatorsList';
import createArtistPage from '../js/modules/createArtistPage';
import { artists } from "../js/modules/artistDB";


document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
          

    if(body.classList.contains('toplist')){
        creatorsList();
        const goToartistPage = document.querySelectorAll('.toplist__list_item');
        goToartistPage.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                console.log(e.target);
                // window.location = 'artist.html';
            });
        });

    } 
    else 
    if(body.classList.contains('artistPage')){
        createArtistPage(artists[7]);
    }
     

});