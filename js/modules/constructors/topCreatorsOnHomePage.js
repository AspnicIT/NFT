function topCreatorsOnHomePage(arrWithObj, parentSelect){
    let parentElement = document.querySelector(parentSelect);

    function topTwelveCreators(obj){
        class TopCreatsOnHome {
            constructor(number, avatar, name, volume) {
                this.number = number;
                this.avatar = avatar;
                this.name = name;
                this.volume = volume;

            }
            render() {
                const twelveItem = document.createElement('div');
                twelveItem.classList.add('creats__grid_item');
                twelveItem.id = `topHome_${this.number}`;
                twelveItem.innerHTML = `
            
                <a id="${this.avatar}" href="./html/artist.html" class="toplist__list_miror"></a>
                <div class="creats__grid_number">${this.number}</div>
                <img src="./src/icons/artists/${this.avatar}.jpg" alt="ava" class="creats__grid_avatar">
                <div class="trend__card_descr">
                    <h5 class="nft__item_name creats__grid_name">${this.name}</h5>
                    <div class="nft__item_nickname creats__grid_price"><span>Total Sales:</span>${this.volume} ETH</div>
                </div>
            
            `;

            parentElement.append(twelveItem);
            }
        }
        new TopCreatsOnHome(
            obj.number,
            obj.avatar,
            obj.name,
            obj.volume
        ).render();
    }

    function numeration(obj, number, i) {
        obj[number] = i + 1;
    }

    function appendToPage(arr) {
        arr.forEach((item, i) => {
            numeration(item, 'number', i);
            topTwelveCreators(item);
        });
    }
    appendToPage(arrWithObj);

}

export default topCreatorsOnHomePage;