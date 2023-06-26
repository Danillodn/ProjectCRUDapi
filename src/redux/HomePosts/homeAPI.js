import axios from "axios";

export const fetchListPosts = () => {
    return axios.get("https://dark-sunbonnet-mite.cyclic.app/list_posts");
};

export const fetchDeletePosts = (id) => {
    return axios.delete(`https://dark-sunbonnet-mite.cyclic.app/delete_post/${id}`);
};
