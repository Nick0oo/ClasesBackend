// interfaces objetos
interface dataInfo{
    id: number;
    name: string;
    email: string;
};
const dataUser: dataInfo = {
    id: 1,
    name: 'juan',
    email: 'juan@gmail.com'
};

//interfaces arrays
interface personData{
    name: string;
    age: number;
};

let peopleArray: personData[] = [
    {name:'Alice', age:25},
    {name:'Bob', age:35},
    {name:'Juan', age:15},

];

console.log(peopleArray);
console.log(peopleArray[0].name);
console.log(peopleArray[1].age);
console.log(peopleArray[2]);
console.log(dataUser, 'dataUser');
