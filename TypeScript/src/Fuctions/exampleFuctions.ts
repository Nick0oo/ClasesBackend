//fuction addOne
function addOne(a: number, b:number): number {
  return a + b;
};

//function greetOne
function greetOne(name: string, greeting: string='hello'): string {
  return `${greeting}, ${name}`;
};

//function printNumbersOne
function printNumbersOne(... numbers: number[]): void {
 console.log(numbers.join(', '));
};

//impresiones
console.log('fuctions');
const responseFuctions:number = addOne(1, 2);
console.log(responseFuctions);
console.log(addOne(1, 2));
console.log(greetOne('juan'));
printNumbersOne(1, 2, 3, 4, 5);