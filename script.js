// script.js

// Function to handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form inputs
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Send login request to server
  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: username, password: password })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Invalid username or password.');
    }
    return response.json();
  })
  .then(data => {
    // Login successful, save token to localStorage
    localStorage.setItem('token', data.token);
    window.location.href = '/dashboard.html'; // Redirect to dashboard page
  })
  .catch(error => {
    alert(error.message); // Display error message
  });
});
