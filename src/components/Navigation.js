import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component{
    render() {
        return(
           <div className='navbar'>
               <Link exact to='/' className='link-name'>Vasilis Drettas</Link>
               <Link to='/projects' className='link'>Projects</Link>
               <Link to='/contact' className='link'>Contact</Link>
           </div>
        )
    }
}

export default Navigation;