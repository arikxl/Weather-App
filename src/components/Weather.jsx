import React from 'react';

import cold from '../images/cold-bg.jpg';
import warm from '../images/warm-bg.jpg';



const Weather = () => {
    return (
        <div className="main-container warm">
            <main>
                <div className="search-box">
                    <input type="text"
                        className="search-bar"
                        placeholder="Search..." />
                </div>
                <div className="location-box">
                    <div className="location">Beer Sheva</div>
                    <div className="date">{new Date().toDateString()}</div>
                </div>
                <div className="weather-box">
                    <div className="temp">20°c</div>
                    <div className="weather">
                        Sunny
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Weather
