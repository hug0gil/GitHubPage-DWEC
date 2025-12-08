function procesarTareas(tareas, callbackFinal) {
    const resultado = [];

    tareas.forEach(tarea => {
        setTimeout(() => {
            console.log(`Tarea ${tarea.id} completada`);
            resultado.push(tarea.id);


            if (resultado.length === tareas.length) {
                callbackFinal(resultado);
            }
        }, tarea.duration);
    });
}

const tareas = [
    { id: 'A', duration: 3000 },
    { id: 'B', duration: 1000 },
    { id: 'C', duration: 2000 }
];

procesarTareas(tareas, resultadoFinal => {
    console.log('Todas las tareas completadas:', resultadoFinal);
});
