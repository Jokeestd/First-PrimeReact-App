import React from 'react'; 
import { Menubar } from 'primereact/menubar';

export default function BasicDemo() {
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Agregar Tarea',
            icon: 'pi pi-plus'
        },
        {
            label: 'Tareas',
            icon: 'pi pi-book'
        }
    ];

    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    )
}