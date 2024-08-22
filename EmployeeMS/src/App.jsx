import { useEffect } from 'react';
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Employee from './Components/Employee';
import Category from './Components/Category';
import Profile from './Components/Profile';
import AddCategory from './Components/AddCategory';
import AddEmployee from './Components/AddEmployee';
import EditEmployee from './Components/EditEmployee';
import Start from './Components/Start';
import EmployeeLogin from './Components/EmployeeLogin';
import EmployeeDetail from './Components/EmployeeDetail';
import PrivateRoute from './Components/PrivateRoute';
import Note from './Components/Note';
import AddNote from './Components/AddNote';
import Charts from './Components/Charts';
import Cylindrical from './Components/Cylindrical';

function App() {
  useEffect(() => {
    document.title = "D.U.EMS"
  }, [])
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      {window.location.pathname !== "/" &&  (
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </div>
      )}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/adminlogin" element={<Login />} />
          <Route path="/employee_login" element={<EmployeeLogin />} />
          <Route path="/employee_detail/:id" element={<EmployeeDetail />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
            <Route path="" element={<Home />} />
            <Route path="/dashboard/employee" element={<Employee />} />
            <Route path="/dashboard/category" element={<Category />} />
            <Route path="/dashboard/note" element={<Note />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/charts" element={<Charts />} />
            <Route path="/dashboard/cylindrical" element={<Cylindrical />} />
            <Route path="/dashboard/add_category" element={<AddCategory />} />
            <Route path="/dashboard/add_note" element={<AddNote />} />
            <Route path="/dashboard/add_employee" element={<AddEmployee />} />
            <Route path="/dashboard/edit_employee/:id" element={<EditEmployee />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
