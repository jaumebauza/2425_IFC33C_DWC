document.addEventListener('DOMContentLoaded', ()=>{
    let boto = document.getElementById("boto")
    boto.addEventListener('click', ()=>{
        alert('El texto del botón cambiará')
        this.boto.innerText = '¡Texto cambiado!'
    })

    
})