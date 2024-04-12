import React from 'react'
import {DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';
import './TaskList.css';

const TaskList = ({tasks}) => {

    const footer = `Hay en total ${tasks ? tasks.length : 0} Tareas.`;

  return (
    <div class='p-8'>
        <h2>Lista de Tareas</h2>
        <DataTable value={tasks} footer={footer} className="" tableStyle={{minWidth: '50rem' }}>
            <Column field="id" header="ID" sortable></Column>
            <Column field="title" header="Título" sortable ></Column>
            <Column field="description" header="Descripción"  ></Column>
            <Column field="status" header="Estado" sortable ></Column>
        </DataTable>
    </div>
  );
};

export default TaskList