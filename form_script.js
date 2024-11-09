function validateForm(){
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const weight = document.getElementById("weight").value;
    const birthDate = document.getElementById("birthDate").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("errorMessage");

    let errors = [];

    if(!Number.isInteger(Number(age))){
        errors.push("Вік повинен бути цілим числом");
    }

    if(isNaN(weight) || weight <= 0){
        errors.push("Вага повинна бути цілим числом");
    }

    const datePattern = /^\d{2}\.\d{2}\.\d{4}$/;
    if(!datePattern.test(birthDate)){
        errors.push("Дата повинна бути у форматі DD.MM.YYYY");
    }

    if (password !== confirmPassword) {
        errors.push("Паролі не співпадають");
    }

    if(errors.length > 0){
        errorMessage.innerHTML = errors.join("<br>");
        return false;
    }

    errorMessage.innerHTML = "";
    return true;
    
}