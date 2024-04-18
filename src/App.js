import React, { useState, useEffect } from "react";
import "primereact/resources/themes/lara-dark-purple/theme.css";

import { RadioButton } from 'primereact/radiobutton';
import TaskList from "./components/TaskList/TaskList";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskCard from "./components/TaskCard/TaskCard";
import NavBarTask from "./components/MenuBar/NavBarTask";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const dataPath = process.env.PUBLIC_URL + '/data/data.json';

  //Fetch data from JSON file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataPath)
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);
        setTasks(data);
      } catch (error) {
        console.error('Error reading data:', error);
      }
    };

    fetchData();
  }, []);

  const [taskIdCounter, setTaskIdCounter] = useState(11);
  const [editingTask, setEditingTask] = useState(null);
  const [view, setView] = useState("table"); //table or Card

  const handleTaskEdit = (editedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  //Handles for actions

  const handleEditClick = (task) => {
    setEditingTask(task);
    console.log("Editando tarea:", task);
  };

  const handleTaskSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
    setTaskIdCounter(taskIdCounter + 1); //increment the counter
  };

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task.id !== taskToDelete.id));
  };

  return (
    <div className="App">
      <NavBarTask />
      <section>
        <TaskForm
          onSubmit={handleTaskSubmit}
          taskId={taskIdCounter}
          editingTask={editingTask}
          onEdit={handleTaskEdit}
          setEditingTask={setEditingTask}
        />
      </section>
      <section>

      {/*View Switcher*/}
      <div className="view-switcher flex flex-wrap gap-3">
              <span className="view-switcher-style">Ver como:  </span>
                <div className="view-switcher-style flex align-items-center">
                    <RadioButton inputId="vista1" value="table" onChange={(e) => setView(e.value)} checked={view === 'table'} />
                    <label htmlFor="vista1" className="ml-2"> Lista</label>
                </div>
                <div className="view-switcher-style flex align-items-center">
                    <RadioButton inputId="vista2" value="card" onChange={(e) => setView(e.value)} checked={view === 'card'} />
                    <label htmlFor="vista2" className="ml-2"> Tarjetas</label>
                </div>
            </div>


      {/*Renderizar Task List o TaskCard segun tipo de vista*/}
      {view === "table" ? (
        <TaskList tasks={tasks} onEdit={handleEditClick} onDelete={handleDeleteTask} />
      ) : (
        <div className="task-card-container">
          {tasks.map((task) => (
            <TaskCard
            className="task-card-style"
            key={task.id}
            task={task}
            onEdit={handleEditClick}
            onDelete={handleDeleteTask}
            />
          ))}
        </div>
      )}
      </section>
    </div>
  );
};

export default App;
