import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Mentor from './component/mentor/Mentor';
import Student from './component/student/Student';
import Navigation from './component/Navigation';
import Studentstomentor from "./component/studentstomentor/Studentstomentor.js"
import Changementorforstudent from './component/changementorforstudent/Changementorforstudent';
import MentorList from './component/mentor/MentorList';

function App() {
  return (
    <div>
      <Navigation/>
      <BrowserRouter>
      <Routes>
      <Route path="/mentor" element={<Mentor/>} />
      <Route path="/student" element={<Student/>} />
      <Route path="/studentstomentor" element={<Studentstomentor/>} />   
      <Route path="/changementortostudent" element={<Changementorforstudent/>} /> 
      <Route path="/mentorlist" element={<MentorList/>} />       
      </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
