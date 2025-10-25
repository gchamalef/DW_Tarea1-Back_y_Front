import React from 'react';
import './App.css';
import StudentTable from './components/StudentTable';
import StudentForm from './components/StudentForm';

function App() {
    return (
        <div className="App">
            <StudentTable />
            <StudentForm />
        </div>
    );
}

export default App;
