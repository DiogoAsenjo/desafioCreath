function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

//Função para validar os campos e poder clicar no botão entrar.

function validandoCampos() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (validateEmail(email) && senha) {
        document.getElementById("botao-entrar").disabled = false;
    } else {
        document.getElementById("botao-entrar").disabled = true;
    }
}

validandoCampos ();

// Supostamente era para aparecer e desaparecer as mensagens de erro de "e-mail inválido", não sei por qual motivo não funciona.

// function mostrarErroEmail() {
//     const email = document.getElementById("email").value;
//     if (validateEmail(email)) {
//         document.getElementById("email-invalid").style.display = "none";
//     } else {
//         document.getElementById("email-invalid").style.display = "block";
//     }
// }