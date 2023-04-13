import fetch from "node-fetch";
import { API_KEY, BASE_URL, apiTypesObj } from "../constants.js";

export const getWeatherData = async (apiType, queryParams) => {
  console.log(apiType);
  let url = `${BASE_URL}/${apiType}?key=${API_KEY}`;
  if (queryParams) {
    url = `${url}${queryParams}`;
  }
  console.log(url);
  const response = await fetch(url).then((response) => response.text());
  return JSON.parse(response);
};
