import React from "react";
import './Paciente.css'

export default function Paciente({nombre,dueño,fecha,hora,sintoma}){

    return(

        <div className="PacienteC">
            <h2 className="titul">Nombre:  {nombre} </h2>
            <h2 className="titul">Dueño: {dueño}</h2>
            <h2 className="titul">Fecha: {fecha}</h2>
            <h2 className="titul">Hora: {hora}</h2>
            <h2 className="titul">Sintomas: {sintoma}</h2>
            <button className="botoncit">Eliminar</button>
        </div>
    )


}