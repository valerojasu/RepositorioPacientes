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
        <div>
        <form className="inputForm" action="">
            <label htmlFor="">Nombre mascota</label>
            <input onChange={(e) =>{setMascota(e.target.value)}} value={mascota} type="text"></input>
            <label htmlFor="">Nombre Dueño</label>
            <input onChange={(e) =>{setDueño(e.target.value)}} value={dueño} type="text"></input>
            <button onClick={agregarPaciente} type="submit"> Agregar </button>
        </form>                    
        
        </div>
    )
}

export default Formulario