const KgToGMConverter=(input:string|number)=>{
    if(typeof input === "number"){
        return input*1000
    }
    else if(typeof input === "string"){
        const [value]=input.split(" ")
        return `Converted output is :${Number(value)*1000}`
    }
}


const result1= KgToGMConverter(2) as number

console.log(result1)


const result2=KgToGMConverter("2 kg") 

console.log(result2)