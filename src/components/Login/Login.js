import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'
const Login = () => {
    const { singInUsingGoogle } = useAuth()
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from  || '/shop'

    const handleGoogleLogIn = () => {
        singInUsingGoogle()
            .then(result => {
            history.push(redirect_uri)
        })
    }
    return (
        <div className="login-from">
            <div className="">
                <h2>LogIn</h2>
                <form >
                    <input type="email" name="" id="" placeholder="Your email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>new to Ema-Jhon <Link to="/register">Create your Ema-Jhon account </Link></p>
                <div>----------or-----------</div>
                <button onClick={handleGoogleLogIn} className="btn-regular">Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;