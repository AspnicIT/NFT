require('es6-promise').polyfill();

import creatorsList from '../js/modules/creatorsList';
import createArtistPage from '../js/modules/createArtistPage';
import createNftCard from './modules/nftCards';
import timer from './modules/timer';
import {artists} from "../js/modules/artistDB";
import {artistsDB} from "../js/modules/artistDB";


document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');


    // timer();
          

    if(body.classList.contains('toplist')){
        creatorsList(artists);
        const goToartistPage = document.querySelectorAll('.toplist__list_item');
        goToartistPage.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                let artistId = e.target.id;
                localStorage.setItem("artist", artistId);
                window.location = 'artist.html';
            });
        });
    }

    
    if(body.classList.contains('artistPage')){
        let artistId;
        if(localStorage.getItem('artist')){
            artistId = localStorage.getItem('artist');
        }
        createArtistPage(artistsDB[artistId]);
    }
    

});