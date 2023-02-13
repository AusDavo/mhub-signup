function validatePassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("password-conf").value;
    
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
    
    return true;
  }
  