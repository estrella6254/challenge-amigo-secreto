    // El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//crear la lista para amigos
let amigos = [];

//crear la funcion ppara agregar amgos 
function agregarAmigo() {
    const nombreInput = document.getElementById("amigo").value.trim();
    if (nombreInput === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    amigos.push(nombreInput);
    actualizarLista(); // declarar esta funcion aqui hace que la lista se actualice y se refleje en la pantalla
    document.getElementById("amigo").value = "";
}

//funcion actualizar y mostrar amigos en pantalla 
function actualizarLista() { 
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

//funcion para el sorteo de amigos
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, agrega al menos un amigo antes de sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = `Tu amigo secreto es: ${amigoSecreto}`;
    resultado.appendChild(li);
}