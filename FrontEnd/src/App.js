
import './App.css';
import Bill from './component/Bill';
import Details from './component/Details';
import Navbar from './component/Navbar';
import Formstate from './context/Formstate';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';



function App(){
  return (

    <Router>
      <Formstate>

        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/bill' element={< Bill />}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/details' element={<Details/>}></Route>
        </Routes>

      </Formstate>
    </Router>


  );
}

export default App;
