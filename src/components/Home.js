import React from 'react';

class Home extends React.Component{
    render() {
        return(
            <div className='content-container'>
                <div>
                    <div className='main-title'>
                        Hi! <br />
                        I'm Vasilis. <br/>
                        A back-end developer.
                    </div>
                    <div className='main-paragraph'>
                        I am a back-end developer based in Berlin, passionate about C++, Android and Python.
                    </div>
                </div>
                <div className='button-container'>
                    <a href="https://github.com/billDrett" target="_blank" rel="noopener noreferrer" className='btn btn-main'>GET MY CV</a>
                </div>
            </div>
        )
    }
}

export default Home;