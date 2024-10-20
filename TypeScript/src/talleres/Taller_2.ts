console.log('TALLER 2');
console.log('\n', '\n');
console.log('JAVIER NICOLAS SALAS LIÑEIRO');

// 1.Declara variables utilizando todos los tipos primitivos mencionados

let numberT2: number = 1;
let namet2: string = 'Nicolas Salas';
let booleanT2: boolean = true;
let nullT2: null = null;
let undefinedT2: undefined = undefined;
let number2T2: number =5;
let materia: string = 'programacion backend';
console.log('Punto 1');
console.log('number: ', numberT2 , ' name: ', namet2 , ' boolean: ', booleanT2 , ' null: ', nullT2 , ' undefined: ', undefinedT2);
console.log('\n', '\n');
console.log('number2: ', number2T2 , ' materia: ', materia);
console.log('\n', '\n');


// 2.Crea una función que calcule el área de un rectángulo, tomando la base y la altura como parámetros

function areaRectangulo(base: number, altura: number): number {
    return base * altura;
}
console.log('Punto 2');
console.log('Rectangle area: ', areaRectangulo(2, 3));
console.log('\n', '\n');

// 3.Crea una clase Car que tenga propiedades como make, model, y un método para mostrar su información

class Car {
    // propiedades
    private make: string;
    protected model: string;
    // constructor
    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }
    // metodo
    showInfo(): string {
        return `Make: ${this.make}, Model: ${this.model}`;
    }
}
console.log('Punto 3');
const cart2T2 = new Car ('suzuki', 'vitara');
const cart2 = new Car('Chevrolet', 'Spark');
console.log(cart2.showInfo());
console.log(cart2T2.showInfo());
console.log('\n', '\n');

// 4.Define una interfaz Shape que tenga propiedades para calcular el área y una clase Rectangle que implemente esta interfaz

interface Shape {
    base: number;
    altura: number;
    area(): number;
}

class Rectangle implements Shape {
    // propiedades
    public base: number;
    public altura: number;
    // constructor
    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }
    // metodo
    area(): number {
        return this.base * this.altura;
    }
}
console.log('Punto 4');
const rectangleT2 = new Rectangle(2, 3);
const rectangle2T2 = new Rectangle(10,30);
const rectangle2T3 = new Rectangle(100,25);
console.log('Rectangle area 1: ', rectangleT2.area());
console.log('Rectangle area 2: ',rectangle2T2.area());
console.log('Rectangle area 3: ',rectangle2T3.area());
console.log('\n', '\n');

// 5.Crea un arreglo de objetos que representen libros, cada uno con propiedades como title, author,
//  y usa filter para obtener solo los libros de un autor específico.

interface Book1T2 {
    title: string;
    author: string;
   
}

// arreglo de libros
const booksT2: Book1T2[] = [
    { title: '100 años de soledad', author: 'Gabo' },
    { title: 'El principito', author: 'Antoine de Saint-Exupéry' },
    { title: 'El coronel no tiene quien le escriba', author: 'Gabo'},
    { title: 'Cronica de una muerte anunciada', author: 'Gabo' },
    { title: 'El principito', author: 'Antoine de Saint-Exupéry' },
];

function getBooksByAuthor(author: string): Book1T2[] {
    return booksT2.filter(book1T2 => book1T2.author === author);
}

console.log('Punto 5');
console.log('Books by Gabo: ', getBooksByAuthor('Gabo'));
console.log('Books By Antonie', getBooksByAuthor('Antoine de Saint-Exupéry'));
console.log('\n', '\n');


/* 6.Crea un pequeño programa que utilice todos los conceptos anteriores: 
    Define una interfaz Book que tenga title, author, y year.
    Crea una clase Library que tenga un arreglo de libros y métodos para agregar y buscar libros por autor.
    Usa métodos de clase y arreglos para interactuar con la biblioteca.*/

interface Book2T2 {
    title: string;
    author: string;
    year: number;
}

class Library {
    private books2T2: Book2T2[] = [];

    addBook(book: Book2T2): void {
        this.books2T2.push(book);
    }

    getBooksByAuthor(author: string): Book2T2[] {
        return this.books2T2.filter(book2T2 => book2T2.author === author);
    }

    getAllBooks(): Book2T2[] {
        return this.books2T2;
    }

    removeBookByTitle(title: string): void {
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


/* 7. Uso de ciclos

		1. Escribe un programa que sume todos los números pares del 1 al 100

		2. Contar números impares con while, que hay entre 1 y 30.

		3. Imprimir números primos con for y if */

// 1. Escribe un programa que sume todos los números pares del1 al 100
function sumEvenNumbers(): number {
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

// 2. Contar números impares con while, que hay entre 1 y 30.
function countOddNumbers(): number {
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

// 3. Imprimir números primos con for y if
function isPrime(num: number): boolean {
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
console.log('Prime numbers from 1 to 100: ');
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}
console.log('\n', '\n');
