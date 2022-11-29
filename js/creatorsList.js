'use strict';


const jaydon = {
    number: 0,avatar: 'jaydon',name: 'Jaydon Ekstrom',change: 1.41,sold: 361,volume: 14.2
};
const alfredo = {
    number: 0,avatar: 'alfredo',name: 'Alfredo Septimus',change: 1.41,sold: 601,volume: 14.2
};
const allison = {
    number: 0,avatar: 'allison',name: 'Allison Torff',change: 1.41,sold: 527,volume: 14.2
};
const angel = {
    number: 0,avatar: 'angel',name: 'Angel Lubin',change: 1.41,sold: 503,volume: 14.2
};
const davis = {
    number: 0,avatar: 'davis',name: 'Davis Franci',change: 1.41,sold: 308,volume: 14.2
};
const davisWork = {
    number: 0,avatar: 'davisWork',name: 'Davis Workman',change: 1.41,sold: 420,volume: 14.2
};
const jocelyn = {
    number: 0,avatar: 'jocelyn',name: 'Jocelyn Westervelt',change: 1.41,sold: 372,volume: 14.2
};
const kianaST = {
    number: 0,avatar: 'kianaST',name: 'Kianna Stanton',change: 1.41,sold: 689,volume: 14.2
};
const kianna = {
    number: 0,avatar: 'kianna',name: 'Kianna Donin',change: 1.41,sold: 331,volume: 14.2
};
const lindsey = {
    number: 0,avatar: 'lindsey',name: 'Lindsey Lipshutz',change: 1.41,sold: 309,volume: 14.2
};
const livia = {
    number: 0,avatar: 'livia',name: 'Livia Rosser',change: 1.41,sold: 411,volume: 14.2
};
const lydia = {
    number: 0,avatar: 'lydia',name: 'Lydia Culhane',change: 1.41,sold: 702,volume: 14.2
};
const maria = {
    number: 0,avatar: 'maria',name: 'Maria Rosser',change: 1.41,sold: 99,volume: 14.2
};
const marylin = {
    number: 0,avatar: 'marylin',name: 'Marilyn Torff',change: 1.41,sold: 248,volume: 14.2
};
const philip = {
    number: 0,avatar: 'philip',name: 'Phillip Lipshutz',change: 1.41,sold: 110,volume: 14.2
};
const randy = {
    number: 0,avatar: 'randy',name: 'randy',change: 1.41,sold: 439,volume: 14.2
};
const rayna = {
    number: 0,avatar: 'rayna',name: 'Rayna Bator',change: 1.41,sold: 129,volume: 14.2
};
const ruben = {
    number: 0,avatar: 'ruben',name: 'Ruben Carder',change: 1.41,sold: 371,volume: 14.2
};
const skylar = {
    number: 0,avatar: 'skylar',name: 'Skylar Levin',change: 1.41,sold: 200,volume: 14.2
};
const terry = {
    number: 0,avatar: 'terry',name: 'Terry Dorwart',change: 1.41,sold: 502,volume: 14.2
};
let artists = new Array(
    jaydon,
    alfredo,
    allison,
    angel,
    davis,
    davisWork,
    jocelyn,
    kianaST,
    kianna,
    lindsey,
    livia,
    lydia,
    maria,
    marylin,
    philip,
    randy,
    rayna,
    ruben,
    skylar,
    terry
    ).sort(sortRait);




const parentElem = document.querySelector('.toplist__list');


function topList(obj) {
    class ListItem {
        constructor(number, avatar, name, change, sold, volume) {
            this.number = number;
            this.avatar = avatar;
            this.name = name;
            this.change = change;
            this.sold = sold;
            this.volume = volume;
        }
        render() {
            const item = document.createElement('a');
            item.id = this.avatar; 
            item.href = './artist.html';
            item.classList.add('toplist__list_item');
            item.innerHTML = `
                    <div class="toplist__list_number">
                        <p class="toplist__header_item">${this.number}</p>
                    </div>
                    <div class="toplist__list_artist">
                        <img src="../src/icons/artists/${this.avatar}.svg" alt="ava" class="toplist__list_avatar">
                        <h5 class="toplist__list_name">${this.name}</h5>
                    </div>
                    <p class="toplist__list_chance toplist_chance">+${this.change}%</p>
                    <p class="toplist__list_sold toplist_nft">${this.sold}</p>
                    <p class="toplist__list_volume">${this.volume} ETH</p>
            `;

            parentElem.append(item);
        }
    }
        
            new ListItem(
                    obj.number,
                    obj.avatar,
                    obj.name, 
                    obj.change, 
                    obj.sold, 
                    obj.volume
            ).render();
    
}

    function sortRait(a, b) {
        return a.sold < b.sold ? 1 : b.sold < a.sold ? -1 : 0;
        }

    function getVolume(obj, sold, volume, cours){
        let k = obj[sold] * cours;
        obj[volume] = k.toFixed(2);
    }
    function numeration(obj, number, i){
        obj[number] = i + 1;
    }

    function appendToPage(){
        artists.forEach((item, i) => {
            numeration(item, 'number', i);
            getVolume(item, 'sold', 'volume', 0.006);
            topList(item);
            
        });
    }

appendToPage();




