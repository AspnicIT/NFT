require('es6-promise').polyfill();

import insertHeader from './modules/header';
import burgerButton from './modules/burgerButton';
import homePageWelcomeAdv from './modules/homePageWelcomeAdv';
import insertFooter from './modules/footer';
import topCreatorsOnHomePage from './modules/topCreatorsOnHomePage';
import creatorsList from '../js/modules/creatorsList';
import useLocalStorage from './modules/localStorage';
import createArtistPage from '../js/modules/createArtistPage';
import welcomeCollectionPage from './modules/createWelcomeCollectionPage';
import createNftCard from './modules/createNftCards';
import timer from './modules/timer';
import {artists} from "../js/modules/artistDB";
import {artistsDB} from "../js/modules/artistDB";
import {twelweArtistsForHomePageArr } from '../js/modules/artistDB';
import {nft} from "../js/modules/nftDB";
import {nftDBarr} from "../js/modules/nftDB";
import {collectDbObj} from "./modules/collectDb";
import {collectDbArr} from "./modules/collectDb";


function topAutors(artistId){
    nftDBarr.forEach((item) => {
       if(item.artist == artistId){
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
        useLocalStorage('./html/artist.html', '.toplist__list_miror', "artist");
        createNftCard(nft.happyRobot032, '.discover__grid');
        createNftCard(nft.dancingRobot56, '.discover__grid');
        createNftCard(nft.iceCreamApe, '.discover__grid');
        useLocalStorage('./html/artist.html', '.mirrorFromAutor', "artist");
        useLocalStorage('./html/collection.html', '.mirrorFromCollection', "collection");
        timer();
    }

    if(body.classList.contains('marketplace')){
        insertHeader();
        insertFooter();
        nftDBarr.forEach(item => createNftCard(item, '.artist__grid'));
        useLocalStorage('./artist.html', '.mirrorFromAutor', "artist");
        useLocalStorage('./collection.html', '.mirrorFromCollection', "collection");
    }


          

    if(body.classList.contains('toplist')){
        insertHeader();
        insertFooter();
        creatorsList(artists);
        useLocalStorage('artist.html', '.toplist__list_miror', "artist");
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
        useLocalStorage('#', '.mirrorFromAutor');
        useLocalStorage('./collection.html', '.mirrorFromCollection', "collection");
    }

    if(body.classList.contains('collection')){
        insertHeader();
        insertFooter();
        let collectionId;
        if(localStorage.getItem('collection')){
            collectionId = localStorage.getItem('collection');
        }
        welcomeCollectionPage(collectDbObj[collectionId]);
        nftDBarr.forEach((item) => {
            if(item.collection == collectionId){
                createNftCard(item, '.content__grid');
            }
        });
    }
    

});

