

type student ={id:number;name:string;dateOfBirth:string;class:string}

const addStudentToCourse =<T extends student>(studentInfo:T)=>{
  return{
    course:"Next level web development",
    ...studentInfo
  }
}

const student1={
  id:3232,
  name:"Abid Hasan Ayon",
  hasPen:true,
  dateOfBirth:"32-43-5421",
  class:"12"
}

const student2={
  id:3232,
  name:"Cristiano ronaldo",
  hasCar:true,
  isMarried:true
}

const result = addStudentToCourse(student1)

console.log(result)


