import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoteState from './context/nodes/NoteState';
import Alert from './components/Alert';


export default function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="Amazing React Course" />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  )
}
