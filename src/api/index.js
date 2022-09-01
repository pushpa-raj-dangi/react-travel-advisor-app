import axios from "axios";
const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng";

export const getPlacesData = async (ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        latitude: "12.91285",
        longitude: "100.87808",
      },
      headers: {
        "X-RapidAPI-Key": "5cc58cd9d0mshc9dcb627262b114p1a2556jsnfa5ad4567fd3",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
