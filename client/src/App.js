import React from "react";
import {
  BrowserRouter as Router,
  Routes,Route
} from "react-router-dom";
import Navbar from './components/navbar';
import Signin from "./components/signin/signin";
import Categorynav from "./components/categorynav/categorynav";
import Crousel from './components/body/crousel';
function App() {
  return (
    <>
    <Router>
    
    <Routes>
    <Route element={<Navbar/>} exact path='/' ></Route>
      <Route element={<Signin/>} exact path='/signin' ></Route>
      </Routes>
    <Categorynav/>  
    <Crousel />
    </Router>
    </>
  );
}

export default App;
