import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { NavBar } from './Components/NavBar';
import { UserContext } from './Components/RoleContext';
import { Account } from './Pages/Account';
import { Landing } from './Pages/Landing';

function App() {

  const [role, setRole] = useState("");

  return (
    <UserContext.Provider value={role}>
    <div className="column App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/class' element={<Landing toggle={"class"}/>}/>
        <Route path='/product' element={<Landing toggle={"product"}/>}/>
        <Route path="/login" element={<Account roleFN={setRole}/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </UserContext.Provider>
  );
}

export default App;
