let tareasDelHogar = require ('./funcionesDeTareas')

let process = require ("process")


let listadoTareas = process.argv[2]

switch (listadoTareas) {
    case  "listar" :
            let Tareas = tareasDelHogar.leerTareasJSON()
           if(Tareas.length === 0){
               console.log("Tu lista está vacia")
           }else {
            Tareas.forEach(function(listar,index){
            console.log( index,"Tarea:", listar.tarea, " -Estado- ", listar.estado)
            console.log("-------------------------------------------------------")
            }) }
            
        break;
    case "crear" :
        let titulo= process.argv[3]
        let estado = "Pendiente"
        tareasDelHogar.escribirJSON(titulo,estado)
        break;
    case "filtrar" :
        let leerEstado = process.argv[3]
        let listaFiltrada=tareasDelHogar.leerPorEstado(leerEstado)
        for (let i=0; i < listaFiltrada.length ; i ++){
            console.log(".",listaFiltrada[i].tarea)
        }
        break;
    case undefined : 
        console.log("Atención - Tienes que pasar una acción")
        break;
    default :
    console.log("no entiendo que quieres hacer")
    break;
}