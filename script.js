'use strict';
const form = document.querySelector('form');


function validateField(field) {
  const errorEl = field.parentElement.querySelector('.error-message');
  if(!field.validity.valid) {
    console.log('field is invalid:', field);
    errorEl.textContent = 'This field is required';
    return false;
  }
  
  return true;
}

form.addEventListener('submit', function(e){
  e.preventDefault();
  let isValid = true;
  const fields = form.querySelectorAll('input, textarea');
  fields.forEach(field => {
    console.log(`Checking ${field.name}`);
    const fieldValid = validateField(field);

    if (!fieldValid) {
      isValid = false;
    }
  });
  if (isValid) {
    console.log('submitting');
  } else {
    console.log('error');
  }
});