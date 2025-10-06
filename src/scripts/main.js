'use strict';

const placeholders = {
  'sign-up-name': 'First name',
  'sign-up-last-name': 'Last name',
  'sign-up-email': 'Email',
  'sign-up-password': 'Password',
  'sign-in-email': 'Email',
  'sign-in-password': 'Password',
};

Object.keys(placeholders).forEach((id) => {
  const input = document.getElementById(id);

  if (input) {
    input.setAttribute('placeholder', placeholders[id]);

    const field = input.parentElement;
    const newLabel = document.createElement('label');

    newLabel.setAttribute('for', placeholders[id]);
    newLabel.className = 'field-label';
    newLabel.textContent = placeholders[id];
    field.prepend(newLabel);
  }
});
