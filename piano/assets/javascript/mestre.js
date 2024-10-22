function Nota(nota,tipus){
    this.nota=nota
    this.tipus=tipus
}

let cerca =[]

function AddCerca(nota,tipus,cerca){
    cerca.push(new Nota(nota,tipus))
}
AddCerca("Do","",cerca)
AddCerca("Re","",cerca)
AddCerca("Mi","",cerca)
AddCerca("Fa","#",cerca)

function Partitura(nombre,melodia){
    this.nombre=nombre
    this.melodia=melodia
}

let partituras=[]

melodiaBalagera= [new Nota("DO",""),
    new Nota("Re",""),
    new Nota ("Mi",""),
    new Nota ( "Fa",""),
    new Nota ( "Fa",""),
    new Nota ( "Sol",""),
    new Nota ( "Sol",""),
    new Nota ( "La",""),
    new Nota ( "La","")

]

partituraLaBalagera = new Partitura("La Balagera", melodiaBalagera)
partituras.push(partituraLaBalagera)


melodiaHappyBerthday= [new Nota("DO",""),
    new Nota("Do",""),
    new Nota ("Re",""),
    new Nota ( "Do",""),
    new Nota ( "Fa",""),
    new Nota ( "Mi",""),
    new Nota ( "Do",""),
    new Nota ( "Do",""),
    new Nota ( "Re",""),
    new Nota ( "Do",""),
    new Nota ( "Sol",""),
    new Nota ( "Fa",""),

]

partituraHappyBerthday= new Partitura("Happy Berthday", melodiaHappyBerthday)
partituras.push(partituraHappyBerthday)


console.log(partituras)

function cercador(partituras,cerca){
    let resultado = []

    for (let i=0;i<partituras.length;i++){
        
        for(let j=0; j<partituras.melodia.length;j++){
            let trobat = true
            for(let k=0;k<cerca.length;k++){
            
                if(partituras.melodia[j+cerca.length] === undefined
                    || partituras.melodia[j].nota !== cerca[j+k].nota ||
                    partituras.melodia[j].tipus !== cerca[j+k].tipus
                ){
                    trobat = false
                }
            }
        }

        if (trobat){
            resultado.push(partitura)
        }
    }
}

console.log(cercador(partituras,cerca))