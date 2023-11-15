// Creamos una función para generar un número aleatorio entre 1 y 6
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
}

// Creamos una función para dibujar los dados
function dibujarDados() {
    // Obtenemos los dados
    const dado1 = document.getElementById('dado1');
    const dado2 = document.getElementById('dado2');

    // Generamos un número aleatorio para cada dado
    const numeroAleatorio1 = generarNumeroAleatorio();
    const numeroAleatorio2 = generarNumeroAleatorio();

    // Cargamos la imagen del dado
    dado1.style.backgroundImage = `url(img/dado-${numeroAleatorio1}.png)`;
    dado2.style.backgroundImage = `url(img/dado-${numeroAleatorio2}.png)`;
}

// Llamamos a la función para dibujar los dados
dibujarDados();

// Escuchamos el evento click en el botón
document.getElementById('lanzar').addEventListener('click', () => {
    // Lanzamos los dados
    dibujarDados();
});
