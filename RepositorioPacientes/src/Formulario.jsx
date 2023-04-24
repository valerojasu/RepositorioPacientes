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
            <label className="Formulariotext" htmlFor="" >Nombre mascota</label>
            <input className="Formulariobox" onChange={(e) =>{setMascota(e.target.value)}} value={mascota} type="text"></input>
            <label className="Formulariotext" htmlFor="">Nombre Dueño</label>
            <input className="Formulariobox" onChange={(e) =>{setDueño(e.target.value)}} value={dueño} type="text"></input>
            <button className="boton" onClick={agregarPaciente} type="submit"> Agregar </button>
        </form>                    
        
        </div>
    )
}

export default Formulario