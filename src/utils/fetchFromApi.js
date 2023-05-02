import axios from "axios";
const BaseUrl = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "12",
    test: process.env,
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchApi = async (url, param = null) => {
  console.log(process.env.REACT_APP_RAPID_KEY);
  const optionsf = param ? { ...options, params: param } : { ...options };
  const { data } = await axios.get(`${BaseUrl}/${url}`, optionsf);
  return data;
};
