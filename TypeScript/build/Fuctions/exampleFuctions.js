function addOne(a, b) {
    return a + b;
}
;
function greetOne(name, greeting = 'hello') {
    return `${greeting}, ${name}`;
}
;
function printNumbersOne(...numbers) {
    console.log(numbers.join(', '));
}
;
console.log('fuctions');
const responseFuctions = addOne(1, 2);
console.log(responseFuctions);
console.log(addOne(1, 2));
console.log(greetOne('juan'));
printNumbersOne(1, 2, 3, 4, 5);
//# sourceMappingURL=exampleFuctions.js.map