document.addEventListener('DOMContentLoaded', function () {

//Personalize form

    //Form elements that start out hidden
    const jobElements = document.querySelector('.jobElements')
    const codeElements = document.querySelector('.codeElements')

    //When the client changes the selection of contactReason select element
    const reasonSelect = document.querySelector('#contactReason')
    reasonSelect.addEventListener('change', (e) => {

        //hide the inappropriate form elements, and
        jobElements.classList.add('hidden')
        codeElements.classList.add('hidden')

        //un-hide the appropriate form elements.
        const divClassSelector = `.${reasonSelect.value}Elements`
        const formElements = document.querySelector(divClassSelector)
        formElements.classList.remove(`hidden`)
    })

//Validate form

    //Elements that need validation
    const nameElem = document.querySelector('#name')
    const emailElem = document.querySelector('#email')
    const messageElem = document.querySelector('#message')
    
    //Form validation
    // BUG - If there's more than one invalid element, only one shows error message.
    function checkValidation(e){
        let formIsValid = true //Form is valid unless one (or more) of the validations fail
        console.log(`Validating {name: ${nameElem.value}, email: ${emailElem.value}, message: ${messageElem.value}}`)
        console.log(`Results are in:`)
        
        //Name should be at least three characters long
        if (nameElem.value.length < 3) { 
            nameElem.validity.valid = false
            nameElem.setCustomValidity(`Where's the rest of your name?`)
            formIsValid = false
        } else {
            nameElem.validity.valid = true
            nameElem.classList.remove('invalid')
        }
        console.log(`name: ${nameElem.validity.valid ? `Valid` : `Invalid`}`)

        //Email should be in email format:  /\w+@\w+\.\w+/ 
        if (/\w+@\w+\.\w+/.test(emailElem.value)) {
            emailElem.classList.remove('invalid')
            emailElem.validity.valid = true
        } else {
            emailElem.validity.valid = false
            emailElem.classList.add('invalid')
            emailElem.setCustomValidity(`That's not a valid email, silly!`)
            formIsValid = false
        }
        console.log(`eMail: ${emailElem.validity.valid ? `Valid` : `Invalid`}`)
    
        //Message should be at least ten characters long.
        if (messageElem.value.length < 10) { 
            messageElem.validity.valid = false
            messageElem.classList.add('invalid')
            messageElem.setCustomValidity(`Don't be shy! Write at least 10 characters!`)
            formIsValid = false
        } else {
            messageElem.validity.valid = true
            messageElem.classList.remove('invalid')
        }
        console.log(`message: ${messageElem.validity.valid ? `Valid` : `Invalid`}`)

        return formIsValid
    }

    const formElem = document.querySelector('form')
    formElem.addEventListener('submit', (e) => {
        //Don't submit just yet
        e.preventDefault()
        //If it passes custom validation tests,
        if (checkValidation(e)) {
            //then submit it.
            formElem.submit()
        } else {
            formElem.reportValidity()
        }
    })
    /*
    [Nat Note]:
    Alternatively, I can add a change event listener on the name, email, and message elements.
    This will make for better UX. 
    */
})