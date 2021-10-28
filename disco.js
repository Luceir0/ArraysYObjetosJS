class Disco {
    constructor() {
        this.nombre = '';
        this.grupo = '';
        this.anho = '';
        this.corriente = '';
        this.localizacion = 0;
        this.prestado = false;
        this.caratula = '';
    }

    cambiarLocalizacion(numeroEstanteria) {
        this.localizacion = numeroEstanteria;
    }

    // cambiarPrestado() {
    //     if(this.prestado == false) {
    //         this.prestado = true;
    //     } else {
    //         this.prestado = false;
    //     }
    // }

    cambiarPrestado(valorBoolean) {
        this.prestado = valorBoolean;
    }

    infoDisco() {
        let estaPrestado;
        if(this.prestado == false) {
            estaPrestado = 'no';
        } else if (this.prestado == true) {
            estaPrestado = 'sí';
        }

        alert(`Este disco es ${this.nombre}, de ${this.grupo}, del año ${this.anho}. Pertenece a la corriente musical: ${this.corriente}. Se encuentra en la estantería número ${this.localizacion}, y ${estaPrestado} está prestado. Su carátula es ${this.caratula}`);

    }
}





let arrayDiscos = [];

arrayDiscos.push(new Disco());
    arrayDiscos[0].nombre = 'Rumours';
    arrayDiscos[0].grupo = 'Fleetwood Mac';
    arrayDiscos[0].anho = '1977'
    arrayDiscos[0].corriente = 'Rock';
    arrayDiscos[0].localizacion = 0;
    arrayDiscos[0].caratula = `<img src="https://img.fruugo.com/product/2/12/158798122_max.jpg" alt="Rumours Fletwood Mac" width="100" height="100">`

arrayDiscos.push(new Disco());
    arrayDiscos[1].nombre = "Never Mind The Bollocks";
    arrayDiscos[1].grupo = 'Sex Pistols';
    arrayDiscos[1].anho = '1977'
    arrayDiscos[1].corriente = 'Punk';
    arrayDiscos[1].localizacion = 0;
    arrayDiscos[1].caratula = `<img src="https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/12/71HQdjDNwKL._AC_SL1326_.jpg" alt="Never mind the bollocks sex pistols" width="100" height="100">`

arrayDiscos.push(new Disco());
    arrayDiscos[2].nombre = "From the Fires";
    arrayDiscos[2].grupo = 'Greta Van Fleet';
    arrayDiscos[2].anho = '2019'
    arrayDiscos[2].corriente = 'Rock';
    arrayDiscos[2].localizacion = 0;
    arrayDiscos[2].caratula = `<img src="https://www.londondrugs.com/on/demandware.static/-/Sites-londondrugs-master/default/dw77b34aea/products/L9494535/large/L9494535.JPG" alt="From the Fires Greta Van Fleet" width="100" height="100">`




function toggleMostrar(idOpciones) {
    let elDiv = document.getElementById(idOpciones);
    if (elDiv.style.display === 'block') {
      elDiv.style.display = 'none';
    } else {
      elDiv.style.display = 'block';
    }
}


function funcionNumeroDiscos() {
    alert(`El número de discos guardados en el array es de: ${arrayDiscos.length}`)
}

function mostrarPorOrden() {
    document.write(`<table border=2>`);
        document.write(`<tr>`);
            document.write(`<td>NOMBRE</td>`);
            for (let i = 0; i < arrayDiscos.length; i++) {
                document.write(`<td>${arrayDiscos[i].nombre} </td>`);
            }
        document.write(`</tr>`);
        document.write(`<tr>`);
            document.write(`<td>GRUPO</td>`);
            for (let i = 0; i < arrayDiscos.length; i++) {
                document.write(`<td>${arrayDiscos[i].grupo} </td>`);
            }
        document.write(`</tr>`);
        document.write(`<tr>`);
            document.write(`<td>AÑO</td>`);
            for (let i = 0; i < arrayDiscos.length; i++) {
                document.write(`<td>${arrayDiscos[i].anho} </td>`);
            }
        document.write(`</tr>`);
        document.write(`<tr>`);
            document.write(`<td>CORRIENTE</td>`);
            for (let i = 0; i < arrayDiscos.length; i++) {
                document.write(`<td>${arrayDiscos[i].corriente} </td>`);
            }
        document.write(`</tr>`);
        document.write(`<tr>`);
            document.write(`<td>ESTANTERÍA</td>`);
            for (let i = 0; i < arrayDiscos.length; i++) {
                document.write(`<td>${arrayDiscos[i].localizacion} </td>`);
            }
        document.write(`</tr>`);
        document.write(`<tr>`);
            document.write(`<td>PRESTADO</td>`);
            for (let i = 0; i < arrayDiscos.length; i++) {
                document.write(`<td>${arrayDiscos[i].prestado} </td>`);
            }
        document.write(`</tr>`);
        document.write(`<tr>`);
            document.write(`<td>CARÁTULA</td>`);
            for (let i = 0; i < arrayDiscos.length; i++) {
                document.write(`<td>${arrayDiscos[i].caratula} </td>`);
            }
        document.write(`</tr>`);
    document.write(`</table>`);
}

function mostrarAlReves() {
    document.write(`<table border=2>`);
        document.write(`<tr>`);
            document.write(`<td>NOMBRE</td>`);
            for (let i = arrayDiscos.length-1; i >= 0; i--) {
                document.write(`<td>${arrayDiscos[i].nombre} </td>`);
            }
        document.write(`</tr>`);
        document.write(`<tr>`);
            document.write(`<td>GRUPO</td>`);
            for (let i = arrayDiscos.length-1; i >= 0; i--) {
                document.write(`<td>${arrayDiscos[i].grupo} </td>`);
            }
        document.write(`</tr>`);
        document.write(`<tr>`);
            document.write(`<td>AÑO</td>`);
            for (let i = arrayDiscos.length-1; i >= 0; i--) {
                document.write(`<td>${arrayDiscos[i].anho} </td>`);
            }
        document.write(`</tr>`);
        document.write(`<tr>`);
            document.write(`<td>CORRIENTE</td>`);
            for (let i = arrayDiscos.length-1; i >= 0; i--) {
                document.write(`<td>${arrayDiscos[i].corriente} </td>`);
            }
        document.write(`</tr>`);
        document.write(`<tr>`);
            document.write(`<td>ESTANTERÍA</td>`);
            for (let i = arrayDiscos.length-1; i >= 0; i--) {
                document.write(`<td>${arrayDiscos[i].localizacion} </td>`);
            }
        document.write(`</tr>`);
        document.write(`<tr>`);
            document.write(`<td>PRESTADO</td>`);
            for (let i = arrayDiscos.length-1; i >= 0; i--) {
                document.write(`<td>${arrayDiscos[i].prestado} </td>`);
            }
        document.write(`</tr>`);
        document.write(`<tr>`);
            document.write(`<td>CARÁTULA</td>`);
            for (let i = arrayDiscos.length-1; i >= 0; i--) {
                document.write(`<td>${arrayDiscos[i].caratula} </td>`);
            }
        document.write(`</tr>`);
    document.write(`</table>`);
}

function mostrarAlfabeticamente() {
    let alfab = arrayDiscos.sort();

    document.write(`<table border=2>`);
        document.write(`<tr>`);
            document.write(`<td>NOMBRE</td>`);
            for (let i = 0; i < alfab.length; i++) {
                document.write(`<td>${alfab[i].nombre} </td>`);
            }
        document.write(`</tr>`);
        document.write(`<tr>`);
            document.write(`<td>GRUPO</td>`);
            for (let i = 0; i < alfab.length; i++) {
                document.write(`<td>${alfab[i].grupo} </td>`);
            }
        document.write(`</tr>`);
        document.write(`<tr>`);
            document.write(`<td>AÑO</td>`);
            for (let i = 0; i < alfab.length; i++) {
                document.write(`<td>${alfab[i].anho} </td>`);
            }
        document.write(`</tr>`);
        document.write(`<tr>`);
            document.write(`<td>CORRIENTE</td>`);
            for (let i = 0; i < alfab.length; i++) {
                document.write(`<td>${alfab[i].corriente} </td>`);
            }
        document.write(`</tr>`);
        document.write(`<tr>`);
            document.write(`<td>ESTANTERÍA</td>`);
            for (let i = 0; i < alfab.length; i++) {
                document.write(`<td>${alfab[i].localizacion} </td>`);
            }
        document.write(`</tr>`);
        document.write(`<tr>`);
            document.write(`<td>PRESTADO</td>`);
            for (let i = 0; i < alfab.length; i++) {
                document.write(`<td>${alfab[i].prestado} </td>`);
            }
        document.write(`</tr>`);
        document.write(`<tr>`);
            document.write(`<td>CARÁTULA</td>`);
            for (let i = 0; i < alfab.length; i++) {
                document.write(`<td>${alfab[i].caratula} </td>`);
            }
        document.write(`</tr>`);
    document.write(`</table>`);
}

function alPrincipio() {
    let elNombre = prompt(`Introduce el nombre del disco: `);
    let elGrupo = prompt(`Introduce el nombre del grupo: `);
    let elAnho = prompt(`Introduce el año de salida: `);
    let laCorriente = prompt(`Introduce su corriente musical: `);
    let laLocalizacion = prompt(`Introduce el número de la estantería donde quieras guardarlo: `);
    let booleanPrestado = prompt(`Introduce false si no está prestado, y true si está prestado `);

    let nuevoDisco = new Disco();
        arrayDiscos[0].nombre = elNombre;
        arrayDiscos[0].grupo = elGrupo;
        arrayDiscos[0].anho = elAnho;
        arrayDiscos[0].corriente = laCorriente;
        arrayDiscos[0].localizacion = laLocalizacion;
        arrayDiscos[0].prestado = booleanPrestado;

    if (nuevoDisco != null) {
        arrayDiscos.unshift(nuevoDisco);
        alert('Nuevo disco añadido correctamente');
    }
}

function alFinal() {
    let elNombre = prompt(`Introduce el nombre del disco: `);
    let elGrupo = prompt(`Introduce el nombre del grupo: `);
    let elAnho = prompt(`Introduce el año de salida: `);
    let laCorriente = prompt(`Introduce su corriente musical: `);
    let laLocalizacion = prompt(`Introduce el número de la estantería donde quieras guardarlo: `);
    let booleanPrestado = prompt(`Introduce false si no está prestado, y true si está prestado `);

    let nuevoDisco = new Disco();

    if (nuevoDisco != null) {
        arrayDiscos.push(nuevoDisco);

        let posicion = arrayDiscos.length-1
        arrayDiscos[posicion].nombre = elNombre;
        arrayDiscos[posicion].grupo = elGrupo;
        arrayDiscos[posicion].anho = elAnho;
        arrayDiscos[posicion].corriente = laCorriente;
        arrayDiscos[posicion].localizacion = laLocalizacion;
        arrayDiscos[posicion].prestado = booleanPrestado;
        
        alert('Nuevo disco añadido correctamente');
    }
}

function borrarPrincipio() {
    let elDiscoBorrado = arrayDiscos.shift();
    alert(`Se ha borrado: ${elDiscoBorrado.nombre}`);
}

function borrarFinal() {
    let elDiscoBorrado = arrayDiscos.pop();
    alert(`Se ha borrado: ${elDiscoBorrado.nombre}`);
}

function consultarPorPosicion() {
    let laPosicion = prompt('Introduzca la posición del elemento que quiera consultar, dentro del array:');
    alert(`El disco colocado en la posición ${laPosicion} del array es: ${arrayDiscos[laPosicion].nombre}`);
}

function consultarPorNombre() {
    let elNombre = prompt('Introduzca el nombre del país, y le diremos su posición en el array:');

    let indexDisco = arrayDiscos.findIndex(Disco => Disco.nombre == elNombre);

    alert(`La posición en el array de ${elNombre}, es: ${indexDisco}`);
}

