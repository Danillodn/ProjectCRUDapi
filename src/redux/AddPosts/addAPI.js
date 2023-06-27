import axios from "axios";

export const fetchAddPosts = (data) => {
    return axios.post("https://dark-sunbonnet-mite.cyclic.app/create_post", data);
};