
//Array para los nombres
let friends = []; 

//Función para que solo acepten letras y no numeros
function validarNombre(nombre) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(nombre);
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo.trim() === "") {
        alert("Por favor, inserte un nombre."); 
        return false;
    } else if (!validarNombre(nombreAmigo)) { //validación de solo el nombre para que sea agregado al array
        alert("Por favor, inserte un nombre válido (solo letras y espacios).");
        return false;
    } else {
        friends.push(nombreAmigo); // Agregado a la lista array
        document.getElementById("amigo").value = "";
        mostrarAmigos();
        return true;
    }
}

function mostrarAmigos() { //operacion para mostrarlos y agregarlos de 1 en 1 y asi actualizandose(para que aparezcan en la pantalla del juego)
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    for (var i = 0; i < friends.length; i++) {
        var li = document.createElement("li");
        li.textContent = friends[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (friends.length < 3) {
        alert("No hay suficientes amigos disponibles para sortear. Se necesitan al menos 3 amigos.");
        return; //se escogen como 3 minimo por la probabilidad
    }
    //Operación de sorteo:
    var indiceAleatorio = Math.floor(Math.random() * friends.length); 
    //Variable para que aparezca el nombre amigo sorteado en la pantalla:
    var amigoSorteado = friends[indiceAleatorio];
    document.getElementById("resultado").innerHTML = "El amigo secreto sorteado es: " + amigoSorteado;
    console.log(amigoSorteado);

    //codigo para que no aparezca la lista de amigos ingresados al momento del sorteo:
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""

}
