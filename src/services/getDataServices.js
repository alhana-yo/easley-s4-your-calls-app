const ENDPOINT = 'https://adalab.interacso.com/call';

const getData = () => fetch(ENDPOINT, {
              method: "POST",
              body: JSON.stringify(),
              cache: "no-cache",
              headers: {
                  "content-type": "application/json"
              }
            })
              .then(response=> response.json());
              
export { getData };