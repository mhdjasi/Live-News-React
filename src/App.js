import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Bussiness from "./components/pages/Bussiness";
import Topnews from './components/pages/Topnews';
import Health from './components/pages/Health';
import Entertainment from './components/pages/Entertainment';
import Sports from './components/pages/Sports';
import Technology from './components/pages/Technology';




function App() {
  return (
      <>
        <Router> 
         <Header/> 
         <div className="App">
  
  <Routes>
    <Route path='/' element={<Topnews/>}/>
    <Route path='/bussiness' element={<Bussiness/>}/>
    <Route path='/sports' element={<Sports/>}/>
    <Route path='/health' element={<Health />}/>
    <Route path='/entertainment' element={<Entertainment />}/>
    <Route path='/technology' element={<Technology/>}/>


  </Routes>
  </div>
        </Router> 
      </>
    
  );
}

export default App;
