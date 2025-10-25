import React, { useState } from 'react';

function StudentForm() {
    const [formData, setFormData] = useState({
        carne: '',
        nombres: '',
        apellidos: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar datos al backend
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="carne" value={formData.carne} onChange={(e) => setFormData({ ...formData, carne: e.target.value })} required />
            <input type="text" name="nombres" value={formData.nombres} onChange={(e) => setFormData({ ...formData, nombres: e.target.value })} required />
            <input type="text" name="apellidos" value={formData.apellidos} onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })} required />
            <button type="submit">Guardar</button>
        </form>
    );
}

export default StudentForm;
