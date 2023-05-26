const { createApp } = Vue;

createApp({
  data() {
    return {
      url: 'tragos.json', // tragos.json es un arreglo que armé yo con datos que me parecieron importantes
      todoslostragos: [], // arreglo completo de tragos
      tragosfiltrados: [], // arreglo filtrado de tragos
      conysin: [], // Nuevo arreglo para opciones de con/sin alcohol
      dificult: [], // Nuevo arreglo para opciones de dificultad
      conysinSeleccionado: 'Todos', // Nuevo valor inicial para filtrar por con/sin alcohol
      dificultSeleccionado: 'Todos', // Nuevo valor inicial para filtrar por dificultad
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.todoslostragos = data.todoslostragos; 
          // linea de arriba: Reemplaza 'todoslostragos' con el nombre del arreglo en mi json
          this.tragosfiltrados = data.tragosfiltrados; 
          // linea de arriba: Reemplaza 'tragosfiltrados' con el nombre del arreglo en mi json
          this.pullDownLista();
        })
        .catch((error) => alert('Ups... se produjo un error: ' + error));
    },
    filtro() {
      this.tragosfiltrados = this.todoslostragos.filter((elemento) => (
        (this.conysinSeleccionado === 'Todos' || elemento.conysin === this.conysinSeleccionado) &&
        (this.dificultSeleccionado === 'Todos' || elemento.dificult === this.dificultSeleccionado)
      ));
    },
    pullDownLista() {
      this.conysin = [];
      this.dificult = [];
      for (elemento of this.todoslostragos) {
        if (elemento.conysin !== '' && !this.conysin.includes(elemento.conysin)) {
          this.conysin.push(elemento.conysin);
        }
        if (elemento.dificult !== '' && !this.dificult.includes(elemento.dificult)) {
          this.dificult.push(elemento.dificult);
        }
      }
    }
  },
  created() {
    this.fetchData(this.url);
  },
}).mount('#app');

