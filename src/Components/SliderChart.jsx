import React from 'react';
import './SliderChart.css'; // Import CSS file for styling (create this file)

const SliderChart = ({ todayLow, todayHigh, currentPrice }) => {
    const range = todayHigh - todayLow;
    const currentPosition = ((currentPrice - todayLow) / range) * 100;

    return (
        <div className="slider-container">
            <div className="price-labels">
                <div className="price-label">Today's Lowset <br></br><div className='level1'>${todayLow}</div></div>
                <div className="slider">
                    <div className="slider-line"></div>
                    <div className="slider-handle" style={{ left: `${currentPosition}%` }}>
                        <div className="triangle"><div className="price-label" style={{ textAlign: 'center', marginTop: '7px' }}>${currentPrice}</div></div> {/* Add triangle pointer */}
                    </div>
                </div>
                <div className="price-label"><div style={{}}>Today's Highest </div><div className="level2">${todayHigh}</div></div>
            </div>
            {/* <div className="slider"> */}    
                {/* <div className="slider-line"></div>
                <div className="slider-handle" style={{ left: `${currentPosition}%` }}>
                    <div className="triangle"><div className="price-label" style={{ textAlign: 'center', marginTop: '7px' }}>${currentPrice}</div></div>
                </div> */}
            {/* </div> */}
        </div>
    );
};

export default SliderChart;
