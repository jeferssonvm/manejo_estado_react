import React, { useEffect, useState } from 'react'

const SECURITY_CODE = "paradigma";
function UseState({name}){

    // Manejo de estado en funciones Utilizamos la siguiente sintaxis para declarar e inicializarr un estado y su modificador de valor.
    // Los estados independientes o simples con estados que no dependen uno del otro para funcionar. Solo dependen de una variable con un actualizador del estado:



    const [value, setValue] = useState("")
    const [ error, setError] = useState(false);
    const [ loading, setLoading] = useState(false)
    console.log(value)
    useEffect(()=>{
        if(!!loading){
            setTimeout(()=>{
                console.log("haciendo la validacion ")
                if(value === SECURITY_CODE){
                    setLoading(false);
                    setError(false);
                }else{
                    setError(true);
                    setLoading(false);
                }
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
            {(error && !loading) && (<p>
                Error EL codigo es incorrecto
            </p>)}
            {loading && 
                <p>Cargando ... </p>
                }
            <input placeholder='Codigo de seguridad' 
                value={value}
                onChange={(event) => {
                    // setError(false)
                    setValue(event.target.value)
                }}
            />
            <button 
                onClick={()=>setLoading(true)}
            >combrobar</button>
        </div>
    );
}
export {UseState};