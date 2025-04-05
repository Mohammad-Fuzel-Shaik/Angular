interface Employee {
    id: number;
    name: string;
    role: string;
}

class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    greet(): string{
        return `Good morning, I am ${this.name} , and I am ${this.age} years old.`;
    }
}
let obj=new Person('Mohammad Fuzel',22);
console.log(obj.greet());
