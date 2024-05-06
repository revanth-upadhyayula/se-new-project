const emailInput = document.querySelector('input[type="email"]');
const validIcon = document.querySelector('.valid-icon');
const continueButton = document.querySelector('.continue-button');

emailInput.addEventListener('input', () => {
  const email = emailInput.value.trim();
  if (isValidEmail(email)) {
    validIcon.style.display = 'inline';
  } else {
    validIcon.style.display = 'none';
  }
});

continueButton.addEventListener('click', (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();

  if (email === '') {
    alert('Please enter your email address');
  } else if (!isValidEmail(email)) {
    alert('Please enter a valid email address');
  } else {
    console.log('Email:', email);
    // Add your form submission logic here
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Here you can add your authentication logic
    // For demonstration purposes, let's assume the login is successful
    // Redirect to the next page after successful login
    window.location.href = 'main\main.html'; // Replace 'next-page.html' with the URL of your next page
});
