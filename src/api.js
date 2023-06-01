import axios from "axios";

export async function getDestination() {
  try {
    const response = await axios.get(
      "https://golobe-be.onrender.com/api/stay/destination"
    );

    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getHotelData(params) {
  try {
    const response = await axios({
      method: "get",
      url: `https://golobe-be.onrender.com/api/stay/room`,
      params: params,
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getAmenities() {
  try {
    const response = await axios.get(
      "https://golobe-be.onrender.com/api/stay/amenity"
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function registerAccount(reqBody) {
  try {
    const response = await axios.post(
      `https://golobe-be.onrender.com/api/user/register`,
      reqBody
    );
    return response;
  } catch (err) {
    console.error(err);
  }
}
