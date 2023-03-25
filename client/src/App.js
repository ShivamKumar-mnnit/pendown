import React,{useState} from "react";
import Error from "./components/error";
import {
  BrowserRouter as Router,
  Routes,Route
} from "react-router-dom";
import Navbar from './components/navbar';
import Signin from "./components/signin/signin";
import Signup from "./components/signup/signup";
import Footer from './components/footer/footer';
import HomeEvent from "./components/event/Home";
import HomedisplayEvent from './components/displayevents/Home';
import Mentor from "./components/profile/Home";
import HomeNote from './components/quicknotes/Home';
import Body from "./components/body/body";
import Alert from './Alert';



import Team from "./components/team/team";


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
      <Route path="*" element={<Error/>} />
    <Route element={<Body showAlert={showAlert}/> } exact path='/' ></Route>
      <Route element={<Signin showAlert={showAlert}/>} exact path='/signin' ></Route>
      <Route element={<Signup showAlert={showAlert}/>} exact path='/signup' ></Route>
      <Route element={<HomeEvent showAlert={showAlert}/>} exact path='allevent/addevent' ></Route>
      <Route element={<HomedisplayEvent showAlert={showAlert}/>} exact path='/allevent' ></Route>
      <Route element={<Mentor showAlert={showAlert}/>} exact path='/profile' ></Route>

      <Route element={<HomeNote showAlert={showAlert}/>} exact path='/quicknotes' ></Route>


    
      <Route element={<Team />} exact path='/team' ></Route>

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
