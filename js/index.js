require('es6-promise').polyfill();

import insertHeader from './modules/header';
import burgerButton from './modules/burgerButton';
import homePageWelcomeAdv from './modules/homePageWelcomeAdv';
import insertFooter from './modules/footer';
import topCreatorsOnHomePage from './modules/topCreatorsOnHomePage';
import creatorsList from '../js/modules/creatorsList';
import useLocalStorage from './modules/localStorage';
import createArtistPage from '../js/modules/createArtistPage';
import createNftCard from './modules/createNftCards';
import timer from './modules/timer';
import {artists} from "../js/modules/artistDB";
import {artistsDB} from "../js/modules/artistDB";
import {twelweArtistsForHomePageArr } from '../js/modules/artistDB';
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

    if(body.classList.contains('home')){



        burgerButton();
        homePageWelcomeAdv(nftDBarr);

        
        topCreatorsOnHomePage(twelweArtistsForHomePageArr);
        useLocalStorage('./html/artist.html');
        createNftCard(nft.happyRobot032, '.discover__grid');
        createNftCard(nft.dancingRobot56, '.discover__grid');
        createNftCard(nft.iceCreamApe, '.discover__grid');
        timer();
    }

    if(body.classList.contains('marketplace')){
        insertHeader();
        insertFooter();
        nftDBarr.forEach(item => createNftCard(item, '.artist__grid'));
    }


          

    if(body.classList.contains('toplist')){
        insertHeader();
        insertFooter();
        creatorsList(artists);
        useLocalStorage('artist.html');
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
        artistId === 'lydia' ||
        artistId === 'philip'
        ){
            topAutors(artistId);
        } else {
            otherAutors();
        }      
    }
    

});

