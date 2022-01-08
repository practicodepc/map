let personas = [
    {nombre: "Maria", apellido: "Reyes"},
    {nombre: "Pedro", apellido: "Sanchez"},
    {nombre: "Juan", apellido: "Perez"},
];

let personasModificado = personas.map(function(item, index, array) {
    let objetoNuevo = {};
    objetoNuevo["nombreCompleto"] = item.nombre + " " + item.apellido; 
    return objetoNuevo;
})






















