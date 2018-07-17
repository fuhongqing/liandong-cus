import axios from "axios";

const Axios = axios.create({
  baseURL: "",
  timeout: 8000,
  responseType: "json",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
});

export default {
  install: function (Vue, Option) {
    Object.defineProperty(Vue.prototype, "$axios", {value: Axios});
  }
};
