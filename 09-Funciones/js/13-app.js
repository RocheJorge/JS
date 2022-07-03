/*************************** 
ARROW FUNCTIONS EN EL REPRODUCTOR DE MUSICA
***************************/

const reproductor = {
  reproducir: (id) => console.log(`Reproduciendo la cancion con el id ${id}`),
  // Reproduciendo la cancion con el id 30

  pausar: () => console.log("Pausando...."), // Pausando....

  borrar: (id) => console.log(`Borrando Cancion ${id}`), // Borrando Cancion 30

  crearPlaylist: (nombre) => console.log(`Creando la Playlist de ${nombre}`),
  // Creando la Playlist de Ed Sheeran

  reproducirPlaylist: (nombre) =>
    console.log(`Reproduciendo la playlist ${nombre}`),
  // Reproduciendo la Playlist de Ed Sheeran

  /* 
  set -> Envia
  get -> Recibe
  */

  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`); // Añadiendo Enter Sandman
  },

  get obtenerCancion() {
    console.log(`${this.cancion}`); // Enter Sandman
  },
};

reproductor.nuevaCancion = "Enter Sandman";
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("Ed Sheeran");
reproductor.reproducirPlaylist("Ed Sheeran");
