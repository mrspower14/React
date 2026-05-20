import './Header.css';
import React from 'react';
import CurrentWeather from './CurrentWeather';

function Header() {

    console.log('Header 업데이트.');
    return (
        <div className="Header">
            <h3>오늘은 📅</h3>
            <div className="date-weather-container">
                <h1>{new Date().toDateString()}</h1>
                <CurrentWeather />
            </div>
        </div>
    );
}

export default React.memo(Header);