// Taller 1
console.log('TALLER 1');
console.log('\n', '\n');
// Javier Nicolas Salas Liñeiro
console.log('Javier Nicolas Salas Liñeiro');
console.log('\n', '\n');


// punto 1
console.log('SOLUCIONES EJERCICIO 1');
const auxNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 1. agregar al array por medio de push 10,12,15,16 y 17
auxNumber.push(10, 12, 15, 16, 17);
console.log( ' Punto 1 ' , auxNumber);
// 2. eliminar el ultimo elmento con pop
const auxNumberPop= auxNumber.pop();
console.log('Punto 2 ' , auxNumberPop);
// 3. encontrar el indice de 1,4 y 7 con indexOf
const index1Taller = auxNumber.indexOf(1);
const index2Taller = auxNumber.indexOf(4);
const index3Taller = auxNumber.indexOf(7);
console.log('Punto 3 ');
console.log('indice de 1 ' , index1Taller , 'indice de 4 ' , index2Taller , 'indice de 7 ' , index3Taller);
// 4. extraer la parte del array con slice de 2 a 9 
console.log('Punto 4 ');
const slicedTaller = auxNumber.slice(2, 9);
console.log('sliced solicitado ' , slicedTaller);
// 5. verificar si todos los elementos son mayores a 1 con every
console.log('Punto 5 ');
const everyTaller = auxNumber.every((num) => num > 1);
console.log('todos los elementos son mayores a 1 son: ', everyTaller);
// 6. verificar si algun elemento es mayor o igual que 7 con some
console.log('Punto 6 ');
const someTaller = auxNumber.some((num) => num >= 7);
console.log('algun elemento es mayor o igual que 7: ', someTaller);
console.log('\n', '\n');

// punto 2
console.log('SOLUCIONES EJERCICIO 2');
const auxString: string[] =['1', '2', '3', '4', '5', '6', '7'];
// 1. agregar al array por medio de push 10,11,12,13 y 14
auxString.push('10', '11', '12', '13', '14');
console.log('punto 1 ',auxString);
// 2. encontrar el indice de 10, 11 y 14 con indexOf
const index1StringTaller = auxString.indexOf('10');
const index2StringTaller = auxString.indexOf('11');
const index3StringTaller = auxString.indexOf('14');
console.log('punto 2 ');
console.log('indice de 10 ' , index1StringTaller , 'indice de 11 ' , index2StringTaller , 'indice de 14 ' , index3StringTaller);
console.log('\n', '\n');

// punto 3
console.log('SOLUCIONES EJERCICIO 3'); 
const menssage : string = 'bienbenidos al itp';
// 1. dividir la cadena en un array de palabras donde el separador es un espacio con split
const SplitTaller: string[] = menssage.split(' ');
console.log('punto 1 ');
console.log(SplitTaller);
// 2. a la salida del resultado unir el array en una cadena con join separado por comas
const JoinTaller: string = SplitTaller.join(',');
console.log('punto 2 ');
console.log(JoinTaller);
console.log('\n', '\n');

// punto 4
console.log('SOLUCIONES EJERCICIO 4');
const names: string = 'michael,anderson,yadir,kevin,Emerson';
// 1. dividir la cadena en un array de palabras donde el separador sea una coma con split
console.log('punto 1 ');
const SplitNames: string[] = names.split(',');
console.log(SplitNames);
// 2. a la salida del resultado unir el array en una cadena con join separado por espacios
console.log('punto 2 ');
const JoinNames: string = SplitNames.join(' ');
console.log(JoinNames, '\n', '\n');

// punto 5
console.log('SOLUCIONES EJERCICIO 5');
const arrayProducts: any[] = [
    {
        id: 1,
        name: 'arroz',
        price: 1000,
        pricediscount: 700
    },
    {
        id: 2,
        name: 'atun',
        price: 2500,
        pricediscount: 1500
    }

]
// 1. filtrar en una const donde el price sea mayor a 900 por medio de filter y por medio de un for
console.log('punto 1 ');
const filterProducts = arrayProducts.filter((product) => product.price > 900);
console.log('filtrado por filter: ', filterProducts);
const filterProductsFor: any[] = [];
for(let i = 0; i < arrayProducts.length; i++){
    if(arrayProducts[i].price > 900){
        filterProductsFor.push(arrayProducts[i]);
        
    }
}
console.log('filtrado por for: ', filterProductsFor);

// 2. encontrar el primer objeto del array donde pricediscount sea mayor a 500 por medio de find
console.log('punto 2 ');
const findProducts = arrayProducts.find((product) => product.pricediscount > 500);
console.log('producto encontrado: ', findProducts);
// 3. encontrar el indice del primer elemento del array donde price sea mayor a 1000 por medio de findIndex
console.log('punto 3 ');
const findIndexProducts = arrayProducts.findIndex((product) => product.price > 1000);
console.log('indice del producto encontrado: ', findIndexProducts);
// 4. agregar 3 nuevos objetos de un producto de una tienda real por medio de push
console.log('punto 4 ');
arrayProducts.push(
    {
        id: 3,
        name: 'fideos',
        price: 2000,
        pricediscount: 1500
    },
    {
        id: 4,
        name: 'aceite',
        price: 3000,
        pricediscount: 2000
    },
    {
        id: 5,
        name: 'sal',
        price: 500,
        pricediscount: 300
    }
)
console.log('productos agregados fideos, aceite y sal: ', arrayProducts);

// punto 6
console.log('SOLUCIONES EJERCICIO 6');
const Array1: number[] = [1, 2, 3, 4, ];
const Array2: number[] = [ 6, 7, 8, 9];
// 1. concatenar el array1 con array2 por medio de concat y push
console.log('punto 1 ');
const concatArraysTaller: number[]= Array1.concat(Array2); 
console.log('Array concatenado mediante concat: ' , concatArraysTaller);
const pushArraysTaller = Array1.push(...Array2); 
console.log('Array concatenado mediante push: ' , pushArraysTaller);
// 2. a la const generada ordenar de menor a mayor por medio de sort
console.log('punto 2 ');
const sortArrayTaller = concatArraysTaller.sort((a, b) => a - b);
console.log('Array ordenado de menor a mayor: ',sortArrayTaller);
// 3. a la const generada ordenar de forma desendente por medio de reverse
console.log('punto 3 ');
const reverseArrayTaller = sortArrayTaller.reverse();
console.log('Array ordenado de mayor a menor: ',reverseArrayTaller);
console.log('\n', '\n');
