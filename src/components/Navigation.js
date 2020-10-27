import React from 'react';
import { Link } from 'react-router-dom';

import Home from '../images/icons/home.png';
import Projects from '../images/icons/projects.png';
import Contact from '../images/icons/contact.png';

class Navigation extends React.Component{
    render() {
        return(
           <div className='navbar'>
               <Link exact to='/' className='link-name'>Vasilis Drettas</Link>
               <img  as={Link} exact to='/' src={Home} alt='home' className='nav-icon'/>
               <Link to='/projects' className='link'>Projects</Link>
               <img as={Link} to='/projects' src={Projects} alt='home' className='nav-icon'/>
               <Link to='/contact' className='link'>Contact</Link>
               <img as={Link} to='/contact' src={Contact} alt='home' className='nav-icon'/>
           </div>
        )
    }
}

export default Navigation;