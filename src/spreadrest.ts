const friends=["rahim","karim",'Ayon']

const schoolfriends=["sakib","tamim",'rubel',"sabbir"]

const collegefriends=["shuvo","mugdho","shimanto"]


friends.push(...schoolfriends)

console.log(friends)




const user={
    name:'Abid Hasan Ayon',
    phoneNumber :"329863846"
}

const othherInformation ={
    hobby:"cricket",
    favouritePerson:"Myself"
}

const userInfo ={...user,...othherInformation}


console.log(userInfo)

const sendinvite=(friend1:string,friend2:string,friend3:string)=>{
    console.log(`send invitation to ${friend1}`)
    console.log(`send invitation to ${friend2}`)
    console.log(`send invitation to ${friend3}`)
}


sendinvite("Sakib","tamim","Musfiq")














