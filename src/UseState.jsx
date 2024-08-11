import React, { useEffect, useState } from 'react'


function UseState({name}){

    // Manejo de estado en funciones Utilizamos la siguiente sintaxis para declarar e inicializarr un estado y su modificador de valor.

    const [ error, setError] = useState(false);
    const [ loading, setLoading] = useState(false)

    useEffect(()=>{
        if(!!loading){
            setTimeout(()=>{
                console.log("haciendo la validacion ")
                setLoading(false)
                console.log("terninado la validacion")
            },3000)
        }
        console.log("terminado la validacion")
    }, [loading]
    // Array vacio. El código se ejecuta cuando se renderice por primera vez el componente.
    // Ningún valor. El código se ejecuta cada vez que se haga render de nuestro componente o, dicho de de otra forma, cada vez que se modifique un estado.
    // Array con elementos. Los estados que le pasemos al array harán que cuando haya un cambio en ellos se ejecutará la función.
)




    return(
        <div>
                {/* Manejo de propiedades en funciones Para el manejo de propiedades debemos
                recibirlo como parámetro props el cual puede ser destructurado en las propiedades enviadas */}
            <h2> Eliminar {name}</h2>
            <p>por favor escribe el codigo de seguridad</p>
            {error&& (<p>
                Error EL codigo es incorrecto
            </p>)}
            {loading && 
                <p>Cargando ... </p>
                }
            <input placeholder='Codigo de seguridad' />
            <button 
                onClick={()=>setLoading(true)}
            >combrobar</button>
        </div>
    );
}
export {UseState};