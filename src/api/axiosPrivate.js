import axios from "axios";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";

const axiosPrivate = axios.create();

// Add a request interceptor
axiosPrivate.interceptors.request.use(
  function (config) {
    if(!config.headers.authorization) {
      config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`
    }
    return config;
  },
  function (error) {
    // Do something with request error
    
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosPrivate.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if(error.response.status === 403) {
      localStorage.removeItem('accessToken');
      signOut(auth);
    }
    return Promise.reject(error);
  }
);

export default axiosPrivate;