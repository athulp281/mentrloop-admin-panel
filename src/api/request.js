import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const request = (options) => {
  //Request header options
  let headers = {
    "Content-Type": "application/json",
  };

  //Assigning authorization token to the header object
  if (localStorage.getItem("user")) {
    let token = JSON.parse(localStorage.getItem("user")).token;
    Object.assign(headers, { Authorization: "Bearer " + token });
  }

  //Assigning header to options
  Object.assign(options, { headers });

  //Actual axios request
  return axios(options)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("error in request", err.response);
      return err.response.data;
    });
};

export default request;
