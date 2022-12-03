function creatorsList(arrDB) {
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
                const item = document.createElement('div');
                item.classList.add('toplist__list_item');
                item.innerHTML = `
                    <a id="${this.avatar}" href="./artist.html" class="toplist__list_miror"></a>
                    <div class="toplist__list_number">
                        <p class="toplist__header_item">${this.number}</p>
                    </div>
                    <div class="toplist__list_artist">
                        <img src="../src/icons/artists/${this.avatar}.jpg" alt="ava" class="toplist__list_avatar">
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



    function numeration(obj, number, i) {
        obj[number] = i + 1;
    }

    function appendToPage(arr) {
        arr.forEach((item, i) => {
            numeration(item, 'number', i);
            topList(item);
        });
    }

    appendToPage(arrDB);
    
}
export default creatorsList;