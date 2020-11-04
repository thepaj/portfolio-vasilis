import React from 'react';
import Chart from './Chart';
import Avatar from '../images/vasilis.jpg';

class About extends React.Component{
    render() {
        return(
            <div className='content-container'>
                <div className='page-title'>
                    Little bit about me
                </div>
                <div className="about-container">
                    <div className="about-column-container">
                        <div className='about-column-content'>
                            <div>
                                <img src={Avatar} alt="avatar" className="avatar"/>
                            </div>
                            <div>
                                <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis semper nunc. Donec et dapibus massa. Vivamus vel posuere arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam rutrum nisl et sem vestibulum pharetra vel ac tortor. Sed cursus sapien eget nibh aliquet dictum. Integer pretium purus eros.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-column-container">
                        <div className='about-column-content'>
                            <h2 className='secondaty-title'>My skills</h2>
                            <div className="chart-container">
                                <Chart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;