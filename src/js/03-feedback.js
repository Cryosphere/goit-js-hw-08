import { throttle } from "lodash";

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const email = form.elements.email;
const message = form.elements.message;

const formInputSave = evt => {
    const objToSave = { email: email.value, message:message.value};
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objToSave));
};

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log({ email: email.value, message: message.value });
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
});

const load = key => {
  try {
    const formState = localStorage.getItem(key);
    return formState === null ? undefined : JSON.parse(formState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

form.addEventListener('input', throttle(formInputSave, 500));

const stateObject = load(LOCALSTORAGE_KEY);
if (stateObject) {
        email.value = stateObject.email;
        message.value = stateObject.message;
}
