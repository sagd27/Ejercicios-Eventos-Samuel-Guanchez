// Ejercici 1: calculo de masa corporal
// document.addEventListener('DOMContentLoaded', function() {
    
//     const calculateBtn = document.getElementById('calculateBtn');
    
//     calculateBtn.addEventListener('click', function() {
   
//         const peso = document.getElementById('peso').value;
//         const altura = document.getElementById('altura').value;

       
//         if (peso > 0 && altura > 0) {
        
//             const alturaEnMetros = altura / 100;


//             const bmi = peso / (alturaEnMetros * alturaEnMetros);

//             const roundedBmi = bmi.toFixed(2);

      
//             document.getElementById('bmiResult').value = roundedBmi;
//         } else {
           
//             alert('Por favor, ingrese valores válidos para el peso y la altura.');
//         }
//     });
// });

// Ejercicio 2: conversion de divisas

// document.addEventListener('DOMContentLoaded', function() {
    
//         const usdInput = document.getElementById('usd');
//         const mxnInput = document.getElementById('mxn');
        
//         const exchangeRate = 140; // 1 USD = 140 MXN
    
      
//         function convertUsdToMxn() {
//             const usdValue = parseFloat(usdInput.value);
//             const mxnValue = (usdValue * exchangeRate).toFixed(2);
//             mxnInput.value = mxnValue;
//         }
    
//         function convertMxnToUsd() {
//             const mxnValue = parseFloat(mxnInput.value);
//             const usdValue = (mxnValue / exchangeRate).toFixed(2);
//             usdInput.value = usdValue;
//         }
    
//         usdInput.addEventListener('input', convertUsdToMxn);
//         mxnInput.addEventListener('input', convertMxnToUsd);
    
    
//         convertUsdToMxn();
// });        

// Ejerccio 3: aplicacion de notas



let notas = [];


let idGlobal = 3; // creando manualmente tres notas


notas.push({ id: 1, titulo: "Nota 1", texto: "Texto de la nota 1", realizada: false });
notas.push({ id: 2, titulo: "Nota 2", texto: "Texto de la nota 2", realizada: false });
otas.push({ id: 3, titulo: "Nota 3", texto: "Texto de la nota 3", realizada: false });



function pintarNotas() {
    const notesContainer = document.getElementById('notesContainer');
    notesContainer.innerHTML = '';

    if (notas.length === 0) {
        notesContainer.innerHTML = '<p class="text-center">NO HAY NOTAS PARA MOSTRAR</p>';
        return;
    }

    notas.forEach(nota => {
        const notaCard = `
            <div class="col-md-4 note-card">
                <div class="card">
                    <div class="card-body">
                        <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada ? "checked" : ""}>
                        <h5 class="card-title">${nota.titulo}</h5>
                        <p class="card-text">${nota.texto}</p>
                        <button class="btn btn-danger mt-2" onClick="borrarNota(${nota.id})">Borrar Nota</button>
                    </div>
                </div>
            </div>
        `;
        notesContainer.innerHTML += notaCard;
    });
}

// Función para agregar una nota
function agregarNota(titulo, texto) {
    idGlobal++;
    const nuevaNota = {
        id: idGlobal,
        titulo: titulo,
        texto: texto,
        realizada: false
    };
    notas.push(nuevaNota);
}

// Función para borrar una nota
function borrarNota(id) {
    notas = notas.filter(nota => nota.id !== id);
    pintarNotas();
}

// Función para marcar una nota como realizada
function marcarRealizada(id) {
    const nota = notas.find(nota => nota.id === id);
    nota.realizada = !nota.realizada;
    pintarNotas();
}

// Evento para guardar una nueva nota
document.getElementById('saveNoteBtn').addEventListener('click', function() {
    const titulo = document.getElementById('noteTitle').value;
    const texto = document.getElementById('noteText').value;

    if (titulo.trim() !== '' && texto.trim() !== '') {
        agregarNota(titulo, texto);
        pintarNotas();
        document.getElementById('noteTitle').value = '';
        document.getElementById('noteText').value = '';
    } else {
        alert('Por favor, complete ambos campos.');
    }
});

// Evento para limpiar los campos de entrada
document.getElementById('clearFieldsBtn').addEventListener('click', function() {
    document.getElementById('noteTitle').value = '';
    document.getElementById('noteText').value = '';
});

// Evento para buscar notas por texto
document.getElementById('searchText').addEventListener('input', function() {
    const searchText = document.getElementById('searchText').value.toLowerCase();
    pintarNotasFiltradas();
});

// Evento para filtrar notas completadas
document.getElementById('filterCompleted').addEventListener('change', function() {
    pintarNotasFiltradas();
});

// Función para filtrar notas por estado de realización
function filtrarPorRealizada(array) {
    const filterCompleted = document.getElementById('filterCompleted').checked;
    if (filterCompleted) {
        return array.filter(nota => nota.realizada);
    }
    return array;
}

// Función para filtrar notas por texto
function filtrarPorTexto(array) {
    const searchText = document.getElementById('searchText').value.toLowerCase();
    if (searchText !== '') {
        return array.filter(nota => nota.titulo.toLowerCase().includes(searchText) || nota.texto.toLowerCase().includes(searchText));
    }
    return array;
}

// Función para pintar notas filtradas
function pintarNotasFiltradas() {
    const filteredNotas = filtrarPorRealizada(filtrarPorTexto(notas));
    const notesContainer = document.getElementById('notesContainer');
    notesContainer.innerHTML = '';

    if (filteredNotas.length === 0) {
        notesContainer.innerHTML = '<p class="text-center">NO HAY NOTAS PARA MOSTRAR</p>';
        return;
    }

    filteredNotas.forEach(nota => {
        const notaCard = `
            <div class="col-md-4 note-card">
                <div class="card">
                    <div class="card-body">
                        <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada ? "checked" : ""}>
                        <h5 class="card-title">${nota.titulo}</h5>
                        <p class="card-text">${nota.texto}</p>
                        <button class="btn btn-danger mt-2" onClick="borrarNota(${nota.id})">Borrar Nota</button>
                    </div>
                </div>
            </div>
        `;
        notesContainer.innerHTML += notaCard;
    });
}

// Inicializar la pantalla con las notas de prueba
document.addEventListener('DOMContentLoaded', pintarNotas);
