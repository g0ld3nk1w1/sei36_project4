import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { ClassForm } from './Components/ClassForm';
import { NavBar } from './Components/NavBar';
import { ProductForm } from './Components/ProductForm';
import { ROLE, UserContext } from './Components/RoleContext';
import { Account } from './Pages/Account';
import { Creation } from './Pages/Creation';
import { Landing } from './Pages/Landing';

function App() {

  const [role, setRole] = useState("");
  const isUserAI = role === ROLE.ADMIN || role === ROLE.INSTRUCTOR;


  return (
    <UserContext.Provider value={role}>
    <div className="column App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/class' element={<Landing toggle={"class"} />}/>
        <Route path='/product' element={<Landing toggle={"product"}/>}/>
        <Route path="/login" element={<Account roleFN={setRole}/>} />
        <Route path="/create" element={isUserAI? <Creation /> : <Landing />}>
          <Route path="class" element={<ClassForm />}/>
          <Route path="product" element={<ProductForm />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </UserContext.Provider>
  );
}

export default App;
