import React, { useEffect, useReducer, useState } from 'react'

const SECURITY_CODE = "paradigma";

function UseReducer({name}) {
    // Utilizamos useReducer en lugar de useState para manejar el estado complejo.
    // state: es el estado actual, dispatch: es la función para enviar acciones al reducer.
    const [state, dispatch] = useReducer(reducer, initialState);
    
    // useEffect se usa para efectos secundarios. Aquí se ejecuta cuando 'loading' cambia.
    useEffect(() => {
        console.log("empezando el efecto");
        if(!!state.loading) { // Verifica si está en estado de carga.
            setTimeout(() => {
                console.log("haciendo la validación");
                // Si el código de seguridad es correcto, disparamos la acción 'CONFIRM'.
                if(state.value === SECURITY_CODE) {
                    dispatch({type: 'CONFIRM'});
                } else {  
                    // Si no es correcto, disparamos la acción 'ERROR'.
                    dispatch({type: 'ERROR'});
                }
            }, 3000); // Simula un retraso de 3 segundos para la validación.
        }
    }, [state.loading]); // El efecto se ejecuta cuando 'loading' cambia.

    // Renderizado de diferentes estados de la UI:
    if (!state.deleted && !state.confirmed) {
        // Estado inicial, antes de la confirmación o eliminación.
        return (
            <div>
                <h2>Eliminar {name}</h2>
                <p>Por favor escribe el código de seguridad</p>
                {/* Muestra un mensaje de error si el código es incorrecto */}
                {(state.error && !state.loading) && (<p>Error: El código es incorrecto</p>)}
                {/* Muestra un mensaje de carga mientras se valida */}
                {state.loading && <p>Cargando ...</p>}
                {/* Input para el código de seguridad, actualiza el estado con la acción 'WRITE' */}
                <input 
                    placeholder='Código de seguridad' 
                    value={state.value}
                    onChange={(event) => dispatch({type: 'WRITE', payload: event.target.value})}
                />
                {/* Botón para comprobar el código, dispara la acción 'CHECK' */}
                <button onClick={() => dispatch({type: 'CHECK'})}>
                    Comprobar
                </button>
            </div>
        );
    } else if (!!state.confirmed && !state.deleted) {
        // Estado después de la confirmación pero antes de la eliminación.
        return (
            <React.Fragment>
                <p>¿Estás seguro de eliminar?</p>
                <button onClick={() => dispatch({type: 'DELETE'})}>
                    Sí, eliminar
                </button>
                <button onClick={() => dispatch({type: 'RESET'})}>
                    No, me arrepentí
                </button>
            </React.Fragment>
        );
    } else {
        // Estado final, después de la eliminación.
        return (
            <React.Fragment>
                <p>Eliminado con éxito</p>
                <button onClick={() => dispatch({type: 'RESET'})}>
                    Resetear, volver atrás
                </button>
            </React.Fragment>
        );
    }
}

// Estado inicial que define la estructura básica de nuestro estado global.
const initialState = {
    value: '',
    error: false,
    loading: false,
    delete: false,
    confirmed: false,
};

// Definimos las acciones y cómo afectan al estado dentro de un objeto.
const reducerObject = (state, payload) => ({
    'CONFIRM': {
        ...state,
        error: false,
        loading: false,
        confirmed: true,
    },
    'ERROR': {
        ...state,
        error: true,
        loading: false,
    },
    'WRITE': {
        ...state,
        value: payload, // payload es el nuevo valor del input.
    },
    'CHECK': {
        ...state,
        loading: true, // Activa el estado de carga.
    },
    'DELETE': {
        ...state,
        deleted: true, // Marca el estado como eliminado.
    },
    'RESET': {
        ...state,
        confirmed: false,
        deleted: false,
        value: '', // Reinicia el estado a sus valores iniciales.
    },
});

// Reducer que selecciona la acción adecuada del objeto reducerObject según el tipo.
const reducer = (state, action) => {
    if (reducerObject(state, action.payload)[action.type]) {
        return reducerObject(state, action.payload)[action.type];
    } else {
        return state;
    }
};

export { UseReducer };



// const reducers = (state, action) => {
//     if (action.type === "ERROR") {
//         return {
//             ...state,
//             error: true,
//             loading: false,
//         };
//     } else if (action.type === 'CHECK') {
//         return {
//             ...state,
//             loading: true,
//         };
//     } else {
//         return {
//             ...state,
//         };
//     }
// };

// Segunda forma de implementar un reducer: Switch-Case
// Usamos 'switch' para organizar las acciones y devolver el nuevo estado según el tipo de acción.
// const reduceSwitch = (state, action) => {
//     switch (action.type) {
//         case 'ERROR':
//             return {
//                 ...state,
//                 error: true,
//                 loading: false,
//             };
//         case 'CHECK':
//             return {
//                 ...state,
//                 loading: true,
//             };
//         default:
//             return {
//                 ...state,
//             };
//     }
// };

// Tercera forma de implementar un reducer: Object Lookup (Recomendada)
// Definimos un objeto que mapea tipos de acción a estados, lo que facilita la extensión y mantenimiento.

// Resumen de un reducer:
// Un reducer es una función que recibe el estado actual y una acción, y retorna un nuevo estado.
// Se usa en sistemas como Redux para manejar estados complejos de manera predecible.
// Un reducer debe ser puro, es decir, no debe modificar directamente el estado sino devolver una copia modificada.



// Explicación:
// initialState: Define el estado inicial de la aplicación, que contiene varias propiedades como value, error, loading, etc.

// Condicional Simple (if-else): Es una forma directa y básica de manejar acciones en el reducer, ideal para casos sencillos.

// Switch-Case: Estructura las decisiones de manera más organizada, adecuada para manejar múltiples tipos de acciones.

// Object Lookup: Es la forma más estructurada y mantenible, donde las acciones se manejan a través de un objeto que mapea tipos de acción a sus respectivos cambios de estado. Esto facilita la expansión y es más limpio para manejar estados complejos.

// Cada método tiene sus ventajas dependiendo del tamaño y complejidad de la aplicación. En aplicaciones grandes, la tercera forma es preferida por su claridad y facilidad de mantenimiento.