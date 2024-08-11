import logo from './logo.svg';
import './App.css';
import { ClassState } from './ClassState';
import { UseState } from './UseState';

function App() {
  return (
    <div className="App">
      {/* 1 Envio de propiedades (props) Se envia de la misma forma, sea el componente creado con clase o función: */}
      <ClassState name= "Class State"></ClassState>
      <UseState name="use Stete"></UseState>
    </div>
  );
}

export default App;
