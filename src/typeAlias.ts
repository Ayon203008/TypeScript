type user ={
    id:number;
    name:{
        firstName: string;
        lastName:string
    },
    gender:"male"|"female";
    contactNumber:string;
    address:{
        division:string;
        city:string
    }
}


const user1:user={
    id:4345354,
    name:{
        firstName:"Abid ",
        lastName:"hasan "
    },
    gender:"male",
    contactNumber:"Melano park , silicon valley",
    address:{
        division:"NY",
        city:"La"
    }
}


console.log(user1)