// const lista1 = [200, 500, 100, 300];
// console.log(lista1);
// lista1.sort();
// console.log(lista1);

// let sumaLista1 = 0;

// for (let i = 0; i < lista1.length; i++) {
// 	sumaLista1 += lista1[i];
// }

// const promedioLista1 = sumaLista1 / lista1.length;
// console.log(promedioLista1);

const calcularMediaAritmetica = (lista) => {
	// let sumaLista = 0;
	// for (let i = 0; i < lista.length; i++) {
	// 	sumaLista += lista[i];
	// }
	// // Una alternativa al ciclo For
	const sumaLista = lista.reduce(
		//Se envia como argumento una función, q recibe dos parametros
		(valorAcumulado = 0, nuevoElemento) => {
			/* Cuando JS no evie nada, se toma por defecto que empieza en 0 el valorAcumulado*/
			return valorAcumulado + nuevoElemento;
		}
	);

	const promedioLista = sumaLista / lista.length;
	return promedioLista;
};
console.log(calcularMediaAritmetica([10, 20, 30, 40]));

/*<-------- Para sacar la mediana -------------->*/
const calcularMediana = (lista) => {
	const listaOrdenada = lista.sort((a, b) => {
		return a - b; /* Para garantizar siempre un orden ascendente*/
	});
	let mediana;
	let datoMediana;
	if (listaOrdenada.length % 2 === 0) {
		datoMediana = listaOrdenada.length / 2;
		mediana = (lista[datoMediana - 1] + lista[datoMediana]) / 2;
	} else {
		/* Sin el Math.floor() u otro metodo que devuelva el float a entero, arrojará UNDEFINED*/
		datoMediana = Math.floor(
			listaOrdenada.length / 2
		); /* Para que devuelva el entero inmediatanmente superior*/
		mediana = listaOrdenada[datoMediana];

		return mediana;
	}
};
let lista = [50, 40, 30, 10, 20];
console.log(`mediana ${calcularMediana(lista)}`);

/*<-------- Para sacar la moda -------------->*/

let listaEjemplo = [
	1, 2, 3, 4, 1, 2, 1, 2, 1, 1, 1, 3, 5, 4, 4, 4, 2, 1, 1, 2, 2, 1, 1, 10, 1,
];

// const listaContador = {};

// listaEjemplo.map((elemento) => {
// 	if (listaContador[elemento]) {
// 		/*Significa que si el elemento ya existe, entonces...*/
// 		listaContador[elemento] += 1;
// 	} else {
// 		listaContador[elemento] = 1;
// 	}
// });
// // console.log(listaContador);

// const listaEjemploPosObjeto = Object.entries(listaContador).sort((a, b) => {
// 	return a[1] - b[1];
// });
// console.log(listaEjemploPosObjeto);
// const moda = listaEjemploPosObjeto[listaEjemploPosObjeto.length - 1];
// console.log(moda);

const calcularModa = (lista) => {
	listaEnObjeto = {};
	lista.map((dato) => {
		if (listaEnObjeto[dato]) {
			listaEnObjeto[dato] += 1;
		} else {
			listaEnObjeto[dato] = 1;
		}
	});
	const listaNuevamente = Object.entries(listaEnObjeto).sort((a, b) => {
		return a[1] - b[1];
	});
	const moda = listaNuevamente[listaNuevamente.length - 1];
	return moda;
};

console.log(calcularModa(listaEjemplo));

/*<------ Para agregar inputs ------> */
let listaUsuario = [];

const numeroDatos = () => {
	const inputNumeroDatos = document.getElementById('numeroDatos');
	const cantidad = parseInt(inputNumeroDatos.value);
	return cantidad;
};

const datosDelUsuario = () => {
	let valorNumerico = numeroDatos();
	for (let i = 1; i < valorNumerico + 1; i++) {
		let elHtml = `<label for=" ${i}">dato: </label> <input id="${i}" type="number">`;
	}
	let input1 = document.getElementById('aggInputs');
	input1.insertAdjacentHTML('beforeend', elHtml);
};
