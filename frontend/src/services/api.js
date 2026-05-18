import axios from "axios";

const API = axios.create({
  baseURL: "https://sample-backend-nkq5.onrender.com",
});

export default API;