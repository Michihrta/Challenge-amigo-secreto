// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista de amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validación
    if (nombre === "") {
        alert("Por favor, inserte un nombre");
        return; // detener función si está vacío
    }

    // Agregar al array
    amigos.push(nombre);
    console.log(amigos); // Verificar en consola

    // Refrescar lista visual
    renderLista();

    // Limpiar input
    input.value = "";
    input.focus();
}

// Función para mostrar la lista en pantalla
function renderLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // limpiar lista antes de volver a renderizar

    amigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        ul.appendChild(li);
    });
}
