document.addEventListener('DOMContentLoaded', function () {

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
})