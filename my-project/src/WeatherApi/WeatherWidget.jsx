import { useContext, useEffect, useState } from "react"
import axios from 'axios'
import { cityContext } from "./WeatherApi";

export function WeatherWidget(){

    let cityName = useContext(cityContext);

    const[weatherObj,setWeatherObj] = useState({ main:{temp:0}, weather:[{description:''}], wind:{speed:0} });

    useEffect(()=>{
       
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=81cf2185c7300b7f9fcf5cd69ed53942&units=metric`)
        
        .then(response=>{
            setWeatherObj(response.data)
            console.log(response)
        })
        
    },[cityName])

    return(
        <div>
            <h3>{weatherObj.name}</h3>
            <dl>
                <dt>Temp</dt>
                <dd>{weatherObj.main.temp} &deg; C</dd>
                <dt className="bi bi-cloud">Description</dt>
                <dd>{weatherObj.weather[0].description}</dd>
                <dt className="bi bi-water">Wind speed</dt>
                <dd>{weatherObj.wind.speed.toLocaleString( 'en-in', { style:'unit', unit:'kilometer-per-hour' } )}</dd>
            </dl>
        </div>
    )
}