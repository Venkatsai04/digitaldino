import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Show from './components/services/Show';
import MainCom from './MainCom';
import Card from './components/services/Card';
import Loading from './components/Loading';
import Student from './components/student/StudentHow';
import Login from './components/student/Login';
import SignUp from './components/student/SignUp';
import EmailTemplate from './components/student/EmailTemplate';
import StudentMain from './components/student/StudentMain';
import StudentTemplate from './components/student/StudentTemplate';
import VerifyUser from './components/student/VerifyUser';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<MainCom/>}/>
          <Route exact path='/services' element={<Show />} />
          <Route exact path='/services/:service' element={<Card />} />
<<<<<<< HEAD
          <Route exact path='/Loading' element={<Loading />} />
=======
          {/* <Route exact path='/Loading' element={<Loading />} /> */}
>>>>>>> 1e9fc4e (Initial clean commit (without secrets))
          <Route exact path='/student' element={<Student />} />
          <Route exact path='/student/main' element={<StudentMain />} />
          <Route exact path='/student/main/select' element={<StudentTemplate />} />
          <Route exact path='/student/login' element={<Login/>} />
          <Route exact path='/student/signup' element={<SignUp/>} />
          <Route exact path='/student/emailtemplate/:email' element={<EmailTemplate/>} />
          <Route exact path='/auth/verify/:token' element={<VerifyUser/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
