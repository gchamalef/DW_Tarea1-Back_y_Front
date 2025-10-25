import React, { useState, useEffect } from 'react';

function StudentTable() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/estudiantes')
            .then(res => res.json())
            .then(data => setStudents(data));
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Carne</th>
                    <th>Nombre</th>
                </tr>
            </thead>
            <tbody>
                {students.map(student => (
                    <tr key={student.idEstudiante}>
                        <td>{student.carne}</td>
                        <td>{student.nombres} {student.apellidos}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default StudentTable;
