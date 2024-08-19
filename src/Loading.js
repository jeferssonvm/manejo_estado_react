import React from 'react';

// Definición de un componente de clase en React
class Loading extends React.Component {

    // Método de ciclo de vida: `componentWillUnmount`
    // Este método se ejecuta justo antes de que el componente sea destruido o "desmontado" del DOM.
    // Es útil para limpiar recursos, como cancelar solicitudes de red o eliminar suscripciones.
    componentWillUnmount() {
        console.log("El componente Loading se desmontará");
    }

    // El método `render` es obligatorio en cualquier componente de clase.
    // Aquí defines la UI que se renderizará cuando el componente esté montado.
    render() {
        return (
            // Este componente simplemente muestra un mensaje indicando que algo está cargando.
            <p>Cargando ...</p>
        );
    }
}

// Exportación del componente para que pueda ser importado y utilizado en otros archivos.
export { Loading };


// Explicación Adicional sobre Clases en React:
// Componentes de Clase:

// Los componentes de clase son una forma tradicional de crear componentes en React, donde 
// se utiliza una clase que extiende de React.Component.
// A diferencia de los componentes funcionales, las clases permiten manejar el estado local
//  y acceder a los métodos del ciclo de vida del componente.
// Ciclo de Vida de un Componente:

// componentWillUnmount: Este método es parte del ciclo de vida del componente y se invoca
//  justo antes de que el componente sea eliminado del DOM. Es útil para realizar tareas de 
//  limpieza, como anular temporizadores o cancelar solicitudes de datos.

// Método render():

// Es un método obligatorio en cualquier componente de clase. Define la salida de la UI para ese 
// componente. En este caso, el componente simplemente renderiza un párrafo que indica que algo está "Cargando ...".
// Exportación:

// El componente se exporta para que pueda ser importado y reutilizado en otros archivos de la 
// aplicación, lo cual es una práctica común en React para mantener el código modular y reutilizable.
// Este código demuestra un uso básico de los componentes de clase en React, mostrando cómo se
//  puede manejar un método del ciclo de vida (componentWillUnmount) y cómo se define la UI mediante el método render.