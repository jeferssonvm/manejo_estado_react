import React from 'react'
import { Loading } from './Loading';

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
            loading: false,
        };
    }

    // UNSAFE_componentWillMount() {
    //     // ste método se ejecuta justo antes de que el componente se monte en el DOM, pero debido a problemas como la falta de consistencia en su ejecución en diferentes entornos, se desaconseja su uso.
    //     console.log("UNSAFE_componentWillMount");
    //   }
    
    //   componentDidMount() {
    //     // es un método de ciclo de vida en React que se ejecuta después de que un componente ha sido montado en el DOM. Es ideal para realizar operaciones como:

    //     // Fetch de datos: Llamar a APIs o cargar datos externos.
    //     // Suscripciones: Conectar a eventos, websockets, etc.
    //     // Manipulación del DOM: Acceder a elementos del DOM que ya están renderizados.

    //     console.log("componentDidMount");
    //   }
    
      componentDidUpdate() {
        // Se llama después de que el componente haya sido actualizado y renderizado en la pantalla. Este método es útil para realizar acciones en respuesta a cambios en las props o el estado del componente.
        console.log("Update");
        if(!!this.setState.loading){
            setTimeout(()=>{
                console.log("haciendo la validacion ")
                this.setState({loading: false})
                console.log("terninado la validacion")
            },300)
        }
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
                {this.state.loading && (
                    <Loading></Loading>
                )}
                <input placeholder='Codigo de seguridad' />
                <button
                    onClick={() =>
                        this.setState({loading: true})
                    }
                >combrobar</button>
            </div>
        )
    }
}

export{ ClassState }