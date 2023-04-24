import React, {useState} from "react";
import './Formulario.css'

function Formulario(){
    const[mascota,setMascota]=useState("")
    const[dueño,setDueño]=useState("")
    const[paciente,setPaciente]=useState([])

    function agregarPaciente(){
        const informacion={
            mascota,
            dueño
        }

        setPaciente([...paciente,informacion])
        setMascota("")
        setDueño("")

    }

  
    return(
        <div className="Formulario">
            <h1 className="titulo">CREAR CITAS</h1>
        <form className="inputForm" action="">
        
            <label className="Formulariotext" htmlFor="" >Nombre Mascota</label>
            <input className="Formulariobox" onChange={(e) =>{setMascota(e.target.value)}} value={mascota} type="text" placeholder="Nombre Mascota"></input>
            <label className="Formulariotext" htmlFor="">Nombre Dueño</label>
            <input className="Formulariobox" onChange={(e) =>{setDueño(e.target.value)}} value={dueño} type="text" placeholder="Nombre Dueño de la mascota"></input>
            <label className="Formulariotext" htmlFor="">Fecha</label>
            <input className="Formulariobox"  type="date" name="bday" />
            <label className="Formulariotext" htmlFor="">Hora</label>
            <input className="Formulariobox" type="time"></input>
            <label className="Formulariotext" htmlFor="">Sintomas</label>
            <textarea className="Formulariotbox" id="exampleFormControlTextarea1" rows="3"></textarea>


            <button className="boton" onClick={agregarPaciente} type="submit"> Agregar Cita </button>
        </form>                    
        
        </div>
    )
}

export default Formulario