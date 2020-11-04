import React from 'react';

class Chart extends React.Component {
	render() {
		return(
			<div>
				<div className="charts">
					<span>C++</span>
					<div className="charts__chart chart--lg chart--yellow chart--hover" data-percent="80%" style={{width: "80%"}}></div>
					<span>Python</span>
					<div className="charts__chart chart--lg chart--yellow chart--hover" data-percent="40%" style={{width: "40%"}}></div>
					<span>Android</span>
					<div className="charts__chart chart--lg chart--yellow chart--hover" data-percent="45%"style={{width: "45%"}}></div>
					<span>Java</span>
					<div className="charts__chart chart--lg chart--yellow chart--hover" data-percent="30%"style={{width: "30%"}}></div>
				</div>
			</div>
		)
	}
}

export default Chart;