
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

/* codificación para validad un email (formulario libro de visitas) */

const emailInput = document.getElementById('email');
const mensajeEmail = document.getElementById("mensajeEmail");
const expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

// Event listener al campo de entrada para la validación


function validarEmail() {
  if (!expRegular.test(emailInput.value)) {
      mensajeEmail.innerHTML = "<div style='color:red; font-weight: bold;'>El email no es valido<div>";
      
  }
  else {
      mensajeEmail.innerHTML = "<div></div>";
  }
}

emailInput.addEventListener("blur", validarEmail);