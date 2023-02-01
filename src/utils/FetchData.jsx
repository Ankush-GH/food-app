import axios from "axios";

export const restaurentOptions = {
  method: "GET",
  // url: "https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/0",
  headers: {
    "X-RapidAPI-Key": "8e918e8cfbmshc8aad63490d7cdbp11f429jsn720c947e385d",
    "X-RapidAPI-Host": "restaurants-near-me-usa.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  // console.log("FETCHING");
  const data = await axios.request(url, options);
  // console.log("FETCHED", data.resturants);
  return data.data.restaurants;
};
