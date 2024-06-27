import './App.css';
import ListaDeTareas from './componentes/listaDeTareas';



function App() {
  return (
    <div className="App">
      <div className='contenedor-titulo'>
        <h1>Notas</h1>
      </div>
      <div className='Tareas-lista-principal'>
        <h2>Mis tareas</h2>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
