import { useEffect, useState } from "react";
import "./CurrentWeather.css";

interface WeatherData {
    name: string;
    weather: {
        description: string;
        icon: string
    }[];
    main: {
        temp: number;
    }
}


export default function CurrentWeather() {

    const [weatherData, setWeather] = useState<WeatherData | null>(null);

    useEffect (() => {
        navigator.geolocation.getCurrentPosition( 
            async (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                
                const apikey = import.meta.env.VITE_OPEN_WEATHER_KEY;
                const endPoint = `https://api.openweathermap.org/data/2.5/weather?appid=${apikey}&units=metric&lang=kr&lat=${lat}&lon=${lon}`;
                const response = await fetch(endPoint);

                const data: WeatherData = await response.json();

                setWeather(data);
            },
            (error) => {
                console.log(error);
            }
        )
    }, []);

    // useEffect(() => {
    //     //navigator.geolocation.getCurrentPosition()
    
    //     //함수 정의
    //     const fetchWeather = async () => {
    //         try{
    //             const apikey = import.meta.env.VITE_OPEN_WEATHER_KEY;
    //             const endPoint = `https://api.openweathermap.org/data/2.5/weather?appid=${apikey}&units=metric&lang=kr&q=seoul`;
    //             const response = await fetch(endPoint);
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! status: ${response.status} `);
    //             }

    //             const data: WeatherData = await response.json();
                
    //             setWeather(data);

    //         } catch (err) {
    //             console.error('날씨 검색중 오류', err);
    //         }
    //     }

    //     //함수 호출
    //     fetchWeather();

        
    // }, []);
    
    if (!weatherData) {
        return <div>날씨를 불러오는 중...</div>
    }

    const icon = weatherData.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
    const description = weatherData.weather[0].description;
    const temp = weatherData.main.temp.toFixed(1);

    return (
        <div className="weather-container">
          <img src={iconUrl} alt={description} />
          <p>{description} | {temp}℃</p>
        </div>
    );

}