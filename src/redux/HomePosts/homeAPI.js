import axios from "axios";

export const fetchListPosts = () => {
    return axios.get("https://dull-dog-gloves.cyclic.app/list_posts");
};

export const fetchDeletePosts = (id) => {
    return axios.delete(`https://dull-dog-gloves.cyclic.app/delete_post/${id}`);
};