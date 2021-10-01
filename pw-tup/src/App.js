import logo from './logo.svg';

import './App.css';
import {useState} from "react";
import SubjectCard from "./components/SubjectCard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Courses from "./components/Courses";
import Profile from "./components/Profile";

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/courses">Cursos</Link>
            </li>
            <li>
              <Link to="/profile">Perfil</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
