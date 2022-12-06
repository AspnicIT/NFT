import { artistsArr } from "../dataBase/artistDB";
import creatorsList from "../constructors/creatorsList";
import { sortRait } from "../dataBase/artistDB";
import {getVolume} from "../dataBase/artistDB";
import useLocalStorage from "../functional/localStorage";

function topCreatorsTabs(
    parentForCreators, 
    btnDaySel, btnWeekSel, 
    btnMonthSel, btnAllTimeSel,
    daySectSel, weekSectSel,
    monthSectSel, allTimeSectSel,
    btnActiveClass, sectionActiveClass
    ){
     
    creatorsList(artistsArr, parentForCreators);

    const dayBtn = document.querySelector(btnDaySel),
        weekBtn = document.querySelector(btnWeekSel),
        monthBtn = document.querySelector(btnMonthSel),
        allTimeBtn = document.querySelector(btnAllTimeSel),

        toDay = document.getElementById(daySectSel),
        toWeek = document.getElementById(weekSectSel),
        toMonth = document.getElementById(monthSectSel),
        toTime = document.getElementById(allTimeSectSel);

        let toplist = document.querySelector(parentForCreators);

        const soldValue = [];
        artistsArr.forEach((item) => soldValue.push(item.sold));

        function active(btn, nameTab){
            btn.classList.add(btnActiveClass);
            nameTab.classList.add(sectionActiveClass);
        }
        
        function notActive(btn, nameTab){
            btn.classList.remove(btnActiveClass);
            nameTab.classList.remove(sectionActiveClass);
        }
        
        function clear(parentElem, num){
            for(let i = 1; i <= num; i++){
                parentElem.firstChild.remove();
            }
        }
        function recovery(){
            artistsArr.forEach((item, i) => {
                item.sold = soldValue[i];
                getVolume(item, 'sold', 'volume', 0.033);
            }); 
        }
        function newValue(arr){
            arr.forEach((item) => {
                let number;
                number = Math.random() * (720 - 10) + 10;
                item.sold = +number.toFixed();
                
            });
            arr.sort(sortRait);
        }
        function tabArreys(newArr, percent){
            newArr.forEach((item) => {getSold(item, 'sold', percent);});
        }
        
        function getSold(obj, sold, percent){
            let k = obj[sold] - (obj[sold] * percent);
            obj[sold] = k.toFixed();
            getVolume(obj, 'sold', 'volume', 0.033);
        }
        
        
        
        function changeTab(
            onBtn, onSection,
            offBtn1, offSec1,
            offBtn2, offSec2,
            offBtn3, offSec3,
            clearList, clearLength,
            nameArr, percent
        ){
            active(onBtn, onSection);
            notActive(offBtn1, offSec1);
            notActive(offBtn2, offSec2);
            notActive(offBtn3, offSec3);
            clear(clearList, clearLength);
            recovery();
            nameArr = artistsArr.slice();
            newValue(nameArr);
            tabArreys(nameArr, percent); 
            // nameArr.sort(sortRait);
            creatorsList(nameArr, parentForCreators);
            useLocalStorage('artist.html', '.toplist__list_miror', "artist");
        }

        
        dayBtn.addEventListener('click', ()=> {
            let dayArtist;
            changeTab(
                dayBtn, toDay,
                weekBtn, toWeek,
                monthBtn, toMonth,
                allTimeBtn, toTime,
                toplist, artistsArr.length,
                dayArtist, 0.99
            );
        });
        weekBtn.addEventListener('click', ()=> {
            let weekArtist;
            changeTab(
                weekBtn, toWeek,
                dayBtn, toDay,
                monthBtn, toMonth,
                allTimeBtn, toTime,
                toplist, artistsArr.length,
                weekArtist, 0.95
            );
        });
        monthBtn.addEventListener('click', ()=> {
            let monthArtit;
            changeTab(
                monthBtn, toMonth,
                weekBtn, toWeek,
                dayBtn, toDay,
                allTimeBtn, toTime,
                toplist, artistsArr.length,
                monthArtit, 0.85
            );
        });
        allTimeBtn.addEventListener('click', ()=> {
            active(allTimeBtn, toTime);
            notActive(dayBtn, toDay);
            notActive(weekBtn, toWeek);
            notActive(monthBtn, toMonth);
            clear(toplist, artistsArr.length);
            recovery();
            creatorsList(artistsArr, parentForCreators);
            useLocalStorage('artist.html', '.toplist__list_miror', "artist");
        });

        
        useLocalStorage('artist.html', '.toplist__list_miror', "artist");
}


export default topCreatorsTabs;