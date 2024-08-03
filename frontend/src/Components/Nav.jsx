import React from 'react' 
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary" style={{textAlign:'center',justifyContent:'center',}}>
                <ul className='navbar-nav my-2 my-lg-0 flex-sm-row d-flex ' >
                    <li className='nav-item custom-nav-item '>
                        <Link className='nav-link custom-nav-link'  to="/home">Home</Link>
                    </li>
                    <li className='nav-item '>
                        <Link className='nav-link custom-nav-link' to="/Signup">SignUp</Link>
                    </li>
                    <li className='nav-item custom-nav-item'>
                        <Link className='nav-link custom-nav-link'  to="/Login">Login</Link>
                    </li>
                    <li className='nav-item custom-nav-item'>
                        <Link className='nav-link custom-nav-link'  to="/AboutUs">AboutUs</Link>
                    </li>
                </ul>





            </nav>
        </div>
    )
}

export default Nav