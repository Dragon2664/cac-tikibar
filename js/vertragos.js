const createApp:myapi 

createApp({
    data() {
        return{
            url: `./json/tragos.json`,
            todolosdatos: [],  /*  Todo mi json */
            datosfilt: [], /* los datos que voy a mostrar */







        }


    },

    methods: { 
        fetchData() {
            fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.datosfilt=data
                this.todolosdatos=data
                this.cargadesplegable()  /*  si no lo pongo aca no funciona el filtro */ 
            } )
            .catch(error => alert ("Se produjo un error." + error:any):void)
        }



    }


})