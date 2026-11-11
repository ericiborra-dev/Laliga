// Muestro un mensaje al pulsar el botón.
const boton = document.getElementById("messageButton");

if (boton) {
    boton.addEventListener("click", function () {
        document.getElementById("message").textContent =
            "¡Gracias por visitar mi página!";
    });
}
