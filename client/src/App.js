import React from "react";
import {
  BrowserRouter as Router,
  Routes,Route
} from "react-router-dom";
import Navbar from './components/navbar';
import Cards from './components/body/cards';
import Signin from "./components/signin/signin";
import Signup from "./components/signup/signup";
import Footer from './components/footer/footer';
import Event from "./components/event/event";
function App() {
  return (
    <>
    <Router>
    
    <Routes>
    <Route element={[<Navbar/>,<Cards/>,<Footer/>] } exact path='/' ></Route>
      <Route element={<Signin/>} exact path='/signin' ></Route>
      <Route element={<Signup/>} exact path='/signup' ></Route>
      <Route element={<Event/>} exact path='/event' ></Route>
      </Routes>

    </Router>
    </>
  );
}

export default App;
