import React from 'react';
import { Link } from 'react-router-dom';

// import Home from '../images/icons/home.png';
// import Projects from '../images/icons/projects.png';
// import Contact from '../images/icons/contact.png';

class Navigation extends React.Component{
    render() {
        return(
           <div className='navbar'>
               <Link exact to='/' className='link-name'>Vasilis Drettas</Link>
               <Link to='/about' className='link'>About</Link>
               <Link to='/contact' className='link'>Contact</Link>
           </div>
        )
    }
}

export default Navigation;