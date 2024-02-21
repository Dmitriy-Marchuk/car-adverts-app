import { axios } from "services/axiosClient";

export const getFetchCollection = ({ page, perPage }) => {
  return axios.get("/", {
    params: { page, limit: perPage },
  });
};

export default getFetchCollection;
