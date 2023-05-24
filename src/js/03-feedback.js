import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const saveFormValues = throttle(() => {
  localStorage.setItem('email', emailInput.value);
  localStorage.setItem('message', messageInput.value);
}, 500);

function loadFormValues() {
  const savedEmail = localStorage.getItem('email');
  const savedMessage = localStorage.getItem('message');

  if (savedEmail) {
    emailInput.value = savedEmail;
  }

  if (savedMessage) {
    messageInput.value = savedMessage;
  }
}

emailInput.addEventListener('input', saveFormValues);
messageInput.addEventListener('input', saveFormValues);

loadFormValues();

console.log({
  email: emailInput.value,
  message: messageInput.value,
});

feedbackForm.reset();
