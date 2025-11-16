// use of interface only for non primitive data tpye
interface Iuser {
  name: string;
  age: number;
}

interface IuserWithRole extends Iuser {
  role: "admin" | "user";
}

const user1: IuserWithRole={
    name:"Mr Abid Hasan Ayon",
    age:32,
    role:"admin"
}

console.log(user1)




interface IAdd {
    (num1:number,num2:number):number
}

const add:IAdd =(num1,num2)=>num1+num2

