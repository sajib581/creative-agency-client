import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const isLoggedIn = () => {
      const user = sessionStorage.getItem('user');
      console.log(user);
      if(!user){
        return false;
      }else{
          return true;
      }
    }

    return (
        <Route
      {...rest}
      render={({ location }) =>
        (loggedInUser.email ) ? (
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
};

export default PrivateRoute;