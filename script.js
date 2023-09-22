
// Escucha cuando carga la página y ejecuta la función "classImportant" a los 1100ms
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(classImportant, 1100);   
});

// Función que añade clase que contiene transition con !important a los inputs y el btn.
function classImportant () {
    const btn = document.querySelector(".btnInside");
    const form = document.querySelectorAll(".inputForm")

    btn.classList.add("btnInsideNew");
    form[0].classList.add("inputFormNew");
    form[1].classList.add("inputFormNew");
}


// Escucha si el usuario le da click en el btn tipo submit y ejecuta la función "ValidarForm".
const formulario = document.querySelector("#form")
formulario.addEventListener("submit", validarForm)


// Función que valida la edad del usuario y dependiendo retorna un texto u otro.
function verificarEdad () {
    const edad = document.querySelector("#age").value;

    if (edad > 0 && edad <= 17) {
        return "eres menor de edad";

    } else if (edad >= 18 && edad < 60) {
        return "eres mayor de edad";

    } else if (edad >= 60 && edad <= 115) {
        return "eres un adulto mayor";
    }

    else {
        return "tienes una edad incorrecta"
    }
}

// Función que obtiene el nombre y la edad del usuario y crea el texto.
function validarForm (e) {
    e.preventDefault();
    const nombre = document.querySelector("#name").value
    const edad = document.querySelector("#age").value

    const validacion = document.querySelector("#validacion");

    // Verificar que los campos no esten vacíos y posteriormente generar el texto
    if (nombre && edad != "") {
        validacion.textContent = `Hola ${nombre}, tienes ${edad} años y ${verificarEdad()}.`
    } else {
        validacion.textContent = "Por favor introduce los datos correspondientes."
    }

    formulario.reset();
}

// Función para verificar si se está abriendo la página desde un dispositivo móvil
function isMobile () {
    return window.innerWidth <= 526;
}

// Si se está abriendo en un celular muestra una alerta
function handleMobile() {
    if (isMobile()) {
        alert("Disculpe este sitio web no está optimizado para dispositivos móviles :(")
        
        // Eliminar evento que escucha si redimensionan la página para evitar múltiples alertas
        window.removeEventListener("resize", handleMobile);
    }
}

window.addEventListener("resize", handleMobile);
document.addEventListener("DOMContentLoaded", handleMobile);