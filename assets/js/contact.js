// ============================================
// CONTACT JS - Food Truck Template
// Form validation and submission
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
      showSuccess();
      form.reset();
    }
  });

  // Real-time validation on blur
  form.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('error')) validateField(input);
    });
  });
});

function validateForm() {
  const inputs = document.querySelectorAll('#contact-form .form-input[required]');
  let isValid = true;
  inputs.forEach(input => {
    if (!validateField(input)) isValid = false;
  });
  return isValid;
}

function validateField(input) {
  const value = input.value.trim();
  let valid = true;

  if (!value) {
    valid = false;
    setError(input, 'Este campo es obligatorio');
  } else if (input.type === 'email' && !isValidEmail(value)) {
    valid = false;
    setError(input, 'Ingresa un email válido');
  } else if (input.type === 'tel' && !isValidPhone(value)) {
    valid = false;
    setError(input, 'Ingresa un teléfono válido (mínimo 7 dígitos)');
  } else if (input.name === 'name' && value.length < 2) {
    valid = false;
    setError(input, 'Ingresa al menos 2 caracteres');
  } else {
    clearError(input);
  }

  return valid;
}

function setError(input, msg) {
  input.classList.add('error');
  const errorMsg = input.parentElement.querySelector('.error-message');
  if (errorMsg) errorMsg.textContent = msg;
}

function clearError(input) {
  input.classList.remove('error');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 7;
}

function showSuccess() {
  const successMsg = document.getElementById('success-message');
  if (successMsg) {
    successMsg.classList.add('show');
    successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => successMsg.classList.remove('show'), 5000);
  }
}
