import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";
const token = JSON.parse(localStorage.getItem("auth"))?.token;

class ApiConfig {
  constructor() {
    this.post = async (endpoint, data) => {
      try {
        const res = await axios.post(
          endpoint,
          {
            ...data,
          },
          {
            headers: {
              Authorization: token? `Bearer ` + token: "",
            },
          }
        );
        return res;
      } catch (error) {
        console.log(error)
      }
    };
    this.get = async(endpoint, data) => {
      try {
        const res = await axios.get(endpoint, {params}, {
          headers: {

          }
        });
        return res;
      } catch (error) {}
    };
  }
}

export const api = new ApiConfig();
