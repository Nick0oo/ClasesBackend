class Person {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    greet() {
        console.log(`Hola, soy ${this.name}`);
        console.log('id: ', this.id);
    }
}
;
class employee extends Person {
    constructor(id, name, email, position) {
        super(id, name, email);
        this.position = position;
    }
    work() {
        console.log(`Hola, soy ${this.name}`);
        console.log('posicion: ', this.position);
    }
}
;
const employee1 = new employee(1, 'juan', 'juan@gmail.com', 'developer');
console.log(employee1);
console.log(employee1.name);
employee1.greet();
employee1.work();
//# sourceMappingURL=ExcampleClass.js.map