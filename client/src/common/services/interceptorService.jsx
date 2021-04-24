import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.request.use((req) => {
  const reqClone = { ...req };
  if (!req.headers["Content-Type"]) {
    reqClone.headers = {
      ...reqClone.headers,
      "Content-Type": "application/json",
    };
  }
  debugger;
  return reqClone;
});

axios.interceptors.response.use(null, (error) => {
  console.log("interceptors...");
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500;

  if (expectedErrors) {
    toast.error(error.response.data);
  } else {
    toast.error(error.message);
  }

  return Promise.reject(error);
});

// eslint-disable-next-line import/no-anonymous-default-export
const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
};

export default http;
