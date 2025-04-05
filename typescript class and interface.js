"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Good morning, I am ${this.name} , and I am ${this.age} years old.`;
    }
}
let obj = new Person('Mohammad Fuzel', 22);
console.log(obj.greet());
