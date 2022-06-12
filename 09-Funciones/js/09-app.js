/*************************** 
AÑADIR FUNCIONES EN UN OBJETO
***************************/

const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo la cancion con el id ${id}`); // Reproduciendo la cancion con el id 30
  },
  pausar: function () {
    console.log("Pausando...."); // Pausando....
  },
  borrar: function (id) {
    console.log(`Borrando Cancion ${id}`); // Borrando Cancion 30
  },
  crearPlaylist: function (nombre) {
    console.log(`Creando la Playlist de ${nombre}`); // Creando la Playlist de Ed Sheeran
  },
  reproducirPlaylist: function (nombre) {
    console.log(`Reproduciendo la playlist ${nombre}`); // Reproduciendo la Playlist de Ed Sheeran
  },
};

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("Ed Sheeran");
reproductor.reproducirPlaylist("Ed Sheeran");
