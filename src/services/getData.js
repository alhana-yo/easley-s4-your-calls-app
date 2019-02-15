const ENDPOINT = 'https://adalab.interacso.com/call';

const getData = (info) => fetch(ENDPOINT, {

              method: "POST",
              body: JSON.stringify(info),
              cache: "no-cache",
              headers: {
                  "content-type": "application/json"
              }
            })
            .then(response => response.json());

export { getData };