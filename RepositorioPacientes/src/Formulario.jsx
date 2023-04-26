import React, {useState} from "react";
import './Formulario.css'

function Formulario(){
    const[mascota,setMascota]=useState("")
    const[dueño,setDueño]=useState("")
    const[paciente,setPaciente]=useState([])
    const [fecha, setFecha]=useState("")
    const [hora, setHora]=useState("")
    const [sintoma, setSinto]=useState("")

    function agregarPaciente(){
        const informacion=(
            mascota,
            dueño,
            fecha,
            hora,
            sintoma
         
        )

        setPaciente([...paciente,informacion])
        setMascota("")
        setDueño("")
        setSinto("")

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
            <input className="Formulariobox"  onChange={(e) =>{setFecha(e.target.value)}} value={fecha} type="date" name="bday" />
            
            <label className="Formulariotext" htmlFor="">Hora</label>
            <input className="Formulariobox" onChange={(e) =>{setHora(e.target.value)}} value={hora}type="time"></input>
            
            <label className="Formulariotext" htmlFor="">Sintomas</label>
            <textarea className="Formulariotbox" onChange={(e) =>{setSinto(e.target.value)}} value={sintoma}id="exampleFormControlTextarea1" rows="3"></textarea>


            <button className="boton" onClick={agregarPaciente} type="submit"> Agregar Cita </button>
        </form>                    
        
        </div>
    )
}

export default Formulario