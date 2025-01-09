document.addEventListener('DOMContentLoaded', () => {
    let elementos = document.querySelectorAll(".mostra");

    elementos.forEach(elemento => {
        elemento.addEventListener('click', () => {
            alert(`Has hecho clic en: ${elemento.innerText}`);
            elemento.innerText = 'Seleccionado';
        });
    });
});
