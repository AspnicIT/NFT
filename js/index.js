require('es6-promise').polyfill();

import insertHeader from './modules/header';
import insertFooter from './modules/footer';
import creatorsList from '../js/modules/creatorsList';
import createArtistPage from '../js/modules/createArtistPage';
import createNftCard from './modules/nftCards';
import timer from './modules/timer';
import {artists} from "../js/modules/artistDB";
import {artistsDB} from "../js/modules/artistDB";
import {nft} from "../js/modules/nftDB";
import {nftDBarr} from "../js/modules/nftDB";


function topAutors(ids){
    nftDBarr.forEach((item) => {
       if(item.artist == ids){
           createNftCard(item, '.artist__grid');
       }
   });   
   }
function otherAutors(){
nftDBarr.forEach((item) => {
           if(item.collection == 'other'){
               createNftCard(item, '.artist__grid');
           }
       });
}


document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');


    // timer();
          

    if(body.classList.contains('toplist')){
        insertHeader();
        insertFooter();
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
        insertHeader();
        insertFooter();
        let artistId;
        
        if(localStorage.getItem('artist')){
            artistId = localStorage.getItem('artist');
        }
        createArtistPage(artistsDB[artistId]);

        //chek for development stage. Not enough pictures. for production only 'topAutors' function.
        if(artistId === 'lindsey' ||
        artistId === 'kianaST' ||
        artistId === 'allison' ||
        artistId === 'davisWorkman' ||
        artistId === 'angel' ||
        artistId === 'lydia'
        ){
            topAutors(artistId);
        } else {
            otherAutors();
        }
            
    }
    

});

