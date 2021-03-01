import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:5001/clone-69d96/us-central1/api', // the Cloud function URL
});

export default instance;
