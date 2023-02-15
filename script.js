function validatePassword() {
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("password-conf").value;
const confirmPasswordField = document.getElementById("password-conf");

if (password !== confirmPassword) {
    confirmPasswordField.setCustomValidity("Passwords do not match");
    confirmPasswordField.validity.valid = False;
    return false;
} else {
    confirmPasswordField.setCustomValidity("");
    confirmPasswordField.validity.valid = True;
}

return true;
}

const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("password-conf");

passwordField.addEventListener("input", validatePassword);
confirmPasswordField.addEventListener("input", validatePassword);