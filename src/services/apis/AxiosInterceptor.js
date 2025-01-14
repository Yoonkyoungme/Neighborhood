import axios from "axios";

const AxiosInterceptor = axios.create({
  baseURL: "http://220.120.192.122:8080",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json,",
  },
  timeout: 15000,
});

// request interceptors
AxiosInterceptor.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("ACCESS_TOKEN");
    config.headers.Authorization = "Bearer " + token;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// response interceptors
AxiosInterceptor.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    const status = error.response.status;

    switch (status) {
      // authentication (token related issues)
      case 401: {
        return Promise.reject(error.message);
      }

      // forbidden (permission related issues)
      case 403: {
        return Promise.reject(error.message);
      }

      // bad request
      case 400: {
        return Promise.reject(error.message);
      }

      // not found
      case 404: {
        return Promise.reject(error.message);
      }

      // conflict
      case 409: {
        return Promise.reject(error.message);
      }

      // unprocessable
      case 422: {
        return Promise.reject(error.message);
      }

      // generic  error (server related) unexpected
      default: {
        return Promise.reject(error.message);
      }
    }
  }
);

export default AxiosInterceptor;
