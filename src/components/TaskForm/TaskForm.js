import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from 'primereact/inputtextarea';
import './TaskForm.css';
import { Button } from 'primereact/button';
        

const TaskForm = ({ onSubmit,taskId, editingTask, onEdit, setEditingTask}) => {
    const resetTask = () => {
        setTask({
            id: '',
            title: '',
            description: '',
            status: '',
        });
    };
    const [task, setTask] = useState( editingTask ? editingTask : {
        id:'',
        title: '',
        description: '',
        status: '',
    });

    useEffect(() => {
        if(editingTask){
            setTask(editingTask);
        } else {
            setTask({
                id:'',
                title: '',
                description: '',
                status: '',
            });
        }
    }, [editingTask]);

    const states = [
        'Pendiente',
        'En Proceso',
        'Terminada',
    ];

    //To set values to the object task
    const handleChange = (e) => {
        setTask({ ...task, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(editingTask){
            onEdit({...task, id: editingTask.id});
        } else{
        // Pass the id of the task
        onSubmit({...task,id: taskId});}
        //clear the form
        setTask({
            id: '',
            title: '',
            description: '',
            status: '',
        });

        console.log(task);
    };

    const handleCancelEdit = () =>{
        resetTask();
        setEditingTask(null);
    }
    return (
        <div>
            <h2 className='text-lg' >{ editingTask ? 'Editar Tarea' : 'Agregar Tarea'}</h2>
            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                    <FloatLabel>
                        <InputText id="title" value={task.title} onChange={handleChange} required />
                        <label htmlFor='title'>Título</label>
                    </FloatLabel>
                
                    <FloatLabel>
                        <InputTextarea id="description" value={task.description} onChange={handleChange} rows={5} cols={30} />
                        <label htmlFor='description'>Descripción</label>
                    </FloatLabel>
                
                    <FloatLabel>

                        <Dropdown
                            id="status"
                            value={task.status}
                            onChange={handleChange}
                            options={states}
                            placeholder='Seleccione un estado'
                            required

                        />
                        <label htmlFor='status'>Estado</label>
                    </FloatLabel>
                </div>
                <br />
                <Button className="buttons" label={ editingTask ? 'Editar Tarea' : 'Agregar Tarea'} severity="success" />
                {editingTask && <Button className="buttons" label='Cancelar' onClick={handleCancelEdit} severity='danger' />}
            </form>
        </div>
    );
};

export default TaskForm;