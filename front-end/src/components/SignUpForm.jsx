import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import '../static/css/SignUpForm/SignUpForm.scss';
import '../static/css/Button/Button.scss';


const SignUpForm = ({onSubmit, onChange, errors, user}) => (
    <div className="container1">
        <form action="/" onSubmit={onSubmit}>
            <h2 className="card-heading">Sign Up</h2>

            {errors.summary && <p className="error-message">{errors.summary}</p>}

            <div className="group">
              <input  name='name' type="text" onChange={onChange} value={user.name} required/>
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Name</label>
              <div>{errors.name}</div>

            </div>


            <div className="group">
                <input name="email" type='text' onChange={onChange} value={user.email} required/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Email</label>
                <div>{errors.email}</div>
            </div>

            <div className="group">
                <input  type="password" name="password" onChange={onChange} value={user.password} required/>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label>Password</label>
                <div>{errors.password}</div>
            </div>

            <div className="button-line">
                <button type="submit" className='draw'>Validation</button>
            </div>

            <div>Already have an account?
                <Link to={'/login'}>Log in</Link>
            </div>
        </form>
    </div>
);

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default SignUpForm;
