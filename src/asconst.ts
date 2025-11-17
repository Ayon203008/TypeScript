
const UserRoles ={
    Admin:"ADMIN",
    Editor:"EDITOR",
    Viwer:"VIEWER"
} as const 

const canEdit =(role:(typeof UserRoles)[keyof typeof UserRoles])=>{
    if(role===UserRoles.Admin || role ===UserRoles.Editor){
        return true
    }
    else{
        return false
    }
}


const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);



