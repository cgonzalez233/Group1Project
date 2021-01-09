  $("#login").on("click", async function(event){
    console.log("click")
    event.preventDefault();
  
    // Collect values from the login form
    const username = $('#login-name').value.trim();
    const password = $('#login-pass').value.trim();

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

    $("#signup").on("click", async function(event){
      console.log("click")

      event.preventDefault();
  
      const user_name = document.querySelector('#signup-name').value.trim();
      const password = document.querySelector('#signup-pass').value.trim();
      const passwordConfirm = document.querySelector('#signup-pass2').value.trim();

      if (user_name && password && passwordConfirm) {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ user_name, password}),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert(response.statusText);
        }
      }
      })