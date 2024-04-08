/*
  HTML for the project.
  Template
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">FULLNAME HERE</h5>
    </div>
  <small>EMAIL HERE<</small>
  </div>
*/
import { getContacts } from './api/contacts'

async function appInit() {
  getContacts("https://661367bf53b0d5d80f67559a.mockapi.io/api/v1/contacts");
  document.querySelector("#contacts").innerHTML = "";
  renderContacts(getContacts, document.querySelector("#contacts"));

};
appInit();

function renderContacts(data, container) {
  data.forEach(getContacts => {
    const template = `
      <div class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${getContacts.name}</h5>
      </div>
    <small>${getContacts.email}<</small>
    </div>
    `
    container.insertAdjacentHTML("beforeend", template)
  });
};
