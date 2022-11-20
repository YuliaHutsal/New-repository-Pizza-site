const form = document.forms[0];
form.addEventListener("submit", function(e)
{
    if((form.firstName.value.lenght == 0) || (form.lastName.value.lenght == 0)){
        e.preventDefault();
    }
});