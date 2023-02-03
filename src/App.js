// Javascript Variables
const x = 10
let y = 25

console.log(x, y)   
y += 10
console.log(x, y)   
y = 'sometext'
console.log(x, y)   

//x=4

//Arrays
const t = [2 -1, 4]

const t2 = t.concat(5)

console.log(t)  
console.log(t2) 

// concat function

const a = [1, -1, 3]

const a2 = a.concat(5)

console.log(a) 
console.log(a2) 

// mapping

const m = [4,2,6]

const n1 = m.map(value => value * 2)
console.log(n1)   

const m2 = m.map(value => '<li>' + value + '</li>')
console.log(m2) 

// Destructing Assignment

const b = [5,3,2,1,4]

const [first, second, ...rest] = b

console.log(first, second)
console.log(rest)          

// Objects

const object1 = {
  Name:  'Abhinev Qasba',
  Age: 22,
  education: 'MCA',
  University: 'GD Goenka University',
  Address: 'Faridabad'
}
const object2 = {
  name: 'React js',
  level: 'Intern',
  size: 5,
}

const object3 = {
  Name: {
    first: 'Nitesh',
    last: 'singh',
  },
  Grades: [2, 3, 5, 3],
  University: 'GD Goenka University',
  course: 'MCA',
  Address: 'Delhi',
}
console.log(object1) 
console.log(object2)
console.log (object3)

object1.location= 'Gurgaon'
object3.location = 'Gurgaon'

object1['Id numeber'] = 29

// Fuctions 

const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
  }
  const result = sum(8,2)
console.log(result)

// single parameter function

const square = p => {
    console.log(p)
    return p * p
}
// If we remove console printing
// const square = p => p * p

// when manipulating arrays 
// map method

const c =[2,4,5]
const o1 = c.map(p => p * p)
console.log(o1)

// 2 ways of giving name in function declaration
// 1st way

function product(a,b) {
  return a*b 
}
   const Result = product(5,6)
   console.log(Result)

  // 2nd way by using fuction expression

  const average = function(a,b) {
    return (a+b)/2
  }

  const r = average(6,2)
  console.log(r)
  
  // object methods and this

  const arto = {
    name: 'Abhinev Qasba',
    age: 22,
    education: 'MCA',
    greet: function() {
      console.log('Hello, my name is ' + this.name)
      console.log('my age is ' + this.age)
      console.log('my education is ' + this.education)
    },
  }
   // arto.greet() 


  arto.growOlder = function() {
    this.age +=4
  }
  console.log(arto.age)
  arto.growOlder()
  console.log(arto.age)

  // doAddition

  const Y = {
    name: 'Abhinev Qasba',
    age: 22,
    education: 'MCA',
    greet: function() {
      console.log('hello, my name is ' + this.name)
    },
    doAddition: function(a, b) {
      console.log(a + b)
    },
  }
  
  Y.doAddition(23,-1 )   
   
  
  const referenceToAddition = Y.doAddition
  referenceToAddition(11,11 )

  Y.referenceToAddition(11,54)
