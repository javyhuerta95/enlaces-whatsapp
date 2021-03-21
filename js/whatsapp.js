document.addEventListener("DOMContentLoaded", function(event) {

    const numTel = document.getElementById('telefono');
    const mensaje = document.getElementById('mensage');
    const impUrl = document.getElementById('url');
    const btnPreview = document.getElementById('preview');
    const btnCopiar = document.getElementById('copiar');

    btnPreview.addEventListener('click', () => {
        let win = window.open(generarUrl(), '_blank');
        win.focus();
    });

    btnCopiar.addEventListener('click', (e) => {
        impUrl.value = generarUrl();
        impUrl.style.display = "block";
        impUrl.select();
        document.execCommand('copy');
        impUrl.style.display = "none";
        Swal.fire(
            'Enlace de Whatsapp generado',
            'El enlace se ha guardado en su portapapeles',
            'success'
        )
    });

    const generarUrl = () => {
        const tel = numTel.value.replaceAll(" ", "").replaceAll("-", "");
        const msg = mensaje.value.replaceAll(" ", "%20");
        return `https://api.whatsapp.com/send?phone=${tel}&text=${msg}`;
    }

});