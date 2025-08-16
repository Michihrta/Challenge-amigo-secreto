// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function renderLista() {
const ul = document.getElementById("listaAmigos");
HTML = "";
amigos.forEach((nombre) => { 
const li = document.createElement("li");
li.textContent = nombre;
ul.appendChild(li);
});

//validación
if (nombre === "") {
    alert ("Por favor, inserte un nombre");
    return; //detener funcion si está vacia
    }
//agregar array
amigos.push(nombre);
console.log(amigos);//verificar en consola
renderLista();
//limpiar input
input.value=="";
input.focus();
}