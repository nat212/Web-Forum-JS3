abstract class Animal {
  protected abstract hp: number;
  protected abstract sound: string;

  public talk(): void {
    console.log(this.sound);
  }
}

class Cat extends Animal {
  hp = 5;
  sound = 'Meow';
}

const cat = new Cat();
cat.talk();