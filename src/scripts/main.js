'use strict';

document.querySelectorAll('.field-text').forEach((id) => {
  const idName = id.id;
  const textTemp = idName.split('-').slice(2).join(' ');
  const textLabel = textTemp.charAt(0).toUpperCase() + textTemp.slice(1);
  const input = document.getElementById(idName);

  if (input) {
    input.setAttribute('placeholder', textLabel);

    const field = input.parentElement;
    const newLabel = document.createElement('label');

    newLabel.setAttribute('for', idName);
    newLabel.className = 'field-label';
    newLabel.textContent = textLabel;
    field.prepend(newLabel);
  }
});
