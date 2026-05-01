import axios from "axios";

const API = axios.create({
  // baseURL: "https://sales-service-crmbe.onrender.com/api",
  baseURL: "https://sales-service-crmbe.onrender.com/api",
});

export default API;