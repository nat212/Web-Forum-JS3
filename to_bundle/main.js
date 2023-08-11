class Animal {
  hp = 10;
  sound = null;

  talk() {
    console.log(this.sound);
  }
}

class Cat extends Animal {
  hp = 5;
  sound = 'Meow';
}

const cat = new Cat();
cat.talk();