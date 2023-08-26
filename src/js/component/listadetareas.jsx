import React, { useState } from "react";
import AgregarTareas from "./agregartarea";
import "../../styles/listadetareas.css";
import Tareas from "./tareas";

const Lista = () => {

    const [tareas, setTareas] = useState([]);

    const agregarLaTarea = tarea => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareaActualizada = [tarea, ...tareas];
            setTareas(tareaActualizada);
        }
    }

    const eliminarLaTarea = id => {
        const tareaActualizada = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareaActualizada);
    }

    const completadaLaTarea = id => {
        const tareaActualizada = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completado = !tarea.completado;
            }
            return tarea;
        });
        setTareas(tareaActualizada);
    }

    return (
        <>
            <AgregarTareas onSubmit={agregarLaTarea} />
            <div className="contenedor-lista">
                {
                    tareas.map((tarea) =>
                        <Tareas key={tarea.id} id={tarea.id} texto={tarea.texto} completado={tarea.completado} completarTarea={completadaLaTarea} eliminarTarea={eliminarLaTarea} />

                    )
                }
            </div>

        </>
    );
};

export default Lista;