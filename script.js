class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    greet() {
        return `Hello, my name is ${this._name}, I am ${this._age} years old`;
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        // Call the parent constructor
        super(name, age);
        this._jobTitle = jobTitle;
    }

    jobGreet() {
        return `Hello, my name is ${this._name}, I am ${this._age} years old and I am a ${this._jobTitle}`;
    }
}


// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
