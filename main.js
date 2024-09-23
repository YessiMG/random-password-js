let count = document.getElementById('cantidad');
let buttonAction = document.getElementById('generar');
let passwordField = document.getElementById('contrasena');

const characterString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generate() {
    let num = parseInt(count.value);

    if (num < 8) {
        cleanPassword();

        setTimeout(() => {
            alert("La cantidad de caracteres tiene que ser mayor que 8");
        }, 0); 
    }
    else {
        let password = '';
    
        for(let i = 0; i < num; i++) {
            let randomCharacter = characterString[Math.floor(Math.random() * characterString.length)];
    
            password += randomCharacter;
        }
    
        passwordField.value = password;

        setTimeout(() => {
            warnPasswordStrength(password);
        }, 0); 
    }
}

function cleanPassword() {
    passwordField.value = '';
}

function warnPasswordStrength(password) {
    let hasUpperCase = /[A-Z]/.test(password);
    let hasLetter = /[a-zA-Z]/.test(password);
    let hasNumber = /[0-9]/.test(password);
    let hasSpecialCharacter = /[!@#$%^&*()]/.test(password);

    if (hasUpperCase && hasLetter && hasNumber && hasSpecialCharacter) {
        alert("La contraseña es fuerte, cumple con tener una letra mayúscula y minúscula, un número y un caractér especial");
    }
    else {
        let warningMessage = `La contraseña es débil, le hace falta tener:\n`;
        warningMessage += !hasUpperCase ? "- una letra mayúscula\n" : '';
        warningMessage += !hasLetter ? "- una letra minúscula\n" : '';
        warningMessage += !hasNumber ? "- un número\n" : '';
        warningMessage += !hasSpecialCharacter ? "- un carácter especial\n" : '';

        alert(warningMessage.trim());
    }
}