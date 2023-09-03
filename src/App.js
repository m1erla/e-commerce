import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Products from './pages/Products';
import Navbar from './components/Navbar';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
function App() {
  return (
    <div>
      <Navbar />
     <div className='Routes'>
      <div id='content'>
      <Routes>
        <Route path="/" element={<Products />}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path="/signup" element={<Signup />} />
    </Routes>
      </div>
   
    </div>
 </div>
  );
}

export default App;
