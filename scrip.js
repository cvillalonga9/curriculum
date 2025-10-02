
function canviNom() {
    let nom = prompt("COMO QUIERES LLAMARTE?")
    document.getElementById("nom").innerHTML = "NOM: "+nom;
}

function canviFoto(){
    let foto = prompt("Que vols ser?");
    document.getElementById("foto").src  = foto
}