class Animal {
    name:string;
    species :string;
    sound:string

    constructor(name:string,species:string,sound:string){
        this.name=name
        this.species=species
        this.sound =sound
    }
    makeSound (){
        console.log(`${this.name} is making ${this.sound} `)
    }
}

const dog = new Animal ("Dogesh Vai","dog","Ghew Ghew")
console.log(dog)

const cat = new Animal ("Bengal cat","cat","Meaw Meaw")
console.log(cat)
