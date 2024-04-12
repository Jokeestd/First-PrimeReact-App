import React from 'react';
import './App.css';
import TaskList from './components/TaskList/TaskList';

const App = () => {

  const tasks = [
    {id: 1, title: 'Tarea 1', description: 'Descripción de la tarea 1', status: 'Pendiente'},
    {id: 2, title: 'Tarea 2', description: 'Descripción de la tarea 2', status: 'En Proceso'},
    {id: 3, title: 'Enviar Correo', description: 'Enviar correo a Juan', status: 'Pendiente'},
    {id: 4, title: 'Llamar al cliente', description: 'Llamar al cliente para confirmar la cita', status: 'En Proceso'},
  ];

  return (
    <div className="App">
      <header className="App-header">
        <TaskList tasks={tasks}/>
      </header>
    </div>
  );
}

export default App;
