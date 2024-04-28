import axios from "axios";

const getData = (path) => {
  try {
    const token = localStorage.getItem("token");
    const url = import.meta.env.VITE_URL_API + path;
    return axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch ({ error }) {
    console.log(error);
  }
};

export default getData;
