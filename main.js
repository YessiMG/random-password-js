let count = document.getElementById('cantidad');
let buttonAction = document.getElementById('generar');
let passwordField = document.getElementById('contrasena');

const characterString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generate() {
    let num = parseInt(count.value);

    if (num < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
    }

    let password = '';

    for(let i = 0; i < num; i++) {
        let randomCharacter = characterString[Math.floor(Math.random() * characterString.length)];

        password += randomCharacter;
    }

    passwordField.value = password;
}