const API_KEY = "6543df3801b5e279de211518";

const getFetchCollection = async () => {
  return await fetch(`
  https://${API_KEY}.mockapi.io/api/adverts
    `)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      throw new Error(error);
    });
};

export default getFetchCollection;
