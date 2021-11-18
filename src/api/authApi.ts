import axios from "axios";



export const userAPI = {
  login() {
    return axios.get(`http://localhost:3001/account/1`)
      .then(response => {
        return response.data;
      });
  },
}