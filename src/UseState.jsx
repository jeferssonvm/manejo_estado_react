import React, { useState } from 'react'


function UseState({name}){

    // Manejo de estado en funciones Utilizamos la siguiente sintaxis para declarar e inicializarr un estado y su modificador de valor.

    const [ error, setError] = useState(true);




    return(
        <div>
                {/* Manejo de propiedades en funciones Para el manejo de propiedades debemos
                recibirlo como parámetro props el cual puede ser destructurado en las propiedades enviadas */}
            <h2> Eliminar {name}</h2>
            <p>por favor escribe el codigo de seguridad</p>
            {error&& (<p>
                Error EL codigo es incorrecto
            </p>)}
            <input placeholder='Codigo de seguridad' />
            <button 
                onClick={()=>setError(!error)}
            >combrobar</button>
        </div>
    );
}
export {UseState};