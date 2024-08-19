import React, { useEffect, useReducer } from 'react';

const SECURITY_CODE = "paradigma";

function UseReducer({ name }) {
    // Hook useReducer: Gestiona el estado complejo del componente.
    const [state, dispatch] = useReducer(reducer, initialState);

    // Action Creators: Son funciones que crean acciones, es decir, objetos con un tipo específico.
    // Estas funciones son invocadas para despachar acciones al reducer.
    const onConfirmed = () => dispatch({ type: actionTypes.confirm });
    const onCheck = () => dispatch({ type: actionTypes.check });
    const onDelete = () => dispatch({ type: actionTypes.delete });
    const onError = () => dispatch({ type: actionTypes.error });
    const onReset = () => dispatch({ type: actionTypes.reset });

    // Action Creator para manejar la escritura en el input.
    const onWrite = ({ target: { value } }) => {
        dispatch({ type: actionTypes.write, payload: value });
    };

    // Efecto secundario: Se activa cuando 'loading' cambia.
    useEffect(() => {
        if (state.loading) {
            setTimeout(() => {
                if (state.value === SECURITY_CODE) {
                    onConfirmed();  // Acción confirmada.
                } else {
                    onError();  // Acción error.
                }
            }, 3000);
        }
    }, [state.loading]);

    // Renderizado de UI en función del estado.
    if (!state.deleted && !state.confirmed) {
        return (
            <div>
                <h2>Eliminar {name}</h2>
                <p>Por favor escribe el código de seguridad</p>
                {(state.error && !state.loading) && (<p>Error: El código es incorrecto</p>)}
                {state.loading && <p>Cargando ...</p>}
                <input
                    placeholder='Código de seguridad'
                    value={state.value}
                    onChange={onWrite} // Usa el Action Creator onWrite.
                />
                <button onClick={onCheck}>
                    Comprobar
                </button>
            </div>
        );
    } else if (state.confirmed && !state.deleted) {
        return (
            <React.Fragment>
                <p>¿Estás seguro de eliminar?</p>
                <button onClick={onDelete}>
                    Sí, eliminar
                </button>
                <button onClick={onReset}>
                    No, me arrepentí
                </button>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <p>Eliminado con éxito</p>
                <button onClick={onReset}>
                    Resetear, volver atrás
                </button>
            </React.Fragment>
        );
    }
}

// Estado inicial: Define la estructura básica del estado.
const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
};

// actionTypes: Objeto que define los tipos de acciones posibles en el reducer.
// Ayuda a evitar errores de tipografía y facilita la gestión de las acciones.
const actionTypes = {
    confirm: 'CONFIRM',
    error: 'ERROR',
    delete: 'DELETE',
    write: 'WRITE',
    reset: 'RESET', // Corrigido 'reste' a 'reset'.
    check: 'CHECK',
};

// reducer: Función pura que gestiona cómo cambia el estado en función de las acciones recibidas.
// El switch se encarga de ejecutar el código específico para cada tipo de acción.
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.confirm:
            return { ...state, error: false, loading: false, confirmed: true };
        case actionTypes.error:
            return { ...state, error: true, loading: false };
        case actionTypes.write:
            return { ...state, value: action.payload };
        case actionTypes.check:
            return { ...state, loading: true };
        case actionTypes.delete:
            return { ...state, deleted: true };
        case actionTypes.reset:
            return { ...initialState };  // Reinicia el estado al inicial.
        default:
            return state;
    }
};

export { UseReducer };

// Explicación detallada:

// Action Creators: Son funciones que devuelven un objeto con una propiedad type. Este tipo se utiliza en el reducer para identificar qué lógica ejecutar en base a la acción disparada.

// Action Types: Es un objeto que centraliza todos los tipos de acciones posibles en el reducer. Al usar constantes definidas, se reduce el riesgo de errores tipográficos y facilita la gestión de acciones, especialmente en aplicaciones más grandes.









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


// Explicación Detallada:
// initialState: Define el estado inicial de la aplicación, que contiene varias propiedades como value, error, loading, deleted, y confirmed.

// reducerObject: Es un objeto que mapea los tipos de acción (CONFIRM, ERROR, WRITE, etc.) a los cambios de estado correspondientes. Este enfoque permite agregar fácilmente nuevas acciones o modificar las existentes.

// reducer: Es la función que selecciona la acción adecuada de reducerObject según el tipo de acción recibido. Si la acción existe en el objeto, devuelve el nuevo estado modificado; si no, retorna el estado sin cambios.

// UseReducer: Es el componente principal que maneja el flujo de la UI utilizando useReducer para manejar el estado. Este componente incluye tres estados de UI principales: uno donde se ingresa el código de seguridad, otro para confirmar la eliminación, y el estado final después de la eliminación.

// Este enfoque es modular y escalable, lo que facilita la gestión de estados complejos y la extensión futura del código.