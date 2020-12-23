export const UseFetch = (url) => {
  const state = null;
  fetch(url)
    .then((data) => data.json())
    .then((res) => {
      state = {
        data: res,
        fetching: false,
      };
    })
    .catch((err) => console.log(err));
  return state;
};
