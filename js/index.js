require('es6-promise').polyfill();

import burgerButton from './modules/functional/burgerButton';
import homePageWelcomeAdv from './modules/constructors/homePageWelcomeAdv';
import trendingCollections from './modules/constructors/trendingCollections';
import topCreatorsOnHomePage from './modules/constructors/topCreatorsOnHomePage';
import homePageBrowsersSection from './modules/functional/homePageBrowsersSection';
import useLocalStorage from './modules/functional/localStorage';
import insertHeader from './modules/innerHtml/header';
import insertFooter from './modules/innerHtml/footer';
import linkDefault from './modules/functional/linksDefault';
import createArtistPage from './modules/constructors/createArtistPage';
import tabsOnArtistPage from './modules/functional/tabsOnArtistPage';
import welcomeCollectionPage from './modules/constructors/createWelcomeCollectionPage';
import createNftCard from './modules/constructors/createNftCards';
import searchigMarketplace from './modules/functional/searchMarketplace';
import marketplaceTabs from './modules/functional/marketplaceTabs';
import topCreatorsTabs from './modules/functional/topCreatorsTabs';
import timer from './modules/functional/timer';
import {artistsArr} from "./modules/dataBase/artistDB";
import {artistsDB} from "./modules/dataBase/artistDB";
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

        burgerButton('.header__burgerMenu', '.header__burgerNav', 'thin');
        homePageWelcomeAdv(nftDBarr, '.main__right');
        trendingCollections(trendCollectArr, '.trend__container', '.');
        topCreatorsOnHomePage(artistsArr.slice(0, 12), '.creats__grid');
        homePageBrowsersSection();
        useLocalStorage('./html/artist.html', '.toplist__list_miror', "artist");
        createNftCard(nft.happyRobot032, '.discover__grid', '.');
        createNftCard(nft.dancingRobot56, '.discover__grid', '.');
        createNftCard(nft.iceCreamApe, '.discover__grid', '.');
        useLocalStorage('./html/artist.html', '.mirrorFromAutor', "artist");
        useLocalStorage('./html/collection.html', '.mirrorFromCollection', "collection");
        useLocalStorage('./html/collection.html', '.miror', "collection");
        timer('2023-06-22', '.timer__blocks');
        linkDefault('.defaultLink');
    }

    if(body.classList.contains('marketplace')){
        insertHeader('header');
        insertFooter('footer');
        nftDBarr.forEach(item => createNftCard(item, '.artist__grid', '..'));
        useLocalStorage('./artist.html', '.mirrorFromAutor', "artist");
        useLocalStorage('./collection.html', '.mirrorFromCollection', "collection");
        trendingCollections(collectItemsArr, '.content__grid', '..');
        useLocalStorage('./collection.html', '.miror', "collection");
        marketplaceTabs(
            nftDBarr, collectDbArr,
            '.counterNft', '.counterCollection',
            '.nftTab', '.collectTab',
            '.sectionNft', '.sectionCollection',
            '.discover__grid_item', '.trend__card',
            'hide', 'artist__btn_active',
            'section_active', 'counter_active'
            );
        searchigMarketplace('.search__input', '.discover__grid_item', '.trend__card', 'hide');
    }


    if(body.classList.contains('toplist')){
        insertHeader('header');
        insertFooter('footer');
        topCreatorsTabs(
            '.toplist__list',
            '.tabDay', '.tabWeek',
            '.tabMonth', '.tabAll', 
            'today', 'week',
            'month', 'time',
            'artist__btn_active', 'section_active'
        );
    }

    
    if(body.classList.contains('artistPage')){
        insertHeader('header');
        insertFooter('footer');
        let artistId;
        
        if(localStorage.getItem('artist')){
            artistId = localStorage.getItem('artist');
        }
        createArtistPage(artistsDB[artistId], '.welcome');

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
        tabsOnArtistPage(
            '.artist__btn',
            '.artist__section',
            '.artist__counter',
            'section_active',
            'counter_active'
        );
    }

    if(body.classList.contains('collection')){
        insertHeader('header');
        insertFooter('footer');
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
        useLocalStorage('artist.html', '.creats__btn', "artist");
        useLocalStorage('artist.html', '.miror', "artist");
        useLocalStorage('#', '.mirrorFromCollection', "collection");
        linkDefault('.defaultLink');
    }

    if(body.classList.contains('acountPage')){
        insertHeader('header');
        insertFooter('footer');
    }
    if(body.classList.contains('walletPage')){
        insertHeader('header');
        insertFooter('footer');
        linkDefault('.wallet__link');
    }
    

});

