import React from 'react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          cssClass: ''
        }

        this.changeToggle = this.changeToggle.bind(this);
    }

    changeToggle() {
        if (this.state.cssClass === '') {
            this.setState({
                cssClass: 'change'
            })
        } else {
            this.setState({
                cssClass: ''
            })
        }
    }

    render() {
        return(
           <div className='navbar'>
               
                <div 
                    className="nav-btn-container" 
                    onClick={this.changeToggle}>

                    <div className={this.state.cssClass}>
                        <div className="bar1"></div>
                    </div>
                    <div className={this.state.cssClass}>
                        <div className="bar2"></div>
                    </div>
                    <div className={this.state.cssClass}>
                        <div className="bar3"></div>
                    </div>

                </div>

               <Link exact to='/' className='link-name'>Vasilis Drettas</Link>
               <Link to='/about' className='link'>About</Link>
               <Link to='/contact' className='link'>Contact</Link>
           </div>
        )
    }
}

export default Navigation;