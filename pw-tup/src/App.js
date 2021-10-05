
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Courses from "./components/Courses";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar/Navbar";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import CourseDetail from "./components/CourseDetail/CourseDetail";
import AuthRoute from "./components/AuthRoute";

function App() {

  return (
    <Router>
      <div>
        <Switch>
          <AuthRoute exact={true} path={`/profile`}>
            <Profile />
          </AuthRoute>
          <Route exact={true} path="/login">
            <LoginScreen />
          </Route>
          <Route path="/">
            <Navbar />
            <Route exact={true} path={`/courses`}>
              <Courses />
            </Route>
            <AuthRoute exact={true} path={`/courses/detail`}>
              <CourseDetail
                name={'Curso de prueba'}
                description={'En este curso se verán diversos temas vinculados con la programación web, como por ejemplo JavaScript,\n' +
                'CSS, React, Django y algunos otros conceptos avanzados.'}
                // hours={150}
              />
            </AuthRoute>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
