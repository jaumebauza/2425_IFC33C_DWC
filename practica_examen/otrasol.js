function recorrerJson() {
    let titulo = jsonObj.squadName.toUpperCase();
  
    console.log("|-------------------", titulo, "-------------------",
        "\n|---Ciudad de origen: ", jsonObj.homeTown, "// Fecha origen: 2020", jsonObj.formed, "---")
    for (var i = 0; i < jsonObj.members.length; i++) {
      members = jsonObj.members[i];
  
      console.log(
        "\n|Nombre: ", members.name, 
        "\n|Edad: ", members.age, 
        "\n|Identidad secreta: ", members.secretIdentity, 
        "\n|Poderes: ", members.powers.join(", "), 
        "\n|---------------------------------------------------")
    }
  }