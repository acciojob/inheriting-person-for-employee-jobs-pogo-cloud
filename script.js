// class Person {
//     constructor(name, age) {
//         this._name = name;
//         this._age = age;
//     }

//     greet() {
//         console.log(`Hello, my name is ${this._name} and I am ${this._age} years old`);
//     }
// }

// class Employee extends Person {
//     constructor(name, age, jobTitle) {
//         // Call the parent constructor
//         super(name, age);
//         this._jobTitle = jobTitle;
//     }

//     jobGreet() {
//         console.log(`Hello, my name is ${this._name}, I am ${this._age} years old, and my job title is ${this._jobTitle}`);
//     }
// }


// const p=new Person("Alice",25);
// p.greet();
// const e=new Employee("Bob",30,"Manager");
// e.jobGreet();
function Person(name,age){
	this.name=name;
	this.age=age;
	
}

function.prototype.greet=function(){
	console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
}
function Employee(name,age,jobTitle){
	Person.call(this,name,age);
	this.jobTitle=jobTitle;
}
Employee.prototype=Object.create(Person.prototype);
Employee.prototype.constructor=Employee;
Employee.prototype.jobGreet=function(){
	console.log(`Hello, my name is ${this._name}, I am ${this._age} years old, and my job title is ${this._jobTitle}`);
}
window.Person = Person;
window.Employee = Employee;
