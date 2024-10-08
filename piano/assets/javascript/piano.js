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
    cerca.push(nota.nota)
}

function cercador() {
    for (var i = 0; i < partitures.length; i++) {
        var notesPartitura = partitures[i].notes;
        var cercaTrobat = false;
        for (var j = 0; j <= notesPartitura.length - cerca.length; j++) {
            var trobat = true;
            for (var k = 0; k < cerca.length; k++) {
                if (notesPartitura[j + k] !== cerca[k]) {
                    trobat = false;
                    break;
                }
            }
            if (trobat) {
                console.log('Coincidencia trobada en: ' + partitures[i].nom);
                cercaTrobat = true;
                break;
            }

        }
    }
}

AddCerca('DO')
AddCerca('RE')

cercador()