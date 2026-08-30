let Fly = {
    fly() {
        console.log("Bird is flying");
    }
};

let Swim = {
    swim() {
        console.log("Bird is swimming");
    }
};

class Bird {}

Object.assign(Bird.prototype, Fly, Swim);

let obj = new Bird();
obj.fly();
obj.swim();
