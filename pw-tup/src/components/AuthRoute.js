import {Route, Redirect} from "react-router-dom";


const AuthRoute = ({exact, children, path}) => {

  const isLoggedIn = localStorage.getItem('token')

  return (
    <Route
      exact={exact}
      path={path}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  )
};

export default AuthRoute
