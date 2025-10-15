'use strict';
const form = document.querySelector('form');


function validateField(field) {
  const errorEl = field.type === 'radio'
  ? field.closest('fieldset').querySelector('.error-message')
  :field.parentElement.querySelector('.error-message');

  if(!field.validity.valid) {
    errorEl.textContent = field.dataset.error || 'This field is required';
    return false;
  }
  errorEl.textContent = '';
  return true;
}

form.querySelectorAll('input, textarea').forEach((input) => {
  input.addEventListener('blur', () => {
    validateField(input);
  });
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let isValid = true;
  const fields = form.querySelectorAll('input, textarea');
  fields.forEach((field)=> {
    console.log(`Checking ${field.name}`);
    const fieldValid = validateField(field);

    if (!fieldValid) {
      isValid = false;
    }
  });
  
  if (isValid) {
    // todo send form data
    form.reset();
  } else {
    form.querySelector(':invalid').focus();
  }
});