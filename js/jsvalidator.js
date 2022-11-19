var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
var name = document.getElementById('nameInput').value;
if(!regName.test(name)){
    alert('Invalid name given.');
}else{
    alert('Valid name given.');
}

function validate(){
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = document.getElementById('name').value;
    if(!regName.test(name)){
        alert('Please enter your full name (first & last name).');
        document.getElementById('name').focus();
        return false;
    }else{
        alert('Valid name given.');
        return true;
    }
}