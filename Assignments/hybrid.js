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

let Play = {
    play() {
        console.log("Dog is playing");
    }
};

Object.assign(Dog.prototype, Play);

let obj = new Dog();
obj.eat();
obj.bark();
obj.play();
