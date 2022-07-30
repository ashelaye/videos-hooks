import axios from "axios";

const KEY = "AIzaSyBlnXcoewS2Z9O7ANtgnvPCskXXjoH9UdY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
