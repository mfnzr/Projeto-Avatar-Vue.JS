import axios from "axios";

const HttpService = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    "Content-type": "application/json",
  },
});

export const AllCharacters = () => {
  return axios.get('https://last-airbender-api.fly.dev/api/v1/characters')
  };
export default HttpService;
