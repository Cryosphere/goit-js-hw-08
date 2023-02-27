import { throttle } from "lodash";

const form = document.querySelector('.feedback-form');
let formElem = new Object;
const LOCALSTORAGE_KEY = 'feedback-form-state';



const formInputSaver = evt => {
    formElem.email = form.elements.email.value;
    formElem.message = form.elements.message.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formElem));

    console.log(localStorage.getItem(LOCALSTORAGE_KEY));
    
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

form.addEventListener('input', throttle(formInputSaver, 500));

const stateObject = load(LOCALSTORAGE_KEY);
if (stateObject) {
        form.elements.email.value = stateObject.email;
        form.elements.message.value = stateObject.message;
    }
