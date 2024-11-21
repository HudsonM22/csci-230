class Person {}
//2 ways to declare a class
const Animal = class {} 

console.log('------ hoisted ---------') 


console.log(func); //undefined
var func = function() {}
console.log(func); 


console.log(classExpression); //undefined
var classExpression = class {}
console.log(classExpression); //class {}

console.log("--- FYI hoisting only works when declared with var ---")
console.log("--- scopes ---")
//function declarations are function scoped whereas classes are block scoped
{
    function FunctionDeclaration() {}
    class ClassDeclaration {} //this is directly from the book but i think it shows it really good
    console.log(ClassDeclaration + " This is inside the block where class is declared"); 
} 
   
  console.log(FunctionDeclaration + " this is declared in the block and called outside it"); // FunctionDeclaration() {}
  //console.log(ClassDeclaration); this leads to an error

console.log("------ Class Composition -------")

class test {}

class test2 {
    constructor(arg) {
        this.arg = arg;
    }
}

class test3 {
    get myTest3() {
        return null;
    }
}

class test4 {
    static myQux() {} //creates static method inside class can only be used by that class and not instantiated
}

console.log("-------- class constructor -----------")
const classtest = new test2(5)
console.log(classtest.arg); //5

console.log(test3.myTest3); //null getter for test3

console.log("-------- classes and special funcs ---------")

console.log(Person)
console.log(typeof(Person)) //function   it identifies as a function

console.log(Person.prototype)

let p = new Person()


console.log(p.constructor === Person) //true
console.log(p instanceof Person) //true
console.log(p instanceof Person.constructor) //false

console.log(Object.getPrototypeOf(p))
console.log(p)

console.log("---------- instance, prototype, and class members")

class Human {
    constructor() { //sam h1 creates it in memory and h2 points to the same spot leading to the true output
        this.name = new String('sam') 
        this.sayName = () => {console.log(this.name)}
        this.namesArr = ['alc', 'unc']
    }
}

let h1 = new Human(), h2 = new Human();
console.log(h1.name) //sam
h1.sayName() //calls function inside the class constructor
console.log(h1.namesArr) //['alc', 'unc']

console.log(h1.name === h2.name) //false  this create 2 spots in memory due to new String()

console.log('----------- class field declarations ------------')

class Human2 { //this is a field inside a class
    name = 'bob'
    
    constructor() {
        console.log(this.name)
    }
}

const h3 = new Human2()

class Human3 {
    name;
    constructor() {
        console.log(this.name)// undefined
    }
}

console.log("------- prototype methods ---------")
class Human4 {
    constructor() {
        this.locate = () => console.log('instance') //this overwrites the locate function in prototype and is unique to each instance
    }

    locate() {
        console.log('prototype') //this is stored in the prototype
    }
}

h4 = new Human4()

h4.locate() //instance
Human4.prototype.locate() //prototype

const symbolKey = Symbol('symbolkey')

class Human5 {
    [symbolKey]() { //symbol keys just like keys in objects
        console.log('another way to write a function name similar to object')
    }
}

//getters and setters are similar to their object uses and declarations

class Human6 {
    name; //setters cannot declare variables btw. only constructors can

    set name(newName) {
        this.name = newName
    }

    get name() {
        return this.name
    }
}

const h6 = new Human6()
h6.name = 'anthony'
console.log(h6.name) //anthony

//this is the same way as how object getters and setters work

console.log('---------- Private class members -----------')

class Human7 {
    #privateVar; //private variables are not accessible from outside the class
    #name = 'gorlock the handsome one'

    get privateVar() {
        return this.#privateVar
    }

    set privateVar(arg) {
        this.#privateVar = arg
    }
}

//console.log(Human7.constructor.#name) //this results in error

console.log(Human7.constructor.privateVar) //undefined since it was never set to anything

console.log('--------- static methods & accessors ------------')

class Human8 {
    static staticVar = 'static variable' //this exists across all instances
    static #name;

    static create() { //this is called a factory because it returns an instance of this class. usually there would be non static vars and methods in this class
        return new Human8()
    }

    static { //this is a static initialization block for when you want to init a staic variable
        this.#name = 'gorlock the handsome one' //ideally this would be private
    }
}

const h8 = new Human8()
console.log(Human8.staticVar) //static variable
console.log(Human8.name) //private static name with no getter

console.log('-------- Iterator and generator block ----------')

class Human9 {
    *createName() {
        yield 'gorlock'
        yield 'the'
        yield 'handsome'
    }
}

let h9 = new Human9()
let nameIter = h9.createName()

console.log(nameIter.next().value)
console.log(nameIter.next().value)
console.log(nameIter.next().value) //this iterates through.

console.log('-------- Inheritance ----------')

class Vehicle {}

class Bus extends Vehicle {}

let b = new Bus()

console.log(b instanceof Bus);      // true
console.log(b instanceof Vehicle);  // true

//similar to java the extended classes derive the methods from the super class

console.log('------------ constructors, home objects, and super() --------')

class Vehicle2 {
    constructor() {
        this.hasEngine = true
    }
}

class Bus2 extends Vehicle2 {
    constructor() { // Cannot reference 'this' before super(), will throw ReferenceError
        super(); //this invkes the parents constructor

        console.log(this)
    }
}

new Bus2() //this also works with static methods

class Vehicle3 {
    static test() {
      console.log('vehicle');
    }
} //this is from the book but serves to be more of how it can be implemented
   
  class Bus3 extends Vehicle3 {
    static test() {
      super.test(); //this calls the super classes function of this
    }//without this super it doesnt work
}

Bus3.test()

console.log('---------- abstract base classes ----------')
//js doesnt explicitly support this so you need to use new.target syntax

class Vehicle4 {
    constructor() {
        if (new.target === Vehicle4) {
            throw new Error('Cannot instantiate abstract class');
        }

        if(!this.test) { //this allows you set force the construction of methods in sub classes
            throw new Error('Method "test" must be implemented.');
        }
    } 

}
//this is a way to make a class abstract in js

class Bus4 extends Vehicle4 {
    test() {
        console.log('bus test');
    }
}

try {
    new Bus4()
    new Vehicle4()
} catch(Error){ //try catch so that the abstract class error is visible
    console.log(Error)
}

console.log(" ------------ inheriting from buit in types ----------")

class superArray extends Array {
    constructor(...args) {
        super(...args);
        console.log('super array');
        console.log(this)
    }
}

new superArray([3, 5, 2, 4, 6])

console.log('---------- class mixins -----------')
//class mixins allow you to add methods to classes

class Bird {}

function getParentClass() {
    return Bird;
}

class twitter extends getParentClass() {}


function flapMixin(base) { //this is the non arrow lambda function way (my favorite)
    return class extends base {
        flap() {
            console.log('flap');
        }
    }
}

//this is the arrow lambda function way(gross looking way)
const flyMixin = (base) => class extends base {
    fly() {
        console.log('fly');
    }
}

class woodpecker extends flyMixin(flapMixin(Bird)) {}
//this creates an instance of a woodpecker that extends bird but also gets the methods returned by the mixin functions
let coolBird = new woodpecker()

coolBird.fly()
coolBird.flap()