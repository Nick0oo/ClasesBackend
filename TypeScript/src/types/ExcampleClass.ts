//clase
class Person{
    private id: number;
    public name: string;
    protected email: string;
    //constructor
    constructor(id: number, name: string, email: string){
        this.id = id;
        this.name = name;
        this.email = email;
    }
    //metodos
    public greet(): void{
        console.log(`Hola, soy ${this.name}`);
        console.log('id: ', this.id);
    }
};
//herencia
class employee extends Person{
    private position: string;
    constructor(id: number, name: string, email: string, position: string){
        super(id, name, email);
        this.position = position;
    }
    public work(): void{
        console.log(`Hola, soy ${this.name}`);
        console.log('posicion: ', this.position);
    }
};
//instancias
const employee1 = new employee(1, 'juan', 'juan@gmail.com', 'developer');
console.log(employee1);
console.log(employee1.name);
employee1.greet();
employee1.work();



