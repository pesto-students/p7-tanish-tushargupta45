import { apiTypesObj } from "./constants.js";
import { getWeatherData } from "./services/get-weather-data-api-service.js";
import {
  renderCurrentWeatherData,
  renderForecastData,
} from "./services/helpers/render.js";

const cityName = "Paris";
const days = 3;

//API to get current weather information of a city
//city can be passed as name / lat,lon / zip / postcode
const getWeatherInfoOfCity = async (params) => {
  const data = await getWeatherData(apiTypesObj.currentWeather, params);
  if (data && data.current) {
    const { current, location } = data;
    renderCurrentWeatherData(location, current);
  }
};

//API to get weather forecast of a city for given number of days
//days param: days=3
//specific date param: dt=2010-01-01
const getWeatherForecastOfCity = async (params) => {
  const data = await getWeatherData(apiTypesObj.forecast, params);
  if (data && data.forecast) {
    const forecastData = data.forecast.forecastday;
    renderForecastData(forecastData);
  }
};

getWeatherInfoOfCity(`&q=${cityName}`);
getWeatherForecastOfCity(`&q=${cityName}&days=${days}`);
