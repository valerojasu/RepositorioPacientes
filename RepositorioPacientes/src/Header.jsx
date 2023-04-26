import React, {useState} from "react";
import './Header.css'

function Header({titulo}){
  
    return(
        <div>
            <h2 className="titulito">{titulo}</h2>
           
        </div>
    )
}

export default Header