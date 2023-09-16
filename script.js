function agregarTarea() {
  const nuevaTareaInput = document.getElementById("nuevaTarea");
  const listaTareas = document.getElementById("listaTareas");
  const nuevaTareaTexto = nuevaTareaInput.value.trim();
  if (nuevaTareaTexto !== "") {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto;
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "delete";
    botonEliminar.onclick = function () {
      listaTareas.removeChild(nuevaTarea);
    };
    const botonCompletar = document.createElement("button");
    botonCompletar.textContent = "Completar";
    botonCompletar.className = "Complete";
    botonCompletar.onclick = function (){
        nuevaTarea.classList.toggle("completed");

    }
    
    nuevaTarea.appendChild(botonEliminar);
    nuevaTarea.appendChild(botonCompletar)
    listaTareas.appendChild(nuevaTarea);
    nuevaTareaInput.value = "";
  }
}

function marcarCompletada(tarea) {
  tarea.classList.toggle("completed");
}

document
  .getElementById("listaTareas")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "li") {
      marcarCompletada(event.target);
    }
  });

document.getElementById("agregar").addEventListener("click", agregarTarea);
// Función para mostrar tareas completadas
function mostrarCompletadas() {
  const tareas = document.querySelectorAll("li");
  tareas.forEach((tarea) => {
    if (tarea.classList.contains("completed")) {
      tarea.style.display = "flex";
    } else {
      tarea.style.display = "none";
    }
  });
}
// Función para mostrar tareas pendientes
function mostrarPendientes() {
  const tareas = document.querySelectorAll("li");
  tareas.forEach((tarea) => {
    if (!tarea.classList.contains("completed")) {
      tarea.style.display = "flex";
    } else {
      tarea.style.display = "none";
    }
  });
}
