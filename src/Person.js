//classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('hello, my name is ' + this.name);
    }
}
const D = new Person('Aman jha', 34);
D.greet();
const E = new Person('Shilpa pandey', 33);
E.greet();
