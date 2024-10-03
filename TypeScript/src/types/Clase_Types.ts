let username: string = 'John Doe';
username = 'brayan';
console.log(username, 'es un visajoso');

// array
const products: Array<number> = [1, 2, 3, 4, 5];

const store: number[] = [1, 2, 3, 4, 5];

const coiny: Array<string> = ['USD', 'EUR', 'COP']; // Array de strings, forma 1.

const coins: string[] = ['USD', 'EUR', 'COP']; // Array de strings, forma 2, se diferencia por el tipo de dato.

const pOne: any[] = ['any', 1, true, {id: 1, name: 'John Doe'}];

const coin: any[] = [ // Array de objetos con diferentes tipos de datos.
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
    // Es un array de objetos
];
coin.push({ // Agregar un nuevo objeto al array
    id: 4,
    name: 'euro'
});

let books: any[] = [
    {
        id: 1,
        title: 'El principito',
    }
];

books = [1, 2, 3, 4, 5]; // Se puede reasignar el array con otro tipo de dato.

// Tuplas

let dateOne: [string, number] = ['2021-09-25', 25]; // Tupla con dos tipos de datos.
// o
let dateTwo: [string, number]; // tambien se define por orden de los tipos de datos.
dateTwo = ['2021-09-25', 25];

let dateThree: [string, number, boolean]; // tambien se define por orden de los tipos de datos.
dateThree = ['2021-09-25', 25, true];

// Enum

enum Colors {
    Red,
    Green,
    Blue
}

let c: Colors = Colors.Green;
console.log(c, ' num 3'); // 1
console.log(Colors[2]); // Blue

enum Dia {
    id = 1,
    type = 3,
    name = 4,
    product
}
let dia: Dia = Dia.product; // 'Martes' tendrá el valor de 2
console.log(Dia[dia], ' da'); // 2
console.log(Dia[1], 'dia'); // id

// void

function sumar(): void {
    const aux = [1, 2, 3, 4, 5];
    let sum = 0;
    for (let i = 0; i < aux.length; i++) {
        sum += aux[i];
    }
    console.log('\n', sum, ' resultado');
}

function llegada(): boolean {
    const name: boolean = true;
    return name;

}
sumar();
console.log(`Haz llegado ${llegada()}`);
// console.log('Haz llegado', llegada()); // Otra forma de imprimir el mensaje.
// object

let car: {make: string, model: string, year: number} = {
make: 'Toyota',
model: 'Camry',
year: 2020
};

let animals : {name: string, age: number, status: boolean} = {
name: 'dog',
age: 2,
status: false
};

// null & undefined
let nothing1: null = null;
let nothing: any = null;
nothing = 'Hi there';
let notDefined: undefined = undefined;

// union
let value: number | string | boolean = false;
value = '1';
// array de numeros
const numbers = [1, 2, 3, 4, 5];
// array de numeros 2
const number2: Array<number> = [1, 2, 3, 4, 5];

// array de strings
const strings: string[] = ['USD', 'EUR', 'COP'];

// array de booleanos
const booleans: boolean[] = [true, false, true];

// array de tuplas
const mixed: [string, number] =
[
    '2021-09-25',
    25
];

// acceso a elementos
const colors: string[] = ['red', 'green', 'blue'];
console.log(colors[0]); // red
console.log('\n', colors[1]); // green

// Manipulacion de arrays
const numbers2: number[] = [1, 2, 3, 4, 5];
const number3: string[] = ['one', 'two', 'three', 'four', 'five'];

// añadir al elemento
numbers2.push(6);

// para añadir un elemento sin el push
numbers2[number2.length + 1] = 7;

// eliminar elementos
numbers2.pop();

// encontrar el indice de un elemento
const index = numbers2.indexOf(3); //funcion indexOf devuelve el indice de un elemento
console.log(index); // 2

// encontrar el indice de un string
const index2 = number3.indexOf('three');
console.log('\n', index2); // -1

// extraer una parte del array
const sliced = numbers2.slice(1, 3); //funcion slice devuelve una parte del array
// usar map para transformar los elementos
const doubled = numbers2.map((num) => num * num); //funcion map transforma los elementos de un array
// usar filter para filtrar elementos
const evens = numbers2.filter((num) => num % 2 === 0); //funcion filter filtra elementos de un array
 //ej filter
 const coins2: any[] = [
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
 const filterCoins= coins2.filter((coin) => coin.id === 1);
 // reduce
    const sum = numbers2.reduce((total, num) => total + num, 0); //funcion reduce reduce un array a un solo valor
//unir un array de palabras en una sola cadena con split
const sentence = 'jonson is gay and he is a visajoso';
const words: string[] = sentence.split(' '); //funcion split divide una cadena en un array
console.log(words); 
//unir un array de palabras en una sola cadena con join
const sentence2 = words.join(' '); //funcion join une un array en una cadena
console.log(sentence2); 
// find, findIndex
const numbers3: number[] = [10, 20, 30, 40, 50];
//  Encontrar con find
const found = numbers3.find((num) => num > 30); //funcion find encuentra el primer elemento que cumple con la condicion
// findIndex
const foundIndex = numbers3.findIndex((num) => num > 30); //funcion findIndex encuentra el indice del primer elemento que cumple con la condicion
// every
// verificar si todos los elementos son mayores que 0
const allPositive = numbers3.every((num) => num > 0); //funcion every verifica si todos los elementos cumplen con la condicion
// some
// verificar si al menos un elemento es mayor que 30
const somePositive = numbers3.some((num) => num > 30); //funcion some verifica si al menos un elemento cumple con la condicion
// arrays para combinar
const array1: number[] = [1, 2, 3];
const array2: number[] = [4, 5, 6];
// combinar arrays
const combinedArrays: number[]= array1.concat(array2); //funcion concat combina arrays
const combinedArrays2 = array1.push(...array2); //otra forma de combinar arrays
// ordenar un array con sort
const unsortedNumbers : number[] = [3, 1, 2, 5, 4];
// ordenar un array de menor a mayor
const sortedNumbers = unsortedNumbers.sort((a, b) => a - b); //funcion sort ordena un array
console.log(sortedNumbers); // [1, 2, 3, 4, 5]
// ordenar un array de mayor a menor
const sortedNumbers2 = unsortedNumbers.sort((a, b) => b - a);
// array de strings
const strings2: string[] = ['romer', 'pepo', 'almeida', 'jose'];
// ordenar un array de strings en orden alfabetico
const sortedStrings: string[] = strings2.sort(); //funcion sort ordena un array
console.log(sortedStrings); // ['almeida', 'jose', 'pepo', 'romer']
// reverse 
const reversedNumbers: number[] = sortedNumbers.reverse(); //funcion reverse invierte un array
console.log(reversedNumbers); // [5, 4, 3, 2, 1]

// ej
const auxnumberarrays: number[] = [1, 2, 3, 4, 5,2,7,9,3,1,7,2,0,5,6,8,9,3,1,2,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9];
let aut: any= [];
for (let i = 0; i < auxnumberarrays.length; i++) {
    if(!(aut.includes(auxnumberarrays[i]))) {
        aut.push(auxnumberarrays[i]);
        
    }else{
        console.error('El numero', auxnumberarrays[i], 'ya esta en el array');
    }
}
console.log(aut);





