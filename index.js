//inheritance allows a new class to inherit properties and methods from an existing class(Parent->child) helps with code reusability

//super keyword used in classes to call the constructor or access the properties and method of a parent(superclass) this = this object
// super= the parent

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }
}

class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
}

class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("Baramundi", 12, 25);
const hawk = new Hawk("eagle", 12, 25);

console.log(rabbit.name);
console.log(rabbit.runSpeed);
