console.log('TALLER 2');
console.log('\n', '\n');
console.log('JAVIER NICOLAS SALAS LIÑEIRO');
let numberT2 = 1;
let namet2 = 'Nicolas Salas';
let booleanT2 = true;
let nullT2 = null;
let undefinedT2 = undefined;
let number2T2 = 5;
let materia = 'programacion backend';
console.log('Punto 1');
console.log('number: ', numberT2, ' name: ', namet2, ' boolean: ', booleanT2, ' null: ', nullT2, ' undefined: ', undefinedT2);
console.log('\n', '\n');
console.log('number2: ', number2T2, ' materia: ', materia);
console.log('\n', '\n');
function areaRectangulo(base, altura) {
    return base * altura;
}
console.log('Punto 2');
console.log('Rectangle area: ', areaRectangulo(2, 3));
console.log('\n', '\n');
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    showInfo() {
        return `Make: ${this.make}, Model: ${this.model}`;
    }
}
console.log('Punto 3');
const cart2T2 = new Car('suzuki', 'vitara');
const cart2 = new Car('Chevrolet', 'Spark');
console.log(cart2.showInfo());
console.log(cart2T2.showInfo());
console.log('\n', '\n');
class Rectangle {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    area() {
        return this.base * this.altura;
    }
}
console.log('Punto 4');
const rectangleT2 = new Rectangle(2, 3);
const rectangle2T2 = new Rectangle(10, 30);
const rectangle2T3 = new Rectangle(100, 25);
console.log('Rectangle area 1: ', rectangleT2.area());
console.log('Rectangle area 2: ', rectangle2T2.area());
console.log('Rectangle area 3: ', rectangle2T3.area());
console.log('\n', '\n');
const booksT2 = [
    { title: '100 años de soledad', author: 'Gabo' },
    { title: 'El principito', author: 'Antoine de Saint-Exupéry' },
    { title: 'El coronel no tiene quien le escriba', author: 'Gabo' },
    { title: 'Cronica de una muerte anunciada', author: 'Gabo' },
    { title: 'El principito', author: 'Antoine de Saint-Exupéry' },
];
function getBooksByAuthor(author) {
    return booksT2.filter(book1T2 => book1T2.author === author);
}
console.log('Punto 5');
console.log('Books by Gabo: ', getBooksByAuthor('Gabo'));
console.log('Books By Antonie', getBooksByAuthor('Antoine de Saint-Exupéry'));
console.log('\n', '\n');
class Library {
    constructor() {
        this.books2T2 = [];
    }
    addBook(book) {
        this.books2T2.push(book);
    }
    getBooksByAuthor(author) {
        return this.books2T2.filter(book2T2 => book2T2.author === author);
    }
    getAllBooks() {
        return this.books2T2;
    }
    removeBookByTitle(title) {
        this.books2T2 = this.books2T2.filter(book2T2 => book2T2.title !== title);
    }
}
console.log('Punto 6');
const library = new Library();
library.addBook({ title: '100 años de soledad', author: 'Gabo', year: 1967 });
library.addBook({ title: 'El principito', author: 'Antoine de Saint-Exupéry', year: 1943 });
library.addBook({ title: 'El coronel no tiene quien le escriba', author: 'Gabo', year: 1961 });
library.addBook({ title: 'Cronica de una muerte anunciada', author: 'Gabo', year: 1981 });
library.addBook({ title: 'El principito V2', author: 'Antoine de Saint-Exupéry', year: 1983 });
console.log('Books by Antonio: ', library.getBooksByAuthor('Antoine de Saint-Exupéry'));
console.log('All books: ', library.getAllBooks());
library.removeBookByTitle('El principito');
library.removeBookByTitle('100 años de soledad');
console.log('All books after removal: ', library.getAllBooks());
console.log('\n', '\n');
function sumEvenNumbers() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log('Punto 7.1');
console.log('Sum of even numbers from 1 to 100: ', sumEvenNumbers());
console.log('\n', '\n');
function countOddNumbers() {
    let count = 0;
    let i = 1;
    while (i <= 30) {
        if (i % 2 !== 0) {
            count++;
        }
        i++;
    }
    return count;
}
console.log('Punto 7.2');
console.log('Count of odd numbers from 1 to 30: ', countOddNumbers());
console.log('\n', '\n');
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log('Punto 7.3');
console.log('Prime numbers from 1 to 20: ');
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}
console.log('\n', '\n');
//# sourceMappingURL=Taller_2.js.map