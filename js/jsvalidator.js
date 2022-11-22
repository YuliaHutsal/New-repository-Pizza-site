var form = document.forms[0];
form.firstName.addEventListener('change', function(){
    validateElement(form.firstName, '#firstnameError');
});

form.lastName.addEventListener('change', function(){
    validateElement(form.lastName, '#lastnameError');
});

form.addEventListener('submit', function(e){
    validateElement(form.firstName, '#firstnameError');
    validateElement(form.lastName, '#lastnameError');
    
    let invalidElements = document.querySelectorAll('.invalid');
    if(invalidElements.length > 0){
        e.preventDefault();
    }
});

function validateElement(element, errorElementSelector){
    let errorElement = document.querySelector(
        errorElementSelector);
    element.classList.remove('valid');
    element.classList.remove('invalid');
    errorElement.style.display = "none";

    if((element.value.length > 0) && (!element.validity.patternMismatch)){
        element.classList.add('valid');
    }
    else{
        element.classList.add('invalid');
        errorElement.style.display = "inline";
    }
}
