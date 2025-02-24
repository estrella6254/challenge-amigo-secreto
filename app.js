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
    document.getElementById("amigo").value = "";
}