import axios from "axios";

export const fetchEditPosts = (data, id) => {
  return axios.put(`https://dark-sunbonnet-mite.cyclic.app/update_post/${id}`, data);
};

export const fetchShowPosts1 = (id, reset) => {
    return axios.get(`https://dark-sunbonnet-mite.cyclic.app/show_post/${id}`)
    .then((response) => {
      reset(response.data.post)
    });
  };