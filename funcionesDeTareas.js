let fs = require ('fs');

module.exports = tareasDelHogar = { 
    leerTareasJSON : () => {
        let listaTareas = fs.readFileSync('./tareas.json','utf-8')
        return JSON.parse(listaTareas)
    },
    escribirJSON: (titulo, estado) =>{
        let nuevaTarea={
            tarea : titulo,
            estado: estado
        }
        let tareasAnteriores = tareasDelHogar.leerTareasJSON();
        tareasAnteriores.push(nuevaTarea);
        tareasDelHogar.guardarTareaJSON(tareasAnteriores)
    },
    guardarTareaJSON:(info) => {
        let nuevoJSON =JSON.stringify(info);
        fs.writeFileSync('./tareas.json',nuevoJSON,'utf-8')
    },
    leerPorEstado: (estado) =>{
        let listaTareas = tareasDelHogar.leerTareasJSON()
        let tareasFiltradas =listaTareas.filter(tarea =>{
            return tarea.estado.toLowerCase() === estado.toLowerCase()
        })
        return tareasFiltradas
    }
}


