
import NavBar from "/NavBar";
import React, { useState, useEffect } from 'react';



export default function NasaWeather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeather();

    async function fetchWeather() {
      const res = await fetch(
        `https: //api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0`
      );
      const data = await res.json();
      setWeatherData(data);
      console.log(data);
    }
  }, []);

  if (!weatherData) return <div />;

  return (
    <>
    <NavBar />
    <div className="nasa-photo">
      {weatherData.media_type === "image" ? (
        <img
          src={weatherData.url}
          alt={weatherData.title}
          className="photo"
        />
      ) : (
        <iframe
          title="space-video"
          src={weatherData.url}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
          className="photo"
        />
      )}
      <div>
        <h1>{weatherData.title}</h1>
        <p className="date">{weatherData.date}</p>
        <p className="explanation">{weatherData.explanation}</p>
      </div>
    </div>
    </>
  );
}