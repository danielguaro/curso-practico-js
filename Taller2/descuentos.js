// const precioOriginal         = 120
// const descuento              = 18;
// const porcPrecioConDescuento = 100 - descuento;
// const precioDescuento        = precioOriginal *(porcPrecioConDescuento/100);

// console.log({ //Me genera un objeto, donde las const son las key y los resultados son los keyValue
//   precioOriginal,
//   descuento,
//   porcPrecioConDescuento,
//   precioDescuento
// });

const calcularPrecioConDescuento = (precio, descuento) => {
	const porcPrecioConDescuento = 100 - descuento;
	const precioDescuento = precio * (porcPrecioConDescuento / 100);
	return precioDescuento;
};
console.log(calcularPrecioConDescuento(300, 30));

const priceDiscount = () => {
	const valorPrecio = document.getElementById('inputPrice').value;
	const valorDescuento = document.getElementById('inputDiscount').value;
	discount = calcularPrecioConDescuento(valorPrecio, valorDescuento);
	const result = document.getElementById('resultP'); //Mando a llamar el HTML en el que creé el id para generar el resultado
	result.innerText = `El precio final con el descuento es de $${discount} pesos`; // Con la función .innerText puedo colocar mi resultado de JS en HTML
};

const cuponDescuentos = () => {
	const precio = document.getElementById('inputPriceCupon').value;
	const cupones = ['daniel', 'samba', 'sara', 'juan'];
	const cuponIngresado = document.getElementById('inputCupon').value;
	const resultadoCupon = document.getElementById('valorDescuento');
	if (cuponIngresado == cupones[0]) {
		const total = precio * 0.8;
		resultadoCupon.innerText = `Se aplica un 20% de descuento, por lo que el precio final es de$ ${total}`;
	} else if (cuponIngresado == cupones[1]) {
		const total = precio * 0.85;
		resultadoCupon.innerText = `Se aplica un 15% de descuento, por lo que el precio final es de $ ${total}`;
	} else if (cuponIngresado == cupones[2]) {
		const total = precio * 0.9;
		resultadoCupon.innerText = `Se aplica un 10% de descuento, por lo que el precio final es de $ ${total}`;
	} else if (cuponIngresado == cupones[3]) {
		const total = precio * 0.9;
		resultadoCupon.innerText = `Se aplica un 10% de descuento, por lo que el precio final es de $ ${total}`;
	} else if (cuponIngresado == '') {
		resultadoCupon.innerText = `Lo siento, no has ingresado un cupon`;
	} else {
		resultadoCupon.innerText = 'Cupon no valido';
	}
};
