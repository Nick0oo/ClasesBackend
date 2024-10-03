console.log('TALLER 1');
console.log('\n', '\n');
console.log('Javier Nicolas Salas Liñeiro');
console.log('\n', '\n');
console.log('SOLUCIONES EJERCICIO 1');
const auxNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
auxNumber.push(10, 12, 15, 16, 17);
console.log(' Punto 1 ', auxNumber);
auxNumber.pop();
console.log('Punto 2 ', auxNumber);
const index1Taller = auxNumber.indexOf(1);
const index2Taller = auxNumber.indexOf(4);
const index3Taller = auxNumber.indexOf(7);
console.log('Punto 3 ');
console.log('indice de 1 ', index1Taller, 'indice de 4 ', index2Taller, 'indice de 7 ', index3Taller);
console.log('Punto 4 ');
const slicedTaller = auxNumber.slice(2, 9);
console.log('sliced solicitado ', slicedTaller);
console.log('Punto 5 ');
const everyTaller = auxNumber.every((num) => num > 1);
console.log('todos los elementos son mayores a 1 son: ', everyTaller);
console.log('Punto 6 ');
const someTaller = auxNumber.some((num) => num >= 7);
console.log('algun elemento es mayor o igual que 7: ', someTaller);
console.log('\n', '\n');
console.log('SOLUCIONES EJERCICIO 2');
const auxString = ['1', '2', '3', '4', '5', '6', '7'];
auxString.push('10', '11', '12', '13', '14');
console.log('punto 1 ', auxString);
const index1StringTaller = auxString.indexOf('10');
const index2StringTaller = auxString.indexOf('11');
const index3StringTaller = auxString.indexOf('14');
console.log('punto 2 ');
console.log('indice de 10 ', index1StringTaller, 'indice de 11 ', index2StringTaller, 'indice de 14 ', index3StringTaller);
console.log('\n', '\n');
console.log('SOLUCIONES EJERCICIO 3');
const menssage = 'bienbenidos al itp';
const SplitTaller = menssage.split(' ');
console.log('punto 1 ');
console.log(SplitTaller);
const JoinTaller = SplitTaller.join(',');
console.log('punto 2 ');
console.log(JoinTaller);
console.log('\n', '\n');
console.log('SOLUCIONES EJERCICIO 4');
const names = 'michael,anderson,yadir,kevin,Emerson';
console.log('punto 1 ');
const SplitNames = names.split(',');
console.log(SplitNames);
console.log('punto 2 ');
const JoinNames = SplitNames.join(' ');
console.log(JoinNames, '\n', '\n');
console.log('SOLUCIONES EJERCICIO 5');
const arrayProducts = [
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
];
console.log('punto 1 ');
const filterProducts = arrayProducts.filter((product) => product.price > 900);
console.log('filtrado por filter: ', filterProducts);
const filterProductsFor = [];
for (let i = 0; i < arrayProducts.length; i++) {
    if (arrayProducts[i].price > 900) {
        filterProductsFor.push(arrayProducts[i]);
    }
}
console.log('filtrado por for: ', filterProductsFor);
console.log('punto 2 ');
const findProducts = arrayProducts.find((product) => product.pricediscount > 500);
console.log('producto encontrado: ', findProducts);
console.log('punto 3 ');
const findIndexProducts = arrayProducts.findIndex((product) => product.price > 1000);
console.log('indice del producto encontrado: ', findIndexProducts);
console.log('punto 4 ');
arrayProducts.push({
    id: 3,
    name: 'fideos',
    price: 2000,
    pricediscount: 1500
}, {
    id: 4,
    name: 'aceite',
    price: 3000,
    pricediscount: 2000
}, {
    id: 5,
    name: 'sal',
    price: 500,
    pricediscount: 300
});
console.log('productos agregados fideos, aceite y sal: ', arrayProducts);
console.log('SOLUCIONES EJERCICIO 6');
const Array1 = [1, 2, 3, 4,];
const Array2 = [6, 7, 8, 9];
console.log('punto 1 ');
const concatArraysTaller = Array1.concat(Array2);
console.log('Array concatenado mediante concat: ', concatArraysTaller);
const pushArraysTaller = Array1.push(...Array2);
console.log('Array concatenado mediante push: ', pushArraysTaller);
console.log('punto 2 ');
const sortArrayTaller = concatArraysTaller.sort((a, b) => a - b);
console.log('Array ordenado de menor a mayor: ', sortArrayTaller);
console.log('punto 3 ');
const reverseArrayTaller = sortArrayTaller.reverse();
console.log('Array ordenado de mayor a menor: ', reverseArrayTaller);
console.log('\n', '\n');
//# sourceMappingURL=Taller_1.js.map