export abstract class Animal {
  protected abstract hp: number;
  protected abstract sound: string;
  protected abstract name: string;

  public talk(): void {
    console.log(`${this.name} says ${this.sound}!`);
  }
}
