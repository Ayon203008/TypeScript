type User ={
    id:number;
    name:string;
    address:{
        city:string
    }
}

const user:User={
    id:436387,
    name:"Abid Hasan Ayon",
    address:{
        city:"Melon Park , USA"
    }
}

const getPropertyFromObj = (obj:User,key:"id" | "name" | "address")=>{
    return obj[key]
}




