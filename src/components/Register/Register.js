import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-from">
            <div className="">
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" placeholder="enter your email" id="" />
                    <br />
                    <input type="password" name="" placeholder="your password" id="" />
                    <br />
                    <input type="re-enter password" name="" placeholder="your password" id="" />
                    <br />
                    <input type="submit" value="submit" />
                    <br />
                    <p>Already have an account <Link to="/login">login</Link></p>
                </form>
                <div>------------or---------------</div>
                <button className="btn-regular">Google SingIn</button>
            </div>
        </div>
    );
};

export default Register;