const ENDPOINT = 'https://adalab.interacso.com/api/call';

const getList = () => fetch(ENDPOINT, {
  method: "GET",
  cache: "no-cache",
  headers: {
    "content-type": "application/json"
  }
})
.then(response => response.json());

export { getList };
