import axios from "axios";

const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
});

http.interceptors.response.use((response) => {
  return response.data;
});

export default http;
