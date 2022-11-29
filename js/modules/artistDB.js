const jaydon = {
    number: 0,avatar: 'jaydon',name: 'Jaydon Ekstrom',change: 1.41,sold: 361,volume: 0, followers: 2000,
    bio: 'Lorem ipsum dolor sit amet...'
};
const alfredo = {
    number: 0,avatar: 'alfredo',name: 'Alfredo Septimus',change: 1.41,sold: 601,volume: 0, followers: 4000,
    bio: 'Consectetur adipisicing elit. Culpa....'
};
const allison = {
    number: 0,avatar: 'allison',name: 'Allison Torff',change: 1.41,sold: 527,volume: 0, followers: 5000,
    bio: 'Suscipit dolores qui nisi. Sint odio...'
};
const angel = {
    number: 0,avatar: 'angel',name: 'Angel Lubin',change: 1.41,sold: 503,volume: 0, followers: 6000,
    bio: 'Veritatis ullam debitis molestias, veniam...'
};
const davis = {
    number: 0,avatar: 'davis',name: 'Davis Franci',change: 1.41,sold: 308,volume: 0, followers: 1000,
    bio: 'Voluptatem ea omnis optio! Blanditiis...'
};
const davisWork = {
    number: 0,avatar: 'davisWork',name: 'Davis Workman',change: 1.41,sold: 420,volume: 0, followers: 4000,
    bio: 'Laudantium repudiandae quo nemo explicabo...'
};
const jocelyn = {
    number: 0,avatar: 'jocelyn',name: 'Jocelyn Westervelt',change: 1.41,sold: 372,volume: 0, followers: 8000,
    bio: 'Lorem ipsum dolor sit amet consectetur...'
};
const kianaST = {
    number: 0,avatar: 'kianaST',name: 'Kianna Stanton',change: 1.41,sold: 689,volume: 0, followers: 6000,
    bio: 'Adipisicing elit. Culpa suscipit dolores...'
};
const kianna = {
    number: 0,avatar: 'kianna',name: 'Kianna Donin',change: 1.41,sold: 331,volume: 0, followers: 9000,
    bio: 'Qui nisi. Sint odio veritatis ullam debitis...'
};
const lindsey = {
    number: 0,avatar: 'lindsey',name: 'Lindsey Lipshutz',change: 1.41,sold: 309,volume: 0, followers: 3000,
    bio: 'Molestias, veniam voluptatem ea omnis optio!'
};
const livia = {
    number: 0,avatar: 'livia',name: 'Livia Rosser',change: 1.41,sold: 411,volume: 0, followers: 3000,
    bio: 'Blanditiis laudantium repudiandae quo nemo explicabo.'
};
const lydia = {
    number: 0,avatar: 'lydia',name: 'Lydia Culhane',change: 1.41,sold: 702,volume: 0, followers: 6000,
    bio: 'The internet`s friendliest designer kid.'
};
const maria = {
    number: 0,avatar: 'maria',name: 'Maria Rosser',change: 1.41,sold: 99,volume: 0, followers: 9000,
    bio: 'Lorem ipsum dolor sit...'
};
const marylin = {
    number: 0,avatar: 'marylin',name: 'Marilyn Torff',change: 1.41,sold: 248,volume: 0, followers: 3000,
    bio: 'Amet consectetur adipisicing elit....'
};
const philip = {
    number: 0,avatar: 'philip',name: 'Phillip Lipshutz',change: 1.41,sold: 110,volume: 0, followers: 4500,
    bio: 'Culpa suscipit dolores qui nisi...'
};
const randy = {
    number: 0,avatar: 'randy',name: 'randy',change: 1.41,sold: 439,volume: 0, followers: 7300,
    bio: 'Sint odio veritatis ullam debitis molestias...'
};
const rayna = {
    number: 0,avatar: 'rayna',name: 'Rayna Bator',change: 1.41,sold: 129,volume: 0, followers: 3400,
    bio: 'Veniam voluptatem ea omnis optio!...'
};
const ruben = {
    number: 0,avatar: 'ruben',name: 'Ruben Carder',change: 1.41,sold: 371,volume: 0, followers: 4900,
    bio: 'Blanditiis laudantium repudiandae quo nemo explicabo.'
};
const skylar = {
    number: 0,avatar: 'skylar',name: 'Skylar Levin',change: 1.41,sold: 200,volume: 0, followers: 7200,
    bio: 'The internet`s friendliest designer kid.'
};
const terry = {
    number: 0,avatar: 'terry',name: 'Terry Dorwart',change: 1.41,sold: 502,volume: 0, followers: 8000,
    bio: 'Molestias, veniam voluptatem ea omnis optio!'
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

    function sortRait(a, b) {
        return a.sold < b.sold ? 1 : b.sold < a.sold ? -1 : 0;
        }
    function getVolume(obj, sold, volume, cours) {
        let k = obj[sold] * cours;
        obj[volume] = k.toFixed(2);
    }
    artists.forEach(item => getVolume(item, 'sold', 'volume', 0.006));
    

export {artists};