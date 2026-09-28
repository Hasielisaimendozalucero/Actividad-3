class ModalGaleria {
    constructor(idOverlay, idBtnAbrir, idBtnCerrar, listaImagenes) {
        this.overlay = document.getElementById(idOverlay);
        this.btnAbrir = document.getElementById(idBtnAbrir);
        this.btnCerrar = document.getElementById(idBtnCerrar);

        this.imgElement = document.getElementById('imagenActual');
        this.btnAnterior = document.getElementById('btnAnterior');
        this.btnSiguiente = document.getElementById('btnSiguiente');
        this.textoContador = document.getElementById('textoContador');

        this.imagenes = listaImagenes;
        this.indiceActual = 0;

        this.init();
    } 

    init() {
        if (!this.overlay) return;

        if (this.btnAbrir) {
            this.btnAbrir.addEventListener('click', () => this.abrir());
        }

        if (this.btnCerrar) {
            this.btnCerrar.addEventListener('click', () => this.cerrar());
        }

        this.overlay.addEventListener('click', (event) => {
            if (event.target === this.overlay) {
                this.cerrar();
            }
        });

        if (this.btnAnterior && this.btnSiguiente) {
            this.btnAnterior.addEventListener('click', () => this.anteriorImagen());
            this.btnSiguiente.addEventListener('click', () => this.siguienteImagen());
        }
    }

    abrir() {
        this.overlay.style.display = 'flex';
        this.actualizarImagen();
    }

    cerrar() {
        this.overlay.style.display = 'none';
    }

    siguienteImagen() {
        this.indiceActual = (this.indiceActual + 1) % this.imagenes.length;
        this.actualizarImagen();
    }

    anteriorImagen() {
        this.indiceActual = (this.indiceActual - 1 + this.imagenes.length) % this.imagenes.length;
        this.actualizarImagen();
    }

    actualizarImagen() {
        if (this.imgElement) {
            this.imgElement.src = this.imagenes[this.indiceActual];
        }
        if (this.textoContador) {
            this.textoContador.textContent = `Imagen ${this.indiceActual + 1} de ${this.imagenes.length}`;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    //  fotos
    const misFotos = [
        'img/times.jpg',
        'img/night.jpg',
        'img/liberty.jpg',
        'img/bridge.jpg',
        'img/lc.jpg',

    ];

   
    const miGaleria = new ModalGaleria(
        'modalGaleria',
        'btnAbrirGaleria',
        'btnCerrarGaleria',
        misFotos
    );
});