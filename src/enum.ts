type UserRole = "admin"| "editor" | "viewer"

const canEdit =( role:UserRole)=>{
    if(role==="admin" || role==="editor"){
        return true
    }
    else{
        return false
    }
}

const isEditPermissale = canEdit("admin")
console.log(isEditPermissale)




enum UserRoloes {
    Admin ="Admin",
    Editor="Editor",
    Viewer="Viewer"
}

const canEdit2 =(role:UserRoloes)=>{
    if(role===UserRoloes.Admin || role=== UserRoloes.Editor){
        return true
    }
    else{
        return false
    }
}