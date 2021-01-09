const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = $('#login-name').value.trim();
    const password = $('#login-pass').value.trim();

$("#login").on("click", function(){
    console.log("click")
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
    });
  };

  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#signup-name').value.trim();
    const password = document.querySelector('#signup-pass').value.trim();
    const passwordConfirm = document.querySelector('#signup-pass2').value.trim();

  $("#signup").on("click", function(){
    console.log("click")
    if (username && password && passwordConfirm) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password, passwordConfirm }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
    })
  };