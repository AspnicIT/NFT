require('es6-promise').polyfill();

import burgerButton from './modules/functional/burgerButton';
import homePageWelcomeAdv from './modules/constructors/homePageWelcomeAdv';
import trendingCollections from './modules/constructors/trendingCollections';
import topCreatorsOnHomePage from './modules/constructors/topCreatorsOnHomePage';
import creatorsList from './modules/constructors/creatorsList';
import useLocalStorage from './modules/functional/localStorage';
import insertHeader from './modules/innerHtml/header';
import insertFooter from './modules/innerHtml/footer';
import createArtistPage from './modules/constructors/createArtistPage';
import welcomeCollectionPage from './modules/constructors/createWelcomeCollectionPage';
import createNftCard from './modules/constructors/createNftCards';
import marketplaceTabs from './modules/marketplaceTabs';
import timer from './modules/functional/timer';
import {artists} from "./modules/dataBase/artistDB";
import {artistsDB} from "./modules/dataBase/artistDB";
import {twelweArtistsForHomePageArr } from './modules/dataBase/artistDB';
import {nft} from "./modules/dataBase/nftDB";
import {nftDBarr} from "./modules/dataBase/nftDB";
import { trendCollectArr } from './modules/dataBase/nftDB';
import {collectDbObj} from "./modules/dataBase/collectDb";
import {collectDbArr} from "./modules/dataBase/collectDb";
import {collectItemsArr} from './modules/constructors/creatObjectOfCollections';


function topAutors(artistId){
    nftDBarr.forEach((item) => {
       if(item.artist == artistId){
           createNftCard(item, '.artist__grid', '..');
       }
   });   
   }
function otherAutors(){
nftDBarr.forEach((item) => {
           if(item.collection == 'other'){
               createNftCard(item, '.artist__grid', '..');
           }
       });
}


document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');

    if(body.classList.contains('home')){

        burgerButton();
        homePageWelcomeAdv(nftDBarr);
        trendingCollections(trendCollectArr, '.trend__container', '.');
        topCreatorsOnHomePage(twelweArtistsForHomePageArr);
        useLocalStorage('./html/artist.html', '.toplist__list_miror', "artist");
        createNftCard(nft.happyRobot032, '.discover__grid', '.');
        createNftCard(nft.dancingRobot56, '.discover__grid', '.');
        createNftCard(nft.iceCreamApe, '.discover__grid', '.');
        useLocalStorage('./html/artist.html', '.mirrorFromAutor', "artist");
        useLocalStorage('./html/collection.html', '.mirrorFromCollection', "collection");
        useLocalStorage('./html/collection.html', '.miror', "collection");
        timer('2023-06-22');
    }

    if(body.classList.contains('marketplace')){
        insertHeader();
        insertFooter();
        nftDBarr.forEach(item => createNftCard(item, '.artist__grid', '..'));
        useLocalStorage('./artist.html', '.mirrorFromAutor', "artist");
        useLocalStorage('./collection.html', '.mirrorFromCollection', "collection");
        trendingCollections(collectItemsArr, '.content__grid', '..');
        useLocalStorage('./collection.html', '.miror', "collection");
        marketplaceTabs(nftDBarr, collectDbArr);
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
                createNftCard(item, '.content__grid', '..');
            }
        });
        useLocalStorage('artist.html', '.mirrorFromAutor', "artist");
        useLocalStorage('#', '.mirrorFromCollection', "collection");
    }
    

});

