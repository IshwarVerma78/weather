import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        fellslike: 23.22,
        temp: 25.33,
        tempMin: 25.04,
        tempMax: 25.33,
        humidity: 83.33,
        weather: "Sunny",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather Web</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}