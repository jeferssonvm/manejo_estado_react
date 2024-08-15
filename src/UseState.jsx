import React, { useEffect, useState } from 'react'

const SECURITY_CODE = "paradigma";
function UseState({name}){

    // Manejo de estado en funciones Utilizamos la siguiente sintaxis para declarar e inicializarr un estado y su modificador de valor.
    // Los estados independientes o simples con estados que no dependen uno del otro para funcionar. Solo dependen de una variable con un actualizador del estado:



    // const [value, setValue] = useState("")
    // const [ error, setError] = useState(false);
    // const [ loading, setLoading] = useState(false)
    
    const [state, setState] = useState({
        value:"",
        error:false,
        loading: false,
        deleted:false,
        confirmed:false,
    });
    
    useEffect(()=>{
        if(!!state.loading){
            setTimeout(()=>{
                console.log("haciendo la validacion ")
                if(state.value === SECURITY_CODE){
                    setState({
                        ...state,
                        error:false,
                        loading:false,
                        confirmed:true,
                    })
                }else{
                    setState({
                        ...state,
                        error:true,
                        loading:false,
                    })
                }
                console.log("terninado la validacion")
            },3000)
        }
        console.log("terminado la validacion")
    }, [state.loading]
    // Array vacio. El código se ejecuta cuando se renderice por primera vez el componente.
    // Ningún valor. El código se ejecuta cada vez que se haga render de nuestro componente o, dicho de de otra forma, cada vez que se modifique un estado.
    // Array con elementos. Los estados que le pasemos al array harán que cuando haya un cambio en ellos se ejecutará la función.
)



if (!state.deleted && !state.confirmed){
    
    return(
        <div>
                {/* Manejo de propiedades en funciones Para el manejo de propiedades debemos
                recibirlo como parámetro props el cual puede ser destructurado en las propiedades enviadas */}
            <h2> Eliminar {name}</h2>
            <p>por favor escribe el codigo de seguridad</p>
            {(state.error && !state.loading) && (<p>
                Error EL codigo es incorrecto
            </p>)}
            {state.loading && 
                <p>Cargando ... </p>
                }
            <input placeholder='Codigo de seguridad' 
                value={state.value}
                onChange={(event) => {
                    // setError(false)
                    setState({
                        ...state,
                        value:event.target.value
                    })
                }}
            />
            <button 
                onClick={()=>setState({
                    ...state,
                    loading:true,
                }
                )}
            >combrobar</button>
        </div>
    );
}else if(!!state.confirmed && !state.deleted ){
    return(
        <React.Fragment>
            <p>estado de confirmacion</p>
            <button onClick={() =>{setState({
                ...state,
                deleted:true
            })}}>Si Elminiar</button>
            <button onClick={()=>{
                setState({
                    ...state,
                    confirmed:false
                })
            }}>Nop me Arrepenti</button>
        </React.Fragment>
    )

}else{
    // El estado imperativo con useState en React se refiere a cómo los desarrolladores pueden gestionar el estado de los componentes de manera explícita. Usando useState, puedes definir y actualizar el estado de una forma que requiere que especifiques cuándo y cómo se deben cambiar los valores. Esto es "imperativo" porque el desarrollador dicta cada paso del proceso de actualización del estado.


    return(
        <React.Fragment>
            <p>eliminado con exito</p>
            <button onClick={()=>{
                setState({
                    ...state,
                    confirmed:false,
                    deleted:false,
                    value:""
                })
            }}>Resetear ,Volver atras</button>
        </React.Fragment>
    )
}
}
export {UseState};

//El estado imperativo en programación se refiere a un enfoque donde el desarrollador dicta explícitamente cada paso para manipular el estado de la aplicación. En lugar de describir lo que se desea (como en un enfoque declarativo), en el estado imperativo se describe cómo lograrlo. Se centra en las operaciones y comandos necesarios para modificar el estado, a menudo utilizando secuencias de instrucciones que deben ejecutarse en un orden específico para alcanzar el resultado deseado.

