import React, { useState } from 'react';

import cold from '../images/cold-bg.jpg';
import warm from '../images/warm-bg.jpg';

import { API } from '../service/service'

const Weather = () => {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = (e) => {
        if (e.key === 'Enter') {
            fetch(`${API.base}weather?q=${query}&units=metric&APPID=${API.key}`)
                .then(response => response.json())
                .then(result => {
                    setWeather(result);
                    console.log('result:', result)
                    setQuery('')
                });
        };
    };

    return (
        <div className="main-container warm">
            <main>
                <div className="search-box">
                    <input type="text"
                        className="search-bar"
                        placeholder="Search..."
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search} />
                </div>
                {weather.main && (<>
                    <div className="location-box">
                        <div className="location">
                            {/* {weather &&} */}
                            {weather.name}, {weather.sys.country}
                        </div>
                        <div className="date">{new Date().toDateString()}</div>
                    </div>
                    <div className="weather-box">
                        <div className="temp">{Math.round(weather.main.temp)}°c</div>
                        <div className="weather">
                            {weather.weather[0].main}
                        </div>
                    </div>
                </>)}
            </main>
        </div>
    )
}

export default Weather
