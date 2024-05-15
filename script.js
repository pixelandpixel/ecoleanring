// script.js

// Function to handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form inputs
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;


  
// Function to logout the admin user
function logout() {
  localStorage.removeItem('token'); // Clear token from localStorage
  window.location.href = '/admin.html'; // Redirect to login page
}

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
