const numeros = [10, 20, 30];
const dobles = numeros.map((numero) => {
	return numero * 2;
});
console.log(dobles);

const productos = [
	{ id: 'blabla', nombre: 'camisa', precio: 500 },
	{ id: 'bleble', nombre: 'zapatillas', precio: 2000 },
	{ id: 'blibli', nombre: 'pantalón', precio: 1500 },
];
/* Aplicar 10% de descuento a los productos que cuesten mil o mas*/
const productDescuento = productos.map((producto) => {
	if (producto.precio < 1000) return producto;
	return {
		...producto,
		precio: producto.precio * 0.9,
	};
});

console.log(productDescuento);

// // // Otro ejemplo interesante para maps y abreviar todo!
const losIds = productos.map(
	({ id }) => id
); /* como se puede ver, se obvio el "producto" y el producto.id, debido a las {}, donde se optiene la propiedad id del parametro que llege, los ({}) indican que estoy separando el parametro y tomando solo lo que necesito*/
console.log(losIds);

/* <-------------------------    ---------------------------------------->*/
/* METODO FILTER*/
console.log('<--------------->');
const esBarato = (producto) => {
	return producto.precio < 1000;
};
const esCaro = (producto) => !esBarato(producto);

const productosBaratos = productos.filter(esBarato); // arroja los prodc.menores a mil
console.log(productosBaratos);

const productosCaros = productos.filter(esCaro);
console.log('productos caros: ');
console.log(productosCaros);

const numerosFilter = [1, 2, 3, 4, 3, 1];
/* Elementos de .filter(elemento, posición, array en si)*/
const numerosUnicos = numerosFilter.filter(
	(numero, posicion, numerosFilter) => {
		/* Aplicamos el metodo .indexOf() el cual nos ayuda a filtrar números repetidos, ya que esta retorna la primera posición que ocupa un elemento, por ende, si un elemento tiene diferentes posiciones, nos lo hará saber*/
		return posicion === numerosFilter.indexOf(numero);
		/* En este caso, el array NO tendrá las posiciones repetidas, ya que serían false*/
	}
);
console.log(numerosUnicos);
