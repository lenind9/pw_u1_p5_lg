console.log("elementos Vue");
console.log(Vue);

const estudiantes = [{nombre: 'Lenin', apellido:'Guananga'}, 
{nombre: 'David', apellido:'Coronel'},
{nombre: 'Nicolas', apellido:'Lema'},
{nombre: 'Ailine', apellido:'Molina'},
{nombre: '', apellido:'Sagredo'}];

console.log(estudiantes)
console.table(estudiantes)

const app = Vue.createApp({
    // Options API
    //template:`
    //<h1>Hola mundo</h1>
    //<p>Desde app.js</p>
    //<h6>{{1+1}}</h6>
    //<p>{{[1, 2, 3, 4, 5, 6, 7, 8]}}</p>
    //<p>{{false?'Verdadero': 'Falso'}}</p>
    //`
    methods:{
        cambiarMensaje() {
            console.log("Se esta cambiando el  mensaje")
            console.log(this.mensaje)
            this.mensaje='Valor cambiado'
        },
        cambiarNumero() {
            console.log(this.valor)
            this.valor++;
        },
        agregarEstudiante() {
            console.log("Agregando estudiante")
            //this.lista.unshift(estu)
            this.lista.push({nombre: this.nombre, apellido: this.apellido})
        },
        presionandoTecla(event) {
            console.log("Presionando")
            console.log(event.charCode);
        },
        presionandoEnter(event){
            if (event.charCode === 13) {
                this.agregarEstudiante();
            }
        },
        presionandoEnterMod() {
            console.log("Presionando enter mod")
        }
    },
    watch:{

    },
    data(){
        return {
            mensaje: 'Hola mundo desde Vue.JS',
            valor: 100,
            lista: estudiantes,
            nombre: undefined,
            apellido: null
        }
    }
});

app.mount('#miApp')