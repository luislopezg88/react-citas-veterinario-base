import  {React, useState} from "react";
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {

    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, actualizarError] = useState(false)

    const actualizarEstado = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const {mascota, propietario, fecha, hora, sintomas} = cita;

    const submitCita = e => {
        
        e.preventDefault();
        // validar 
        if(mascota.trim()=== ''|| propietario.trim()=== '' || fecha.trim()=== '' || hora.trim()=== '' || sintomas.trim()=== '') {
            actualizarError(true);
            return;
        }
        actualizarError(false);
        cita.id = uuidv4();
        crearCita(cita);

        actualizarCita({
            mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
        })
    }

    return (
        <>
            <h2>Crear cita</h2>

            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
            <form onSubmit={submitCita}>
                <label>Nombre de mancota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    onChange={actualizarEstado}
                    value={mascota}
                    
                />
                <label>Nombre del dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre dueño de la mascota"
                    onChange={actualizarEstado}
                    value={propietario}
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarEstado}
                    value={fecha}
                    
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarEstado}
                    value={hora}
                />

                <label>Sintomas</label>
                <textarea
                className="u-full-width"
                name="sintomas"
                onChange={actualizarEstado}
                value={sintomas}
                ></textarea>
                
                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>

            </form>
        </>    
    );
}
export default Formulario;