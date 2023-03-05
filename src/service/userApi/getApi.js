const getApi = () => {
  fetch("https://63ea2e1e3363c870036378f1.mockapi.io/api/users")
    .then((data) => data.json())
    .then((data) => console.log(data));
};
export default getApi;
