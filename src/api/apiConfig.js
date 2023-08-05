import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/";
const token = localStorage.getItem("token");

class ApiConfig {
  constructor() {
    this.post = async (endpoint, data) => {
      console.log(data)
      try {
        const res = await axios.post(
          endpoint,
          {
            ...data,
          },
          {
            headers: {
              Authorization: `Bearer ` + token,
            },
          }
        );
        return res;
      } catch (error) {
        console.log(error)
      }
      // axios
      //   .post(
      //     endpoint,
      //     {
      //       ...data,
      //     },
      //     {
      //       headers: {
      //         Authorization: `Bearer ` + token,
      //       },
      //     }
      //   )
      //   .then((res) => {
      //     return res;
      //   })
      //   .catch((err) => console.log(err));
    };
    this.get = async(endpoint, data) => {
      try {
        const res = await axios.get(endpoint);
        return res;
      } catch (error) {}
      // axios
      //   .get(
      //     endpoint,
      //     {
      //       params: {},
      //     },
      //     {
      //       headers: {
      //         Authorization: `Bearer ` + token,
      //       },
      //     }
      //   )
      //   .then((res) => {
      //     return res;
      //   })
      //   .catch((err) => console.log(err));
    };
  }
}

export const api = new ApiConfig();
