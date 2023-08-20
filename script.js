const formulario = document.querySelector("#form")

formulario.addEventListener("submit", validarForm)

function validarForm (e) {
    e.preventDefault();
    const nombre = document.querySelector("#name").value
    const edad = document.querySelector("#age").value

    const validacion = document.querySelector("#validacion");
    validacion.textContent = `Hola ${nombre}! tienes ${edad} años y eres ${verificarEdad()}`
}

function verificarEdad () {
    const edad = document.querySelector("#age").value;

    if (edad >= 18 && edad < 60) {
        return "mayor de edad";
        
    } else if (edad >= 60) {
        return "adulto mayor";
    }

    else {
        return "menor de edad";
    }
}