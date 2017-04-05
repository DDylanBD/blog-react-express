import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';
import '../static/css/Base/Base.scss';



const Base = ({ children }) => (
  <div>
    <div className='headerContainer'>
      <div className='container'>
        <IndexLink to="/">React App</IndexLink>
      </div>

      {Auth.isUserAuthenticated() ? (
        <div>
          <Link to="/logout">Log out</Link>
        </div>
      ) : (
        <div className='container'>
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      )}

    </div>

    { /* child component will be rendered here */ }
    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
