import React from "react";
import {
  BrowserRouter as Router,
  Routes,Route
} from "react-router-dom";
import Navbar from './components/navbar';
import Signin from "./components/signin/signin";
import Categorynav from "./components/categorynav/categorynav";
import Crousel from './components/body/crousel';
import Signup from "./components/signup/signup";
import Product from './components/body/product';
import Footer from './components/footer/footer';
function App() {
  return (
    <>
    <Router>
    
    <Routes>
    <Route element={<Navbar/>} exact path='/' ></Route>
      <Route element={<Signin/>} exact path='/signin' ></Route>
      <Route element={<Signup/>} exact path='/signup' ></Route>
      </Routes>
    <Categorynav/>  
    <Crousel />
    <Product/>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
