const API_KEY = "6543df3801b5e279de211518";

const getFetchCollection = async () => {
  const url = new URL(`https://${API_KEY}.mockapi.io/api/adverts`);
  url.searchParams.append("page", 1);
  url.searchParams.append("limit", 12);

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
