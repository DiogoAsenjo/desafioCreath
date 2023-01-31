function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function validandoCampos() {
    const email = document.getElementById("email").value;

    if (validateEmail(email)) {
        document.getElementById("botao-registar").disabled = false;
    } else {
        document.getElementById("botao-registrar").disabled = true;
    }
}

validandoCampos ();