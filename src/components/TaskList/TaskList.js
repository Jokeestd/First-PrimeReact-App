import React from 'react'
import {DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';
import './TaskList.css';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';


const TaskList = ({tasks, onEdit, onDelete}) => {

    const footer = `Hay en total ${tasks ? tasks.length : 0} Tareas.`;

  return (
    <div className='Card task-list'>
        <h2>Lista de Tareas</h2>
        <DataTable value={tasks} footer={footer} className="" tableStyle={{minWidth: '50rem' }}>
            <Column field="id" header="ID" sortable></Column>
            <Column field="title" header="Título" sortable ></Column>
            <Column field="description" header="Descripción"  ></Column>
            <Column field="status" header="Estado" sortable ></Column>
            <Column body={(rowData) => <><Button className="pi pi-pen-to-square button-icon" onClick={()=> onEdit(rowData)}/> <Button className="pi pi-trash button-icon" severity="danger" onClick={()=> onDelete(rowData)}/> </>}/>
        </DataTable>
    </div>
  );
};

export default TaskList