const obj = {
    kola: {name: 'kola', age: 15},
    mipo: {name: 'mipo', age: 65},
    vasa: {name: 'vasa', age: 5},
}

let popo = new Array(obj.vasa, obj.kola, obj.mipo);
popo.sort(sortRait);

let id = 'vasa';

function sortRait(a, b) {
    return a.age < b.age ? 1 : b.age < a.age ? -1 : 0;
    }

    function vivod(some){
        console.log(some);
    }

    vivod(obj[id].age)