function sumarNumerosCompleto() {
    var n1 = parseInt(document.getElementById('idnumero1').value)
    var n2 = parseInt(document.getElementById('idnumero2').value)
    console.log('Funcion sumarNumeros' + n1)
    console.log('Funcion sumarNumeros' + n2)
    var resultado = n1 + n2;
    console.log(resultado);
    document.getElementById('idResultado1').innerText = resultado;
}

function restarNumeros() {
    var n1 = parseInt(document.getElementById('idnumero1').value)
    var n2 = parseInt(document.getElementById('idnumero2').value)
    console.log('Funcion sumarNumeros' + n1)
    console.log('Funcion sumarNumeros' + n2)
    var resultado = n1 - n2;
    console.log(resultado);
    document.getElementById('idResultado1').innerText = resultado;
}

function multiplicarNumeros() {
    var n1 = parseInt(document.getElementById('idnumero1').value)
    var n2 = parseInt(document.getElementById('idnumero2').value)
    console.log('Funcion sumarNumeros' + n1)
    console.log('Funcion sumarNumeros' + n2)
    var resultado = n1 * n2;
    console.log(resultado);
    document.getElementById('idResultado1').innerText = resultado;
}

function dividirNumeros() {
    var n1 = parseInt(document.getElementById('idnumero1').value)
    var n2 = parseInt(document.getElementById('idnumero2').value)
    console.log('Funcion sumarNumeros' + n1)
    console.log('Funcion sumarNumeros' + n2)
    var resultado = n1 / n2;
    console.log(resultado);
    document.getElementById('idResultado1').innerText = resultado;
}

function cambiarImagen() {
    document.getElementById('idimagen1').src='https://media.tenor.com/4ia58csaI_sAAAAM/cat-war.gif'
}