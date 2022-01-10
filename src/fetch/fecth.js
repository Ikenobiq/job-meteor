import axios from "axios";

axios.defaults.baseURL = "http://135.181.30.244:27007/api/";
export const fetchSummaries = () => {
  return axios.get("summaries/").then((response) => {
    console.log(response);
    return response.data.results;
  });
};
