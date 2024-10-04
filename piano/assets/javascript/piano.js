var cerca=[]



var partitures = [
    { nom: 'La Balanguera', notes: ['DO', 'RE', 'MI', 'FA', 'FA', 'SOL', 'SOL', 'LA#', 'LA#'] },
    { nom: 'Happy Birthday', notes: ['DO', 'DO', 'RE', 'DO', 'FA', 'MI', 'DO', 'DO', 'RE', 'DO', 'SOL', 'FA'] }
]

function Nota(nota, tipus=''){
    this.nota=nota+tipus
}

function AddCerca(nom,tipus=''){
    var nota = new Nota(nom,tipus)
    cerca.push[nota.nota]
}

function Cercador(mostra){
    for (var i=0;i !== partitures.length;i++){
        cerca.AddCerca[i]
        i++
    }
}
var mostra=[DO,DO,RE]