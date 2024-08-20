# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

# Curso de React.js: Manejo Profesional del Estado

Este repositorio contiene apuntes y ejemplos clave sobre el manejo del estado en React. A lo largo del curso, aprenderemos a gestionar el estado de manera efectiva utilizando tanto clases como funciones.

## Contenidos

### 1. Estados simples: React.Component vs. useState
Exploramos cómo manejar estados simples en componentes de clase con `this.state` y en componentes funcionales con `useState`, comparando las ventajas y desventajas de cada enfoque.

### 2. Efectos con useEffect
Uso del hook `useEffect` para manejar efectos secundarios en componentes funcionales, como suscripciones, temporizadores, y más. Se compara con los métodos de ciclo de vida de los componentes de clase.

### 3. Métodos del ciclo de vida en React.Component
Explicación detallada de los métodos del ciclo de vida (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`) y cómo se utilizan en componentes de clase para controlar el comportamiento y la actualización del componente.

### 4. Estados independientes con useState
Aprendemos a manejar múltiples estados independientes dentro de un mismo componente utilizando varios hooks `useState`.

### 5. Estados compuestos con React.Component
Cómo gestionar objetos de estado que contienen múltiples propiedades en componentes de clase, usando `this.setState` para actualizar estados complejos sin perder información.

### 6. Estados compuestos con useState
Manejo de estados complejos o compuestos en componentes funcionales utilizando el hook `useState`. Se destaca la importancia de copiar el estado anterior al realizar actualizaciones.

### 7. Estados semideclarativos con useState
Creación de estados derivados o calculados que dependen de otros estados, utilizando funciones dentro de `useState`.

### 8. ¿Qué es un reducer?
Un `reducer` es una función pura que toma el estado anterior y una acción, y devuelve un nuevo estado. Es útil para manejar estados complejos y centralizar la lógica de actualización.

```js
const reducer = (state, action) => {
    if (reducerObject(state, action.payload)[action.type]) {
        return reducerObject(state, action.payload)[action.type];
    } else {
        return state;
    }
};
9. 3 formas de crear un reducer
Se presentan tres métodos para crear un reducer: utilizando condicionales if-else, switch-case, y a través de objetos que asocian acciones con estados.

js
Copiar código
// Condicionales if-else
const reducers = (state, action) => {
    if (action.type === "ERROR") {
        return {
            ...state,
            error: true,
            loading: false,
        };
    } else if (action.type === 'CHECK') {
        return {
            ...state,
            loading: true,
        };
    } else {
        return {
            ...state,
        };
    }
};

// Switch-Case
const reduceSwitch = (state, action) => {
    switch (action.type) {
        case 'ERROR':
            return {
                ...state,
                error: true,
                loading: false,
            };
        case 'CHECK':
            return {
                ...state,
                loading: true,
            };
        default:
            return {
                ...state,
            };
    }
};
10. Estados declarativos con useReducer
Uso del hook useReducer para manejar estados de forma más declarativa y estructurada, especialmente en aplicaciones con lógica de estado compleja.

11. Action creators y actionTypes
Separación de la lógica y las acciones mediante la creación de "action creators" y constantes para los "action types", lo que mejora la escalabilidad y reduce errores.

12. ¿Qué son los estados derivados?
Estados calculados automáticamente a partir de otros estados "normales", que se actualizan automáticamente cuando cambia el estado base.