import React from "react";
import styles from "./weathercard.module.css";

const WeatherCard = ({ data }) => {
    if (!data || !data.weather) {

        return <p>No weather data available</p>;
    }

    return (
        <div className={styles['weather-card']}>
            <h2 className={styles['weather-title']}>Today</h2>
            <img
                className={styles['weather-icon']}
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                alt="Weather Icon"
            />
            <p className={styles['weather-location']}>{`${data.name}, ${data.sys.country}`}</p>
            <p className={styles['weather-description']}>{data.weather[0].description}</p>
        </div>
    );
};

export default WeatherCard;
