class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this._name}, I am ${this._age} years old`);
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        // Call the parent constructor
        super(name, age);
        this._jobTitle = jobTitle;
    }

    jobGreet() {
        console.log(`Hello, my name is ${this._name}, I am ${this._age} years old, and my job title is ${this._jobTitle}`);
    }
}


const p=new Person("Alice",25);
p.greet();
const e=new Employee("Bob",30,"Manager");
e.jobGreet();

window.Person = Person;
window.Employee = Employee;
