import React, { useState } from 'react';

import { API } from '../service/service'

const Weather = () => {
    console.log(process.env)
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [bgImg, setBgImg] = useState('');

    const search = (e) => {
        if (e.key === 'Enter') {
            fetch(`${API.base}weather?q=${query}&units=metric&APPID=${API.key}`)
                .then(response => response.json())
                .then(result => {
                    setWeather(result)
                    setClass(result.main.temp)
                    setQuery('')
                })
                .catch(err => { 
                    console.error(err)
                    alert('Try a different place')
                });
        };
    };

    // ugly code!!! didnt succeed to make switch case
    const setClass = (temp) => {
        if (temp > 35) return setBgImg('hot');
        if (temp > 20) return setBgImg('nice');
        if (temp > 10) return setBgImg('chill');
        if (temp > 0) return setBgImg('cold');
        if (temp < 0) return setBgImg('snow');
    };

    return (
        <div className={`${bgImg} main-container`}>
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
};

export default Weather;
