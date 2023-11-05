const API_KEY = "6543df3801b5e279de211518";

const getFetchCollection = async (page, perPage) => {
  const url = new URL(`https://${API_KEY}.mockapi.io/api/adverts`);
  url.searchParams.append("page", page);
  url.searchParams.append("limit", perPage);

  return await fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      throw new Error(error);
    });
};

export default getFetchCollection;
