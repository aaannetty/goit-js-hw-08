import throttle from 'lodash.throttle';
import simpleLightbox from 'simplelightbox';
import localStorageApi from './localstorage';

const formEl = document.querySelector('form');

formEl.addEventListener('input', throttle(saveFormValues, 500));
formEl.addEventListener('submit', onSubmit);

let userData = {};
const LOCAL_KEY = 'feedback-form-state';

function saveFormValues(evt) {
  const target = evt.target;

  const formElValue = target.value;
  const formElName = target.name;
  userData[formElName] = formElValue;
  localStorageApi.save(LOCAL_KEY, userData);
}

function onSubmit(evt) {
  evt.preventDefault();

  const {
    elements: { email, message },
  } = evt.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('Fill all fields!');
  }

  console.log(userData);

  localStorageApi.remove(LOCAL_KEY);
  formEl.reset();

  userData = {};
}

function loadFormValues() {
  const userDataFromLS = localStorageApi.load(LOCAL_KEY);

  if (!userDataFromLS) {
    return;
  }
  const formElements = formEl.elements;

  for (const key in userDataFromLS) {
    if (userDataFromLS.hasOwnProperty(key)) {
      formElements[key].value = userDataFromLS[key];

      if (userDataFromLS[key]) {
        userData[key] = userDataFromLS[key];
      }
    }
  }
}

loadFormValues();
