

/*   de aqui para abajo, hasta el siguiente llamado, es la codificacion para mi arreglo json*/

const miurl = 'https://dragon2664.github.io/cac-tikibar/js/tragos.json';


const app = new Vue({
  el: '#app',
  data: {
    tragos: []
  },
  mounted() {
    fetch(miurl)
      .then(response => response.json())
      .then(data => {
        this.tragos = data.tragos
        .filter(trago => trago.nombre !== "a completar")
        .map(trago => {
          if (trago.foto === "url" || trago.foto === "a completar") {
            trago.foto = "https://i0.wp.com/orstx.org/wp-content/uploads/2019/10/no-photo-available-icon-12.jpg?fit=300%2C245&ssl=1"
          }
          return trago;
        })



      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
});

