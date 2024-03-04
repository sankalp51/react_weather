// App.js
import { useEffect, useState } from "react";
import WeatherCard from "./components/WeatherCard";
import styles from "./app.module.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState();
  const [selectedCity, setSelectedCity] = useState('mumbai');
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(prevState => !prevState);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${import.meta.env.VITE_API_PASSWORD}`);
        const data = await response.json();
        console.log(data);

        if (response.ok) {
          if (data) {
            setWeatherData(data);
            setIsLoading(prevState => !prevState);
          }
        }
      } catch (error) {
        setIsLoading(false);
        setError(error.message || 'Error fetching data');
      }
    }
    fetchData();
  }, [selectedCity]);

  return (
    <div>
      <div className={styles['select-container']}>
        <select
          className={styles['select-dropdown']}
          onChange={e => setSelectedCity(e.target.value)}
        >
          <option className={styles['option']} value="mumbai">Mumbai</option>
          <option className={styles['option']} value="london">London</option>
          <option className={styles['option']} value="tokyo">Tokyo</option>
          <option className={styles['option']} value="athens">Athens</option>
          <option className={styles['option']} value="Los%20Angeles">Los Angeles</option>
          <option className={styles['option']} value="paris">Paris</option>
          <option className={styles['option']} value="newyork">New York</option>
          <option className={styles['option']} value="sydney">Sydney</option>
          <option className={styles['option']} value="berlin">Berlin</option>
          <option className={styles['option']} value="rome">Rome</option>
          <option className={styles['option']} value="dubai">Dubai</option>
          <option className={styles['option']} value="singapore">Singapore</option>
        </select>
      </div>
      {isLoading && <p>Loading weather details</p>}
      {!error && <WeatherCard data={weatherData} />}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default App;
