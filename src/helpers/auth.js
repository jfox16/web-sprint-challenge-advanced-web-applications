import axios from "axios";

//Task List:
//Build and export a function used to send in our authorization token

export function axiosWithAuth() {
  const token = localStorage.getItem('token');
  return axios.create({
    headers: { Authorization: token }
  });
};
