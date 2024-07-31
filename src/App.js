import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Router, Routes } from 'react-router-dom';
import Login from './login';
import Menu from './Menu';
import Home from './HOME';
import Register from './reg';
import Note from './note';
import Fi from './files';
function App() {
  return (
    <div>
<BrowserRouter>
<Menu/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<Register/>}/>
  <Route path='/note' element={<Note/>}/>
  <Route path='/files' element={<Fi/>}/>


  </Routes>
  </BrowserRouter>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
