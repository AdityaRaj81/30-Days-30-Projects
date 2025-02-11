let eyeIcon = document.getElementById("eyeicon");
let password = document.getElementById("password");

// Set the password field to type "password" by default
password.type = "password";
eyeIcon.src = "./images/eye-close.png"; // Set the initial eye icon as closed

eyeIcon.onclick = function () {
  if (password.type === "password") {
    password.type = "text";
    eyeIcon.src = "./images/eye-open.png";
  } else {
    password.type = "password";
    eyeIcon.src = "./images/eye-close.png";
  }
};
