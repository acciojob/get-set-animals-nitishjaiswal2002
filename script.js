//complete this code
class Animal {
	constructor(species) {
    this._species = species;
}
 get species() {
    return this._species;
  }

  makeSound() {
    console.log(`${this.species} makes a sound`);
  }
}
class Dog extends Animal {
	 purr() {
    console.log("purr");
  }
}

class Cat extends Animal {
	bark() {
    console.log("woof");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
