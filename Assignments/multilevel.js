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

class Puppy extends Dog {
    play() {
        console.log("Puppy is playing");
    }
}

let obj = new Puppy();
obj.eat();
obj.bark();
obj.play();
