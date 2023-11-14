const password_container = document.querySelector("#password-container");
const confirmation_container = document.querySelector(
  "#confirmation-container"
);
const password_input = document.querySelector("#password");
const confirmation_input = document.querySelector("#confirm_password");

password_input.addEventListener("input", checkMatchingPasswords);
confirmation_input.addEventListener("input", checkMatchingPasswords);

function checkMatchingPasswords() {
  if (password_input.value !== confirmation_input.value) {
    password_container.classList = "error";
    confirmation_container.classList = "error";
  } else {
    password_container.classList = "";
    confirmation_container.classList = "";
  }
}
