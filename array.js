let paises = ['Albania', 'Alemania'];

function toggleMostrar(idOpciones) {
    let elDiv = document.getElementById(idOpciones);
    if (elDiv.style.display === 'block') {
      elDiv.style.display = 'none';
    } else {
      elDiv.style.display = 'block';
    }
}


function funcionNumeroPaises() {
    alert(`El número de países guardados en el array es de: ${paises.length}`)
}

function mostrarPorOrden() {
    for (let i = 0; i < paises.length; i++) {
        document.write(`<span>${paises[i]} </span>`);
    }
}

function mostrarAlReves() {
    for (let i = paises.length-1; i >= 0; i--) {
        document.write(`<span>${paises[i]} </span>`);
    }
}

function mostrarAlfabeticamente() {
    let alfab = paises.sort();
    for (let i = 0; i < alfab.length; i++) {
        document.write(`<span>${alfab[i]} </span>`);
    }
}

function alPrincipio() {
    let nuevoPais = prompt('Introduzca el nombre del país que quiere meter al principio del array:');
    if (nuevoPais != null || nuevoPais != '') {
        paises.unshift(nuevoPais);
    }
}

function alFinal() {
    let nuevoPais = prompt('Introduzca el nombre del país que quiere meter al final del array:');
    if (nuevoPais != null || nuevoPais != '') {
        paises.push(nuevoPais);
    }
}

function borrarPrincipio() {
    alert(`Se ha borrado: ${paises.shift()}`);
}

function borrarFinal() {
    alert(`Se ha borrado: ${paises.pop()}`);
}

function consultarPorPosicion() {
    let laPosicion = prompt('Introduzca la posición del elemento que quiera consultar, dentro del array:');
    alert(`El país colocado en la posición ${laPosicion} del array es: ${paises[laPosicion]}`);
}

function consultarPorNombre() {
    let elNombre = prompt('Introduzca el nombre del país, y le diremos su posición en el array:')
    alert(`La posición en el array de ${elNombre}, es: ${paises.indexOf(elNombre)}`);
}