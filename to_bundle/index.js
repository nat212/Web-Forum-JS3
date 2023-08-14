import { Animal } from "./animal";
class Cat extends Animal {
  hp = 5;
  sound = "Meow";
}

const cat = new Cat();
cat.talk();
