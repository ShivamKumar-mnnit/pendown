import React,{useState} from "react";
import {
  BrowserRouter as Router,
  Routes,Route
} from "react-router-dom";
import Navbar from './components/navbar';
import Signin from "./components/signin/signin";
import Signup from "./components/signup/signup";
import Footer from './components/footer/footer';
import Event from "./components/event/event";
import Student from "./components/profile/student";
import Mentor from "./components/profile/mentor";
import Body from "./components/body/body";
import Alert from './Alert';
import Home from './components/quicknotes/Home';

import NoteState from './Context/notes/NotesState';
import ProfileState from './Context/profiles/ProfilesState';
import EventState from "./Context/events/EventsState";
function App() {

  const [alert,setAlert]=useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },5000);
  }


  return (
    <>
<ProfileState>
  <EventState>
<NoteState>

    <Router>
    <Navbar/>
    <Alert alert={alert} />
    <Routes>
    <Route element={<Body showAlert={showAlert}/> } exact path='/' ></Route>
      <Route element={<Signin showAlert={showAlert}/>} exact path='/signin' ></Route>
      <Route element={<Signup showAlert={showAlert}/>} exact path='/signup' ></Route>
      <Route element={<Event showAlert={showAlert}/>} exact path='/event' ></Route>
      <Route element={<Student showAlert={showAlert}/>} exact path='/student' ></Route>
      <Route element={<Mentor showAlert={showAlert}/>} exact path='/profile' ></Route>
      <Route element={<Home showAlert={showAlert}/>} exact path='/quicknotes' ></Route>
      </Routes>
      <Footer/>
    </Router>
    </NoteState>
    </EventState>
    </ProfileState>
    </>
  );
}

export default App;
