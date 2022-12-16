import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import './login.css'
const Login = () => {
    const [error, setError] = useState(null)
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location=useLocation()
    const from = location.state?.from?.pathname || "/";


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;



        if (password.length > 6) {
            setError('Password must be 6 character or more')
        }

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from,{replace:true})

            })
            .catch(error => console.error(error))
    }




    return (
        <div className='form-container'>
            <h2 className='form-title'>Log In</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required />
                </div>
                <input className='btn-submit' type="submit" value="Log In" />
            </form>
            <p>New to ema jhon <Link to="/signup">Create a new Account</Link></p>
        </div>
    );
};

export default Login;