import axios from "axios";

const API = axios.create({
  baseURL: "https://sample-backend-1-sr60.onrender.com/api",
});

export default API;