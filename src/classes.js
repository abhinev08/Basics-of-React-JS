//classes
class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    greet() {
      console.log('hello, my name is ' + this.name)
    }
  }
  
  const aman = new Person('Aman jha', 34)
  aman.greet()
  
  const shilpa = new Person('Shilpa pandey', 33)
  shilpa.greet()

  console.log(aman)
  console.log(shilpa)