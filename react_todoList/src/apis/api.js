import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
//   baseURL: "https://6182263884c2020017d89cbd.mockapi.io/",
});

export default api;
