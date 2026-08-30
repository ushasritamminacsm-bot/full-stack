class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}

class Cat extends Animal {
    meow() {
        console.log("Cat is meowing");
    }
}

let dog = new Dog();
dog.eat();
dog.bark();

let cat = new Cat();
cat.eat();
cat.meow();
