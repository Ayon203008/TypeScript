class student {
  name: string;
  age: number;
  address: string;
  hour: number;

  constructor(name: string, age: number, address: string, hour: number) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.hour = hour;
  }

  getSleep() {
    console.log(`${this.name} is sleeping ${this.hour}`);
  }
}
const student1 = new student("abid hasan ayon", 21, "jhdsghus", 23);

student1.getSleep()
