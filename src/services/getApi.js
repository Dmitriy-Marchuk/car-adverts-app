import axios from "axios";

const API_KEY = "6543df3801b5e279de211518";
const url = `https://${API_KEY}.mockapi.io/api/adverts`;

const getFetchCollection = async (page, perPage) => {
  try {
    const response = await axios.get(url, {
      params: {
        page: page,
        limit: perPage,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default getFetchCollection;
