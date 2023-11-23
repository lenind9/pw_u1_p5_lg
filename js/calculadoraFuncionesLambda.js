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

    // declaracion de arreglos
    const diasSemanas = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
    console.log(diasSemanas)
}