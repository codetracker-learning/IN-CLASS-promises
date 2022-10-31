// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from './utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import {
  getRequest, postRequest, patchRequest, deleteRequest
} from '../api/promises';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <h1>TESTING PROMISES</h1>
    <h2>Open your dev tools</h2><br />
    <button class="btn btn-warning" id="get-joke">GET JOKE</button>
    <button class="btn btn-info" id="post-name">POST YOUR NAME</button>
    <button class="btn btn-success" id="patch-name">PATCH YOUR NAME</button>
    <button class="btn btn-danger" id="delete-name">DELETE YOUR NAME</button>
  `;

  document.querySelector('#get-joke').addEventListener('click', () => {
    getRequest().then(console.warn);
  });
  document.querySelector('#post-name').addEventListener('click', () => {
    // update this object with your name
    const payload = { name: 'Dr. T' };
    postRequest(payload).then(console.warn);
  });
  document.querySelector('#patch-name').addEventListener('click', () => {
    // update this object with your name and firebaseKey
    const payload = { name: 'Dr. Teresa', firebaseKey: '-NFjvhLY0Yj_UVPctmP2' };
    patchRequest(payload).then(console.warn);
  });
  document.querySelector('#delete-name').addEventListener('click', () => {
    const firebaseKey = '-NFjvhLY0Yj_UVPctmP2';
    deleteRequest(firebaseKey).then(console.warn);
  });
};

init();
