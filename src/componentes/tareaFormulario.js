import React, {useState} from "react";
import '../hojas-de-estilo/tareaFormulario.css';
import {v4 as uuidv4} from 'uuid';

function TareaFormulario (props) {

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);

    }

    const manejarenvio = e => {
        e.preventDefault();

        const TareaNueva= {
            id: uuidv4(),
            texto: input,
            completada: false

        }

        props.onSubmit(TareaNueva);
    }
    return (
        <form className='tarea-formulario' onSubmit={manejarenvio}>
            <input
            className='tarea-input'
            type='text'
            placeholder='escribe una tarea'
            name='texto'
            onChange={manejarCambio}/>
            <button className='Tarea-boton'>Agregar tarea</button>
        </form>


    );

}

export default TareaFormulario;