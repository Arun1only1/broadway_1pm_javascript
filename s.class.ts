// OOP => Object Oriented Programming

class Person {
  private firstName: string;
  private lastName: string;

  constructor(a: string, b: string) {
    this.firstName = a;
    this.lastName = b;
  }

  printFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

const person1 = new Person("Dipen", "Shrestha");
const person2 = new Person("Benjin", "Lama");

// person2.printFullName();
