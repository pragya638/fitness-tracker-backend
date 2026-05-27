import axios from "axios";

const API = axios.create({
  baseURL: "https://fitness-track-backend-vcwk.onrender.com",
});

export default API;