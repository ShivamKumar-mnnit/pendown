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
import Intro from './components/productDesc/intro';
function App() {
  return (
    <>
    <Router>
    
    <Routes>
    <Route element={[<Navbar/>,<Categorynav/>,<Crousel />,<Product/>,<Footer/>] } exact path='/' ></Route>
      <Route element={<Signin/>} exact path='/signin' ></Route>
      <Route element={<Signup/>} exact path='/signup' ></Route>
      <Route element={<Intro/>} exact path='/product'></Route>
      </Routes>
     
    </Router>
    </>
  );
}

export default App;
