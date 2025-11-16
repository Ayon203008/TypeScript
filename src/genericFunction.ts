const createArrayWithString = (value: string) => [value];

const createArrayWithNumber = (value: number) => [value];

const createArrayWithObj = (value: { id: number; name: string }) => {
  return [value];
};

const arrString = createArrayWithString("apple");

const arrNumber = createArrayWithNumber(2332);

const arrObj = createArrayWithObj({
  id: 32323,
  name: "Nextlevel web development",
});

const createArrayWithTuple = (param1: string, param2: string) => [
  param1,
  param2,
];


const createArrayTupleWithGeneric=<X,Y>
(param1:X,param2:Y)=>[param1,param2]


const res1= createArrayTupleWithGeneric("Abid Hasan Ayon",false)

const res2=createArrayTupleWithGeneric(222,{
    name:"Abid"
})






const addStudentToCourse =<T>(studentInfo:T)=>{
  return{
    course:"Next level web development",
    ...studentInfo
  }
}



const student1={
  id:3232,
  name:"Abid Hasan Ayon",
  hasPen:true
}

const student2={
  id:3232,
  name:"Cristiano ronaldo",
  hasCar:true,
  isMarried:true
}


const result = addStudentToCourse(student1)

console.log(result)


