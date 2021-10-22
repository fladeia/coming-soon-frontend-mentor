const inputEmail = document.querySelector(".input-email");
const errorIcon = document.querySelector(".error-icon");

function parseEmail() {
  if (!inputEmail.validity.valid || inputEmail.value === "") {
    inputEmail.classList.add('input-email-error')
    inputEmail.value = "Please provide a valid email";
    errorIcon.style.display = "block";
    return false;
  }
}

inputEmail.addEventListener('focus', () => {
  inputEmail.classList.remove('input-email-error')
  inputEmail.value = "";
  errorIcon.style.display = "none";
})
