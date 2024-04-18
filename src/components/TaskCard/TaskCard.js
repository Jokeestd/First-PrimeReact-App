import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './TaskCard.css';

const TaskCard = ({task, onEdit, onDelete}) =>{
    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <>
            <Button label="Editar" icon="pi pi-pen-to-square" onClick={()=>onEdit(task)}/>
            <Button label="Eliminar" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} onClick={()=>onDelete(task)} />
        </>
    );

    return (
        <div className="card">
            <Card title={task.title} subTitle={task.status} footer={footer} header={header}>
                <p className="m-0">
                    {task.description}
                </p>
            </Card>
        </div>
    )
};

export default TaskCard;