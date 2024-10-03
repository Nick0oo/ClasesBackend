let username = 'John Doe';
username = 'brayan';
console.log(username, 'es un visajoso');
const products = [1, 2, 3, 4, 5];
const store = [1, 2, 3, 4, 5];
const coiny = ['USD', 'EUR', 'COP'];
const coins = ['USD', 'EUR', 'COP'];
const pOne = ['any', 1, true, { id: 1, name: 'John Doe' }];
const coin = [
    {
        "id": 1,
        "name": "pesos"
    },
    {
        "id": 2,
        "name": "euro"
    },
    {
        "id": 3,
        "name": "dolar"
    }
];
coin.push({
    id: 4,
    name: 'euro'
});
let books = [
    {
        id: 1,
        title: 'El principito',
    }
];
books = [1, 2, 3, 4, 5];
let dateOne = ['2021-09-25', 25];
let dateTwo;
dateTwo = ['2021-09-25', 25];
let dateThree;
dateThree = ['2021-09-25', 25, true];
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
let c = Colors.Green;
console.log(c, ' num 3');
console.log(Colors[2]);
var Dia;
(function (Dia) {
    Dia[Dia["id"] = 1] = "id";
    Dia[Dia["type"] = 3] = "type";
    Dia[Dia["name"] = 4] = "name";
    Dia[Dia["product"] = 5] = "product";
})(Dia || (Dia = {}));
let dia = Dia.product;
console.log(Dia[dia], ' da');
console.log(Dia[1], 'dia');
function sumar() {
    const aux = [1, 2, 3, 4, 5];
    let sum = 0;
    for (let i = 0; i < aux.length; i++) {
        sum += aux[i];
    }
    console.log('\n', sum, ' resultado');
}
function llegada() {
    const name = true;
    return name;
}
sumar();
console.log(`Haz llegado ${llegada()}`);
let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020
};
let animals = {
    name: 'dog',
    age: 2,
    status: false
};
let nothing1 = null;
let nothing = null;
nothing = 'Hi there';
let notDefined = undefined;
let value = false;
value = '1';
const numbers = [1, 2, 3, 4, 5];
const number2 = [1, 2, 3, 4, 5];
const strings = ['USD', 'EUR', 'COP'];
const booleans = [true, false, true];
const mixed = [
    '2021-09-25',
    25
];
const colors = ['red', 'green', 'blue'];
console.log(colors[0]);
console.log('\n', colors[1]);
const numbers2 = [1, 2, 3, 4, 5];
const number3 = ['one', 'two', 'three', 'four', 'five'];
numbers2.push(6);
numbers2[number2.length + 1] = 7;
numbers2.pop();
const index = numbers2.indexOf(3);
console.log(index);
const index2 = number3.indexOf('three');
console.log('\n', index2);
const sliced = numbers2.slice(1, 3);
const doubled = numbers2.map((num) => num * num);
const evens = numbers2.filter((num) => num % 2 === 0);
const coins2 = [
    {
        id: 1,
        name: 'pesos',
        code: 'COP',
    },
    {
        id: 2,
        name: 'euro',
        code: 'EUR',
    },
    {
        id: 3,
        name: 'dolar',
        code: 'USD',
    }
];
const filterCoins = coins2.filter((coin) => coin.id === 1);
const sum = numbers2.reduce((total, num) => total + num, 0);
const sentence = 'jonson is gay and he is a visajoso';
const words = sentence.split(' ');
console.log(words);
const sentence2 = words.join(' ');
console.log(sentence2);
const numbers3 = [10, 20, 30, 40, 50];
const found = numbers3.find((num) => num > 30);
const foundIndex = numbers3.findIndex((num) => num > 30);
const allPositive = numbers3.every((num) => num > 0);
const somePositive = numbers3.some((num) => num > 30);
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArrays = array1.concat(array2);
const combinedArrays2 = array1.push(...array2);
const unsortedNumbers = [3, 1, 2, 5, 4];
const sortedNumbers = unsortedNumbers.sort((a, b) => a - b);
console.log(sortedNumbers);
const sortedNumbers2 = unsortedNumbers.sort((a, b) => b - a);
const strings2 = ['romer', 'pepo', 'almeida', 'jose'];
const sortedStrings = strings2.sort();
console.log(sortedStrings);
const reversedNumbers = sortedNumbers.reverse();
console.log(reversedNumbers);
const auxnumberarrays = [1, 2, 3, 4, 5, 2, 7, 9, 3, 1, 7, 2, 0, 5, 6, 8, 9, 3, 1, 2, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let aut = [];
for (let i = 0; i < auxnumberarrays.length; i++) {
    if (!(aut.includes(auxnumberarrays[i]))) {
        aut.push(auxnumberarrays[i]);
    }
    else {
        console.error('El numero', auxnumberarrays[i], 'ya esta en el array');
    }
}
console.log(aut);
//# sourceMappingURL=Clase_Types.js.map