class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  getSleep(numberOfhours: number) {
    console.log(`${this.name} doinik ${numberOfhours} ghonta gumay`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(numberOfhours: number) {
    console.log(`${this.name} doinik ${numberOfhours} gonta study kore `);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  takeClass(numberOfhours: number) {
    console.log(`${this.name} doinik ${numberOfhours} ghonta claass nei`);
  }
}


const isStudent=(user: Person)=>{
    return user instanceof Student
}

const isTeacher =(user :Person)=>{
    return user instanceof Teacher
}


const getUserInfo = (user:Person)=>{
    if(isStudent(user)){
        user.doStudy(10)
    }
    else if(isTeacher(user)){
        user.takeClass(5)
    }
    else{
        user.getSleep(16)
    }
}


const student1= new Student("Mr Beast")
const teacher1 = new Teacher("Mr teacher")

const persor1 = new Person("Mr person")

getUserInfo(persor1)