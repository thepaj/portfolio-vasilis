import React from 'react';
import Avatar from '../images/vas.jpg'

class Home extends React.Component{
    render() {
        return(
            <div>
                <div className='home-container'>
                    <div className='text-container'>
                        <div className='main-title'>
                            VASILAKI <br/>
                            BILLAKI
                        </div>
                        <div className='main-paragraph'>
                            I am a back-end developer based in Berlin, passionate about C++, Android and Python.
                        </div>
                    </div>
                    <div className='image-container'>
                        <img src={Avatar} className='avatar' alt='avatar'/>
                    </div>
                </div>
                <div className='button-container'>
                    <button className='btn'>GET MY CV</button>
                    </div>
            </div>
        )
    }
}

export default Home;