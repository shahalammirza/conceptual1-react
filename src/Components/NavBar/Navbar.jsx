import React from 'react';
import navImg from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between bg-black text-white py-3.5 items-center'>
            <div className='flex items-center gap-3'>
                <img className='logo' src={navImg} alt="" />
                <h4>Food BD</h4>
            </div>
            <div>
                <ul className='flex gap-4'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blogs</a></li>
                </ul>
            </div>
                <h4>logins</h4>
            </nav>
        </div>
    );
};

export default Navbar;