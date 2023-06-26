import axios from "axios";

export const fetchShowPosts = (id) => {
    return axios.get(`https://dark-sunbonnet-mite.cyclic.app/show_post/${id}`);
};