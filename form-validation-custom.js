// TODO
document.addEventListener('DOMContentLoaded', function() {
    const firstName = document.getElementById("first-name")
    const lastName = document.getElementById("last-name")
    const email = document.getElementById("email")
    const form = document.querySelector('form')
  
    function checkValidation(){
      if (firstName.value.length < 3) { // first name invalid
      firstName.validity.valid = false
      firstName.classList.remove('')
      firstName.setCustomValidity('Your name is too short.')
      firstName.reportValidity()
    } else {
      firstName.validity.valid = true
    }
  }
  
    form.addEventListener('submit', () => {})
  
  })