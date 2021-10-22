const inputEmail = document.querySelector(".input-email");
const btnEmail = document.querySelector('.btn-email')
const btnIcon = document.querySelector('.btn-icon')

btnEmail.addEventListener('click', (e) => {
  e.preventDefault()
  if (!inputEmail.validity.valid || inputEmail.value === "") {
    inputEmail.classList.add('input-email-error')
    inputEmail.placeholder = "Please provide a valid email";
    btnIcon.src = './images/icon-error.svg'
    return
  } else {
    inputEmail.value = "Success!";
    inputEmail.classList.add('input-email-success')
  }
})

inputEmail.addEventListener('click', () => {
  inputEmail.classList.remove('input-email-error')
  inputEmail.classList.remove('input-email-success')
  inputEmail.placeholder = "Email Address";
  inputEmail.value = "";
  btnIcon.src = './images/icon-arrow.svg'
})
