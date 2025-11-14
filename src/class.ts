class Animal {
    name:string;
    species:string;
    sound : string

    constructor(name:string,species:string,sound:string){
        this.name=name
        this.sound=sound
        this.species=species
    }
    makeSound (){
        console.log(`${this.name} is making ${this.sound}`)
    }
}
const dog = new Animal("The Black dog","dog","gew gew")
const cat = new Animal("Bengal cat","cat","Meaw Meaw")

cat.makeSound()
dog.makeSound()