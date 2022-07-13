import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { NavBar } from './Components/NavBar';
import { Account } from './Pages/Account';
import { Landing } from './Pages/Landing';

function App() {
  return (
    <div className="column App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/class' element={<Landing toggle={"class"}/>}/>
        <Route path='/product' element={<Landing toggle={"product"}/>}/>
        <Route path="/login" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
