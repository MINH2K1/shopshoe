export const useFetchData = (href,handelData) => {
  fetch(href)
    .then((data) => data.json())
    // eslint-disable-next-line no-undef
    .then((data) => handelData(data));
};

