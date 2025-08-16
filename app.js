// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {
const input = document.getElementById("amigo");
const nombre = input.value.trim();

//validación
if (nombre === "") {
    alert ("Por favor, inserte un nombre");
    return; //detener funcion si está vacia
    }

//agregar array
amigos.push(nombre);
mostrarAmigos();
//limpiar input
input.value=="";
input.focus();
}
console.log(amigos);//verificar en consola

