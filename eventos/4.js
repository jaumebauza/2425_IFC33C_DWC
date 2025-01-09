document.addEventListener('DOMContentLoaded', () => {
    let contador = 0;

    document.getElementById('incrementar').addEventListener('click', () => {
        contador++;
        document.getElementById('contador').innerText = contador;
    });

    document.getElementById('reiniciar').addEventListener('click', () => {
        contador = 0;
        document.getElementById('contador').innerText = contador;
    });
});
