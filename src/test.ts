// enum data type


type UserRoles ="Admin"| "Editor" |"Viewer"

const canEdit =(role:UserRoles)=>{
    if(role==="Admin"|| role==="Editor"){
        return true
    }
    else{
        return false
    }
}

const isEditPermissable = canEdit("Admin")

console.log(isEditPermissable)