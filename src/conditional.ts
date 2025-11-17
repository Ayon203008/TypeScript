type A= null
type B= undefined

type C = A extends number ? true : B extends undefined ? true : false

type RichPeopleVehicles ={
    bike:string;
    car:string;
    ship:string
}


type CheckVechile <T> = T extends keyof RichPeopleVehicles ? true : false

type HasBike = CheckVechile<"tractor">

