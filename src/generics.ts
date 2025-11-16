type GenericArrays = Array<string>

const friends:GenericArrays=["sakib","Tamim","Liton"]

//const numbers:GenericArray=[21,342,4,35,54]



type Cordinates <X,Y>=[X,Y]

const Cordinate1:Cordinates<number,number> =[20,30]

const cordinates:Cordinates<string,boolean>=["Abid Hasan",true]


type GenericArray<T> = Array<T>;
const userList :GenericArray<{name:string,age:number}>=[
   
   {
    name:" Ayon",
    age:32
   },
   {
    name:"Abid ",
    age:32
   },
   {
    name:"Virat Kohli",
    age:21
   },

]




interface Developer<T>{
    name:string;
    salary:number;
    device:{
        brand:string,
        model:string,

    }
    smartWatch:T
}

const poorDeveloper : Developer<{
    heartRate:string;
    stopWatch:boolean
}>={
    name:"Abid Hasan Ayon",
    salary:3232,
    device:{
        brand:"ASUS",
        model:"vivoBook"
    },
    smartWatch:{
        heartRate:"80bp",
        stopWatch:true
    }
}
