import React from 'react'

// export const ClassState = () => {
//   return (
//     <div>
//         <h2> Eliminar Classtate</h2>
//         <p>por favor escribe el codigo de seguridad</p>
//         <input placeholder='Codigo de seguridad' />
//         <button>combrobar</button>
//     </div>
//   )
// }

class ClassState extends React.Component{

    // Manejo de estado en clases

    // En el método constructor utilizamos this.state para definir un objeto cuyas propiedades serán los estados
    // Para poder modificar this y conservar lo que vivía en this de la clase que extendemos se debe llamar a super() dentro del método constructor.
    // Luego debemos recibir las props desde el constructor y enviarle a super todas las propiedades que recibimos, de esta forma no solo vivirán en el constructor de nuestra clase sino también pasar a la clase React.component
    // Una propiedad que viene de React.component es this.setState, con esta modificaremos los estados.
    constructor(props){
        super(props);
        this.state = {
            error:true,
        };
    }
    render(){
        return(
            <div>
                {/* Manejo de propiedades en clases Para el manejo de propiedades escribimos this.props para acceder a las propiedades de nuestro elemento */}
                <h2> Eliminar {this.props.name}</h2>
                <p>por favor escribe el codigo de seguridad </p>
                {this.state.error && (
                    <p> Error: el codigo es incorrecto</p>
                )}
                <input placeholder='Codigo de seguridad' />
                <button
                    onClick={() =>
                        this.setState(prevState =>({error: !prevState.error}))
                    }
                >combrobar</button>
            </div>
        )
    }
}

export{ ClassState }