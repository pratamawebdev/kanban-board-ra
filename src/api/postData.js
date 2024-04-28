import axios from "axios";

const postData = async (path, data) => {
  try {
    const token = localStorage.getItem("token");
    const url = import.meta.env.VITE_URL_API + path;
    await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch ({ response }) {
    console.log(response);
  }
};

export default postData;
