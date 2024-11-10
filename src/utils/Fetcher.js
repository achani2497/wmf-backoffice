import axios from "axios";

export async function getFetch(url, params) {
  try {
    return await axios.get(url, { params }).then((res) => res.data);
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
    throw error;
  }
}
