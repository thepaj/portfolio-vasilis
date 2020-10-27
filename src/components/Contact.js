import React from 'react';
import Email from '../images/icons/email.png';
import LinkedIn from '../images/icons/linkedin.png';
import Github from '../images/icons/github.png';

class Contact extends React.Component{
    render() {
        return(
            <div className='content-container'>
                <div className='page-title'>
                    CONTACT ME
                </div>
                <div className='icons-container'>
                    <a href="https://www.linkedin.com/in/pavla-jureckova/" target="_blank" rel="noopener noreferrer" className='icon-box'>
                        <img src={Email} alt='email' className='icon'/>
                        <div className='icon-name'>Email</div>
                    </a>
                    <a href="https://github.com/billDrett" target="_blank" rel="noopener noreferrer" className='icon-box'>
                        <img src={Github} alt='github' className='icon'/>
                        <div className='icon-name'>Github</div>
                    </a>
                    <a href="https://www.linkedin.com/in/79623/" target="_blank" rel="noopener noreferrer" className='icon-box'>
                        <img src={LinkedIn} alt='linkedin' className='icon'/>
                        <div className='icon-name'>LinkedIn</div>
                    </a>
                </div>
            </div>
        )
    }
}

export default Contact;