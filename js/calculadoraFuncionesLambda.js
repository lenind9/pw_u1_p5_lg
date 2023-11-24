const sumar = (n1, n2) => n1 + n2;

const sumarCompleto = () =>  {
    var resultado = parsear('idnumero1') + parsear('idnumero2');
    console.log(resultado);
    document.getElementById('idResultado1').innerText = resultado;
}

const restarNumerosLambda = () => {
    var resultado = parsear('idnumero1') - parsear('idnumero2');
    console.log(resultado);
    document.getElementById('idResultado1').innerText = resultado;
}

const multiplicarNumerosLambda = () => {
    var resultado = parsear('idnumero1') * parsear('idnumero2');
    console.log(resultado);
    document.getElementById('idResultado1').innerText = resultado;
}

const dividirNumerosLambda = () => {
    var resultado = parsear('idnumero1') / parsear('idnumero2');
    console.log(resultado);
    document.getElementById('idResultado1').innerText = resultado;
}

const cambiarImagen = () => document.getElementById('idimagen1').src='https://media.tenor.com/4ia58csaI_sAAAAM/cat-war.gif'

const parsear = (id) => parseInt(document.getElementById(id).value);

function conceptosJS() {
    let var1 = 10;
    let var1Texto = 'TextoLet';
    console.log(var1);
    console.log(var1Texto);

    // var es un tipo de dato que esta quedando en desuso
    var var2 = 10;
    var var2Texto = 'TextoVar';
    console.log(var2);
    console.log(var2Texto);

    const const1 = 10;
    const const1Texto = 'TextoConst';
    console.log(const1);
    console.log(const1Texto);

    // Declaracion de Arreglos
    const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
    console.log(diasSemana);
    console.log(diasSemana[0]);
    console.log(diasSemana[4]);
    console.log(diasSemana[5]);
    diasSemana[5] = "Sabado";
    console.log(diasSemana[5]);
    diasSemana.push("Domingo");
    console.log(diasSemana);
    diasSemana.unshift("Feriado");
    console.log(diasSemana);

    const edades = [1, 2, 3, 4, 5];
    console.log(edades);
    const edades2 = [6, 7, 8];
    const edadesFinal = edades.concat(edades2);
    console.log(edadesFinal);

    for(const dia of diasSemana) {
        console.log(dia);
        if(dia === 'Martes') {
            console.log('martes dos por uno');
        }
    }

    // Declaracion de Objetos
    const estudiante = {
        nombre: "Lenin",
        apellido: "Guananga",
        edad: 23,
        genero: "M",
        ciudad: "Quito"
    }
    console.log(estudiante);
    console.log(estudiante.apellido)
    estudiante.nombre = "David"
    console.log(estudiante.nombre)

    const persona = {
        nombre: "Lenin",
        apellido: "Guananga",
        edad: "23",
        direccion: {
            callePrincipal: "America",
            calleSecundaria: "Rumipamba",
            numeracion: "Oe3-80",
            barrio: "Carapungo"
        }
    }
    console.log(persona)
    console.log(persona.direccion)
    console.log(persona.direccion.barrio)

    // Arreglo de 4 objetos pacientes que tengan 3 atributos cada uno
    const paciente1 = {
        nombre: "Andres",
        apellido: "Benavides",
        edad: 25
    }
    const paciente2 = {
        nombre: "Alexander",
        apellido: "Condor",
        edad: 27
    }
    const paciente3 = {
        nombre: "Juan",
        apellido: "Jumbo",
        edad: 21
    }
    const paciente4 = {
        nombre: "Nicolas",
        apellido: "Lema",
        edad: 22
    }

    const pacientesFinal = [paciente1, paciente2, paciente3, paciente4]
    console.log(pacientesFinal)
    console.table(pacientesFinal)

    const pacientes = [{nombre:"Lenin", apellido:"Guananga"}, {nombre:"Lenin2", apellido:"Guananga2"}, {nombre:"Lenin3", apellido:"Guananga3"}]
    console.table(pacientes)
    console.log(pacientes[0].nombre)
    
    pacientes.pop()
    console.table(pacientes)

    // Desestructuracion de arreglos
    const diasSemana2 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
    const [dia1, dia2, dia3, dia4, dia5] = diasSemana2
    console.log(dia1)
    console.log(dia5)

    const [d1, d2, d3, d4, d5] = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
    console.log(d2)
    console.log(d4)

    // Desestructuracion de objetos
    const vehiculo = {
        marca: "Toyota",
        modelo: "Prius",
        anio: 2022
    }
    const {marca, modelo, anio} = {vehiculo};
    console.log(marca)
    console.log(anio)

    // Declarar objeto que tenga como atributo otro objeto en una linea de codigo
    const {nombre, apellido, direccion} = {nombre:"Lenin", apellido:"Guananga", direccion:{callePrincipal:"America", calleSecundaria:"Rumipamba", numeracion:"Oe4-502"}}
    console.log(direccion)
}