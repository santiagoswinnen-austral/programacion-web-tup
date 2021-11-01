
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
          <Route path="/main">
            <Navbar />
            <AuthRoute exact={true} path={`/main/profile`}>
              <Profile />
            </AuthRoute>
            <Route exact={true} path={`/main/courses`}>
              <Courses />
            </Route>
            <Route exact={true} path={`/main/courses/detail/:id`}>
              <CourseDetail/>
            </Route>
          </Route>
          <Route path="*">
            <div><h1>404</h1></div>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
