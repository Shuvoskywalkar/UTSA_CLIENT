import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Context } from '../../App';

function PrivateRoute({ children, ...rest }) {
    const[Loggedin,setLoggedin]=useContext(Context)
    return (
      <Route
        {...rest}
        render={({ location }) =>
          Loggedin.email ? (
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
    );
  }
  

export default PrivateRoute;