import { nftDBarr } from "../dataBase/nftDB";

const animakid = nftDBarr.filter(item => item.collection == 'animakid'),
    orbitians = nftDBarr.filter(item => item.collection == 'orbitians'),
    nebulaKid = nftDBarr.filter(item => item.collection == 'nebulaKid'),
    happyRoboto = nftDBarr.filter(item => item.collection == 'happyRoboto'),
    beKind2Robots = nftDBarr.filter(item => item.collection == 'beKind2Robots'),
    criptoCity = nftDBarr.filter(item => item.collection == 'criptoCity'),
    other = nftDBarr.filter(item => item.collection == 'other'),
    shroomie = nftDBarr.filter(item => item.collection == 'shroomie');


        const sortingArrsNft = [
            animakid,
            orbitians,
            nebulaKid,
            happyRoboto,
            beKind2Robots,
            criptoCity,
            other,
            shroomie
        ];

        const collectItemsArr = [];

    function mixCollection(obj1, obj2, obj3, lengthColl){
        class CollectionItem{
            constructor(mainImg, img1, img2, nameColl, artist, amount){

                this.mainImg = mainImg;
                this.img1 = img1;
                this.img2 = img2;
                this.nameColl = nameColl;
                this.artist = artist;
                this.amount = amount;
            }
            render(){
                
                let mixObj = Object.create({}, {

                        mainImg: {value: this.mainImg},
                        img1: {value: this.img1},
                        img2: {value: this.img2},
                        name: {value: this.nameColl},
                        artist: {value: this.artist},
                        amount: {value: this.amount}
                });
                collectItemsArr.push(mixObj);

            }
        }
        new CollectionItem(
            obj1.img,
            obj2.img,
            obj3.img,
            obj1.collection,
            obj1.artist,
            lengthColl
        ).render();
    }
    
sortingArrsNft.forEach((arr) => {
    mixCollection(arr[0], arr[1], arr[2], arr.length);
});

export {collectItemsArr};