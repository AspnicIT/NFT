import { artistsArr } from "../dataBase/artistDB";
import creatorsList from "../constructors/creatorsList";
import {getVolume} from "../dataBase/artistDB";
import useLocalStorage from "../functional/localStorage";

let toplist = document.querySelector('.toplist__list');

const soldValue = [];
artistsArr.forEach((item) => soldValue.push(item.sold));

function clear(parentElem, num){
    for(let i = 1; i <= num; i++){
        parentElem.firstChild.remove();
    }
}
function tabArreys(newArr, percent){
    artistsArr.forEach((item) => {getSold(item, 'sold', percent, newArr);});
}

function getSold(obj, sold, percent){
    let k = obj[sold] - (obj[sold] * percent);
    obj[sold] = k.toFixed();
    getVolume(obj, 'sold', 'volume', 0.033);
}
function recovery(){
    artistsArr.forEach((item, i) => {
        item.sold = soldValue[i];
        getVolume(item, 'sold', 'volume', 0.033);
    });
       
}


function topCreatorsTabs(){
     
    creatorsList(artistsArr);

    const dayBtn = document.querySelector('.tabDay'),
        weekBtn = document.querySelector('.tabWeek'),
        monthBtn = document.querySelector('.tabMonth'),
        allTimeBtn = document.querySelector('.tabAll'),

        toDay = document.getElementById('today'),
        toWeek = document.getElementById('week'),
        toMonth = document.getElementById('month'),
        toTime = document.getElementById('time');

        function active(btn, nameTab){
            btn.classList.add('artist__btn_active');
            nameTab.classList.add('section_active');
        }

        function notActive(btn, nameTab){
            btn.classList.remove('artist__btn_active');
            nameTab.classList.remove('section_active');
        }

        dayBtn.addEventListener('click', ()=> {
            active(dayBtn, toDay);
            notActive(weekBtn, toWeek);
            notActive(monthBtn, toMonth);
            notActive(allTimeBtn, toTime);
            clear(toplist, artistsArr.length);
            recovery();
            let dayArtist = artistsArr.slice();
            tabArreys(dayArtist, 0.9); 
            creatorsList(dayArtist);
            useLocalStorage('artist.html', '.toplist__list_miror', "artist");

        });
        weekBtn.addEventListener('click', ()=> {
            active(weekBtn, toWeek);
            notActive(dayBtn, toDay);
            notActive(monthBtn, toMonth);
            notActive(allTimeBtn, toTime);
            clear(toplist, artistsArr.length);
            recovery();
            let weekArtist = artistsArr.slice();
            tabArreys(weekArtist, 0.7);
            creatorsList(weekArtist);
            useLocalStorage('artist.html', '.toplist__list_miror', "artist");
        });
        monthBtn.addEventListener('click', ()=> {
            active(monthBtn, toMonth);
            notActive(dayBtn, toDay);
            notActive(weekBtn, toWeek);
            notActive(allTimeBtn, toTime);
            clear(toplist, artistsArr.length);
            recovery();
            let monthArtit = artistsArr.slice();
            tabArreys(monthArtit, 0.6);
            creatorsList(monthArtit);
            useLocalStorage('artist.html', '.toplist__list_miror', "artist");
            
        });
        allTimeBtn.addEventListener('click', ()=> {
            active(allTimeBtn, toTime);
            notActive(dayBtn, toDay);
            notActive(weekBtn, toWeek);
            notActive(monthBtn, toMonth);
            clear(toplist, artistsArr.length);
            recovery();
            creatorsList(artistsArr);
            useLocalStorage('artist.html', '.toplist__list_miror', "artist");
        });

        
        useLocalStorage('artist.html', '.toplist__list_miror', "artist");
}


export default topCreatorsTabs;