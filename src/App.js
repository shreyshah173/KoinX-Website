import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <>
        <Navbar />    
        {/* other components    */}
        <div style={{backgroundColor :'rgba(238,242,244,255)'}}>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
    </>
  );
}

export default App;
