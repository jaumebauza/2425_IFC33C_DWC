function esAnagrama(texto1,texto2){
    let resultat = false
    texto1 = texto1.split("").sort().join("")
    texto2 = texto2.split("").sort().join("")

    if(texto1===texto2){
        resultat=true
    }
    return resultat
}
console.log(esAnagrama("estanco","tabaco"))