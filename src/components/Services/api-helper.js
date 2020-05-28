const axios = require("axios");

// const BASE_URL = 'http://localhost:3001';
const BASE_URL =
  "https://cors-anywhere.herokuapp.com/https://daytona-gang.firebaseio.com/";

const api = axios.create({
  baseURL: BASE_URL,
});

export const getDrivers = async () => {
  try {
    const drivers = await api.get(`/drivers.json`);
    return drivers.data;
  } catch (e) {
    console.log(e.message);
  }
};
