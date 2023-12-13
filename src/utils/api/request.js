import axios from "axios";
let baseURL;

if (process.env.NODE_ENV === "production") {
  baseURL = "http://localhost:8000";
} else {
  baseURL = "https://tame-pink-pronghorn-cape.cyclic.app";
}

export const request = axios.create({
  baseURL,
});
