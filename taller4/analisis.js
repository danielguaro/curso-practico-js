// const colombia = require('./salarios');

const salariosCol = colombia.map((persona) => {
	return persona.salary;
});

const salariosColSorted = salariosCol.sort((salarioA, salarioB) => {
	return salarioA - salarioB;
});

const calcularMediana = (lista) => {
	const listaOrdenada = lista.sort((a, b) => {
		return a - b;
	});
	let mediana;
	let datoMediana;
	if (listaOrdenada.length % 2 === 0) {
		datoMediana = listaOrdenada.length / 2;
		mediana = (listaOrdenada[datoMediana - 1] + listaOrdenada[datoMediana]) / 2;
	} else {
		datoMediana = Math.floor(listaOrdenada.length / 2);
		mediana = listaOrdenada[datoMediana];
	}
	return mediana;
};

const calcularMediaAritmetica = (lista) => {
	const divisor = lista.length;
	const dividendo = lista.reduce((valorInicial = 0, siguienteDato) => {
		return valorInicial + siguienteDato;
	});
	const mediaAritmetica = dividendo / divisor;
	return mediaAritmetica;
};

// console.log(salariosCol);
// console.log(salariosColSorted);
// console.log(salariosColSorted.length);
// let datoMediana = salariosColSorted.length / 2;
// console.log(datoMediana);
// console.log(calcularMediana(salariosColSorted));
// console.log(calcularMediaAritmetica(salariosColSorted));

/* <------------       ------------> */
// Mediana del top 10%
/* Se usa el metodo .splice(), el cual recibe como parametro 2 argumentos, el primero es donde inicia y el segundo, es cuanto avanza*/

// const ejemplo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const spliceInicio = Math.round(ejemplo.length * 0.9);
// const numeroEscogido = ejemplo[spliceInicio];
// const spliceFinal = ejemplo.length - spliceInicio;
// console.log(numeroEscogido);
// console.log(spliceFinal);
// const top10 = ejemplo.splice(spliceInicio, spliceFinal);
// console.log(top10);

const calcularTop10 = (lista) => {
	const listaOrdenada = lista.sort((a, b) => {
		return a - b;
	});
	const startSplice = Math.round(listaOrdenada.length * 0.9);
	console.log(startSplice);
	const finalSplice = listaOrdenada.length - startSplice;
	console.log(finalSplice);
	const top10 = listaOrdenada.splice(startSplice, finalSplice);
	return top10;
};

console.log(calcularTop10(salariosColSorted));
