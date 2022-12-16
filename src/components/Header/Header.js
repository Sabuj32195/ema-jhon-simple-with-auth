import React from 'react';
import { useContext } from 'react';

import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import UserContext, { AuthContext } from '../context/UserContext';
import './Header.css';

const Header = () => {
    const { user,logOut } = useContext(AuthContext)

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                {
                    user?.uid ? <Link onClick={logOut}>LogOut</Link>
                        : <>
                            <Link to="/login">LogIn</Link>
                            <Link to="/signup">SignUP</Link>
                        </>
                }

                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <p>{user?.email}</p>

            </div>

        </nav>
    );
};

export default Header;