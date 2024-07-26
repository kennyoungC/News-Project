import React, { useEffect, useState } from "react"

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [value, setValue] = useState("kaunas")
  const [error, setError] = useState(null)

  // useEffect(() => {
  const fetchWeatherData = async () => {
    try {
      const apiKey = "50c683e8de46a3d1943275b826348394"

      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}`
      const response = await fetch(apiUrl)

      if (response.ok) {
        const data = await response.json()
        setWeatherData(data)
        setError(null)
      } else {
        setError("City not found. Please enter a valid city name.")
        setWeatherData(null)
      }
    } catch (error) {
      console.error("Error fetching weather data:", error)
      setError("Error fetching weather data. Please try again later.")
      setWeatherData(null)
    }
  }
  // }, [])
  return (
    <div className="bg-gray-200">
      <div className="flex items-center justify-center container mx-auto">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          className="w-full h-full p-3"
          placeholder="Seach for cities"
        />
        <button
          onClick={() => fetchWeatherData()}
          className="
        bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
        "
        >
          Search
        </button>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        {weatherData ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">{weatherData?.name}</h2>
            <div className="flex items-center justify-center">
              <img
                className="mr-4 w-20 h-20"
                src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}.png`}
                alt="Weather Icon"
              />
              <p className="text-2xl">{weatherData?.weather[0]?.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <p className="text-xl">Temperature:</p>
                <p className="text-3xl font-bold">
                  {Math.round(weatherData?.main.temp - 273.15)}°C
                </p>
              </div>
              <div>
                <p className="text-xl">Humidity:</p>
                <p className="text-3xl font-bold">
                  {weatherData?.main?.humidity}%
                </p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-xl">Wind Speed:</p>
              <p className="text-3xl font-bold">
                {weatherData?.wind?.speed} m/s
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center">
            {error ? (
              <h1 className="text-2xl mb-4 font-semibold text-red-500">
                {error}
              </h1>
            ) : (
              <h1 className="text-2xl mb-4 font-semibold">
                Enter a city name to getweather info...
              </h1>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Weather
