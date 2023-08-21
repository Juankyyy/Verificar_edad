const formulario = document.querySelector("#form")

formulario.addEventListener("submit", validarForm)

function validarForm (e) {
    e.preventDefault();
    const nombre = document.querySelector("#name").value
    const edad = document.querySelector("#age").value

    const validacion = document.querySelector("#validacion");
    validacion.textContent = `Hola ${nombre}, tienes ${edad} años y ${verificarEdad()}.`
}

function verificarEdad () {
    const edad = document.querySelector("#age").value;

    if (edad > 0 && edad < 17) {
        return "eres menor de edad";

    } else if (edad >= 18 && edad < 60) {
        return "eres mayor de edad";

    } else if (edad >= 60 && edad <= 115) {
        return "eres adulto mayor";
    }

    else {
        return "tienes una edad incorrecta"
    }
}