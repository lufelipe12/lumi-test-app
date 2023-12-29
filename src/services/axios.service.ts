import axios from "axios";

const url = "https://lumi-test-api-production.up.railway.app/v1/";

const lumiApi = axios.create({
  baseURL: url,
});

export default lumiApi;
