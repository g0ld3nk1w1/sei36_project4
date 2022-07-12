import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { NavBar } from './Components/NavBar';
import { Landing } from './Pages/Landing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
