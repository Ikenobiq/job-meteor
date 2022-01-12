import axios from "axios";

axios.defaults.baseURL = "http://135.181.30.244:27007/api/";
export const fetchAllSummaries = (page) => {
    console.log("Hello")
    return axios.get("summaries/", {params: {page}}).then((response) => {
        return response.data;
    });
};

export const fetchFilteredSummaries = (page, photo) => {
    return axios.get("summaries/", {params: {page, photo}}).then((response) => {
        return response.data;
    })
};