class Person{
    getSleep(){
        console.log(`I am a normal happy perons. i sleep for 8 hours for a day`)
    }
}



class student extends Person{
    getSleep() {
        console.log(`i am a student . i sleep for 7 hours a day`)
    }
}


class NextLeveldevelop extends Person{
   getSleep() {
        console.log(`i am a nextlevel developer. i sleep for  5 hours a day`)
   }
}

const getSleepingHours =(param:Person)=>{
    param.getSleep()
}

const person1= new Person()
const person2 = new student()
const person3= new NextLeveldevelop()


getSleepingHours(person3)