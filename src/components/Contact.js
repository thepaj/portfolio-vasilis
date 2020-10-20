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
                        <img src={Email} alt='email' />
                    </a>
                    <a href="https://github.com/billDrett" target="_blank" rel="noopener noreferrer" className='icon-box'>
                        <img src={Github} alt='github' />
                    </a>
                    <a href="https://www.linkedin.com/in/79623/" target="_blank" rel="noopener noreferrer" className='icon-box'>
                        <img src={LinkedIn} alt='linkedin' />
                    </a>
                </div>
            </div>
        )
    }
}

export default Contact;