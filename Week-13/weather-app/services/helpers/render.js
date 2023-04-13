export const renderForecastData = (forecastData) => {
  console.log("-----------------------------------------");
  forecastData.forEach((item) => {
    console.log(`Date: ${item.date}`);
    console.log(`Max Temp: ${item.day.maxtemp_c}`);
    console.log(`Min Temp: ${item.day.mintemp_c}`);
    console.log(`Avg Temp: ${item.day.avgtemp_c}`);
    console.log(`Humidity: ${item.day.avghumidity}`);
    console.log(`Sunrise: ${item.astro.sunrise}`);
    console.log(`Sunset: ${item.astro.sunset}`);
    console.log(`Moonrise: ${item.astro.moonrise}`);
    console.log(`Moonset: ${item.astro.moonset}`);
    console.log("-----------------------------------------");
  });
};

export const renderCurrentWeatherData = (location, current) => {
  console.log("-----------------------------------------");
  console.log(`Weather details of city: ${location.name}`);
  console.log(`Temp in C: ${current.temp_c}`);
  console.log(`Temp in F: ${current.temp_f}`);
  console.log(`Humidity: ${current.humidity}`);
  console.log(`Wind (KPH): ${current.wind_kph}`);
  console.log("-----------------------------------------");
};
