class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, spceies: string, sound: string) {
    this.name = name;
    this.species = spceies;
    this.sound = sound;
  }

  makesound() {
    console.log(`${this.name} is making ${this.sound}`);
  }
}

const dog = new Animal("Doesgh vai", "dog", "Ghew Ghew");
dog.makesound();

class Student {
  name: string;
  age: number;
  sleep: number;
  address: string;

  constructor(name: string, age: number, sleep: number, address: string) {
    this.name = name;
    this.age = age;
    this.sleep = sleep;
    this.address = address;
  }

  getSleep() {
    console.log(`${this.name} eto ${this.sleep}gumay`);
  }
}

const student1 = new Student("Gayle", 39, 8, "Jamaica");
student1.getSleep();
console.log(student1);

class Teacher {
  name: string;
  age: number;
  address: string;
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.designation = designation;
  }

  // common method both student and teacher
  getSleep(numberOfHours: number) {
    console.log(`${this.name} ${numberOfHours} sleep for hours`);
  }

  // own method for teacher

  takeClass(NumberOfClass: number) {
    console.log(`${this.name} ${NumberOfClass} gonta class nei`);
  }
}

class Person {
  name: string; // common
  age: number; // common
  address: string; // common

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  // common
  getSleep(numOFhours: number) {
    console.log(`${this.name} ${numOFhours} ghonta ghumai`);
  }
}

class NewStudent extends Person {
  rollNo: number;
  constructor(name: string, age: number, address: string, rollNo: number) {
    super(name, age, address);
    this.rollNo = rollNo;
  }
}

const newStudent1 = new NewStudent("name", 434, "Califonia", 32);

class newTeacher extends Person {
  designation: string;
  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }
}
