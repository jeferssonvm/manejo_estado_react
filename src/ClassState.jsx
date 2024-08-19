import React from 'react';

// Definición de un componente de clase en React
class ClassState extends React.Component {

    // El constructor es el primer método que se ejecuta en un componente de clase.
    // Aquí se inicializa el estado del componente usando `this.state`.
    constructor(props) {
        // Se llama a `super(props)` para asegurarse de que `this` esté correctamente inicializado.
        super(props);
        // Estado inicial del componente, que contiene las propiedades que se utilizarán para manejar la UI.
        this.state = {
            value: "",
            error: false,
            loading: false,
        };
    }
    
    // Este método se ejecuta después de que el componente ha sido montado en el DOM.
    // Es ideal para hacer operaciones como llamadas a APIs o configurar suscripciones.
    componentDidMount() {
        console.log("Componente montado");
    }
    
    // Se ejecuta después de que el componente ha sido actualizado.
    // Aquí es donde puedes realizar acciones basadas en cambios en el estado o las props.
    componentDidUpdate() {
        console.log("Componente actualizado");
        // Verifica si `loading` es verdadero y ejecuta la lógica de validación.
        if (this.state.loading) {
            console.log("Validación en progreso...");
            // Simula un retraso para la validación (por ejemplo, como si estuvieras esperando una respuesta de una API).
            setTimeout(() => {
                // Compara el valor del input con un código de seguridad fijo.
                if (SECURITY_CODE === this.state.value) {
                    console.log("Código correcto");
                    // Actualiza el estado si el código es correcto, desactivando el error y el indicador de carga.
                    this.setState({ error: false, loading: false });
                } else {
                    console.log("Código incorrecto");
                    // Si el código es incorrecto, muestra un error y desactiva el indicador de carga.
                    this.setState({ error: true, loading: false });
                }
                console.log("Validación completada");
            }, 300);
        }
    }
    
    // El método render es obligatorio en cualquier componente de clase.
    // Aquí defines lo que se va a mostrar en la UI.
    render() {
        return (
            <div>
                {/* Se accede a las props utilizando `this.props` */}
                <h2>Eliminar {this.props.name}</h2>
                <p>Por favor, escribe el código de seguridad</p>
                
                {/* Condicional que muestra un mensaje de error si el código es incorrecto y no está cargando */}
                {(this.state.error && !this.state.loading) && (
                    <p>Error: el código es incorrecto</p>
                )}
                
                {/* Muestra un mensaje de carga mientras el estado `loading` es verdadero */}
                {this.state.loading && (
                    <p>Cargando...</p>
                )}
                
                {/* Input controlado que actualiza el estado `value` con lo que el usuario escribe */}
                <input 
                    placeholder='Código de seguridad'
                    value={this.state.value}
                    onChange={(event) => {
                        // Se actualiza el estado con el valor ingresado por el usuario.
                        this.setState({ value: event.target.value });
                    }}
                />
                
                {/* Botón que al hacer clic activa el estado de carga y desencadena la validación */}
                <button
                    onClick={() => {
                        // Cambia el estado de `loading` a verdadero para comenzar la validación.
                        this.setState({ loading: true });
                        console.log("Verificando código...");
                    }}
                >
                    Comprobar
                </button>
            </div>
        );
    }
}

// Exporta el componente para que pueda ser utilizado en otros archivos.
export { ClassState };


// Explicaciones Adicionales:
// Ciclo de Vida de los Componentes:

// Constructor: Se usa para inicializar el estado del componente y enlazar métodos si es necesario.
// componentDidMount: Se ejecuta después de que el componente se ha montado, ideal para realizar operaciones asíncronas, como la carga de datos desde una API.
// componentDidUpdate: Este método es llamado después de que el componente ha sido actualizado, lo que permite realizar acciones adicionales en respuesta a cambios en el estado o en las props.
// render: Es un método obligatorio en los componentes de clase que define la salida de la UI.
// Estado (this.state):

// En componentes de clase, el estado es un objeto que contiene datos que pueden cambiar con el tiempo y afectan la visualización del componente.
// Se modifica usando this.setState(), lo que desencadena una re-renderización del componente.
// Props (this.props):

// Las props son valores pasados desde un componente padre al componente hijo y son accesibles usando this.props.
// Las props son inmutables dentro del componente hijo.
// Manejo de Eventos:

// En componentes de clase, los eventos como el clic de un botón se manejan mediante métodos que modifican el estado del componente usando this.setState().
// Las clases en React ofrecen una forma estructurada de manejar el ciclo de vida de los componentes y el estado, aunque desde la introducción de los hooks en React 16.8, los componentes funcionales han ganado popularidad debido a su simplicidad y flexibilidad. Sin embargo, las clases aún son útiles y necesarias en algunos contextos, especialmente cuando se requiere un control más detallado del ciclo de vida del componente.