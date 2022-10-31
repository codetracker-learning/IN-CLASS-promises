const jokeEndpoint = 'https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart';
const postEndpoint = 'https://teaching-promises-default-rtdb.firebaseio.com';

const getRequest = () => new Promise((resolve, reject) => {
  fetch(jokeEndpoint)
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const postRequest = (payload) => new Promise((resolve, reject) => {
  fetch(`${postEndpoint}/posts.json`, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const patchRequest = (payload) => new Promise((resolve, reject) => {
  fetch(`${postEndpoint}/posts/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteRequest = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${postEndpoint}/posts/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getRequest, postRequest, patchRequest, deleteRequest
};
