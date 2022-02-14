// Variable para tener el perimetro de un cuadrado (de lado fijo)
console.group('cuadrado'); // para agrupar mensajes dandole nombre a un grupo
// const ladoCuadrado = 5;
// console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`)

const perimetroCuadrado = (lado) => {
	return lado * 4;
};
// console.log(`El perimetro del cuadrado es ${perimetroCuadrado}cm`)

const areaCuadrado = (lado) => {
	return lado * lado;
};
// console.log(`El área del cuadrado es ${areaCuadrado}cm2`)
console.groupEnd('cuadrado');

// Info triangulo
console.group('triangulo');
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log(`Los lados del triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y la base es de ${baseTriangulo}cm`);

const perimetroTriangulo = (lado1, lado2, base) => {
	return lado1 + lado2 + base;
};
// console.log(`El perimetro del triangulo es ${perimetroTriangulo()}cm`)

const areaTriangulo = (base, altura) => {
	return (base * altura) / 2;
};
// console.log(`El área del triangulo es ${areaTriangulo}cm2`)
console.groupEnd('triangulo');

// Info circulo
console.group('circulo');
// const radio = 4;
// const diametro = radio*2;
//Math es una caja de erramientas
// console.log(pi)

// console.log(`El radio del circulo es ${radio}cm`)
const pi = Math.PI;
const diametroCirculo = (radio) => {
	return radio * 2;
};

const circunferencia = (radio) => {
	diametro = diametroCirculo(radio);
	return diametro * pi;
};
// console.log(`La circunferencia del circulo es ${circunferencia}cm`)

const areaCirculo = (radio) => {
	return pi * radio * radio;
};
// console.log(`El área de un circulo es ${areaCirculo}cm2`)
// console.groupEnd('circulo')

// Ya que queremos que cada que le den cick al boton de calcular perimetro se llame una función, lo mismo para el del área
// Aquí interactuamos con el HTML
const calcularPerimetroCuadrado = () => {
	const input = document.getElementById('InputCuadrado'); // Esto manda a llamar la etiqueta que alverga dicho Id, pero esto nos trae toda la etiqueta y nosotros solo necesitamos el valor, por lo q se crea otra constante
	const value = input.value; //Para obtener el valor se llama la variable que almacena el .getElementById (en este caso input) y llamamos su propiedad .value. Con lo anterior, ya tenemos el valor de lo que escribieron los usuarios en el input
	const perimetro = perimetroCuadrado(value);
	//No se finaliza con un return, pq eso implicaría que los usuarios abrieran la consola, por lo que se genera mejor una alert
	//alert(perimetro);// Tener presente que los alert son una ventana emergente que estaría mostrando el resultado, sin embargo, esto es algo incomodo para los usuarios, por lo que se debe ajustar mejor (algo que se verá posteriormente)
	// Agregando .innertText para que no salgan alertas que pueden incomodar
	const result = document.getElementById('resultSquare');
	result.innerText = `El perimetro es de ${perimetro}`;
};

const calcularAreaCuadrado = () => {
	const input = document.getElementById('InputCuadrado');
	const value = input.value; // Para obtejer el valor que escribieron los usuarios
	const area = areaCuadrado(value);
	// alert(area);
	// Agregando .innerText
	const result = document.getElementById('resultSquare');
	result.innerText = `El área es de ${area}`;
};

// Función perimetro triangulo
const calcularPerimetroTriangulo = () => {
	const input1 = document.getElementById('inputLado1').value,
		value1 = parseFloat(input1), // Sin esto me quedan los datos como si fueran str
		input2 = document.getElementById('inputLado2').value,
		value2 = parseFloat(input2),
		input3 = document.getElementById('inputlado3').value,
		value3 = parseFloat(input3),
		perimetroTri = perimetroTriangulo(value1, value2, value3);
	// alert(perimetroTri);
	const result = document.getElementById('resultFirstTri');
	result.innerText = `El perimetro es de ${perimetroTri}`;
};

//Funcion área triangulo
const calcularAreaTriangulo = () => {
	const input1 = document.getElementById('inputBaseT').value,
		value1 = parseFloat(input1),
		input2 = document.getElementById('inputAlturaT').value,
		value2 = parseFloat(input2),
		area = areaTriangulo(value1, value2);
	// alert(area);
	const result = document.getElementById('resultSecondTri');
	result.innerText = `El área es de ${area}`;
};

// Perimetro del circulo
const perimetroCirculo = () => {
	const diametroCircu = document.getElementById('diametro').value,
		value = parseFloat(diametroCircu),
		perimetro = circunferencia(value);
	// alert(perimetro)
	const result = document.getElementById('resultCircle');
	result.innerText = `El perimetro es ${perimetro}`;
};

// ÁRea del circulo
const areaCirculo1 = () => {
	const radioCircu = document.getElementById('diametro').value,
		value = parseFloat(radioCircu),
		area = areaCirculo(value);
	// alert(area);
	const result = document.getElementById('resultCircle');
	result.innerText = `El área es ${area}`;
};

//Desafio de la clase 9 - Calcular la altura de un triangulo isósceles

const trianguloIsosceles = (lado1, lado2, base) => {
	if (lado1 === lado2 && lado1 != base) {
		return Math.sqrt(lado1 ** 2 - (base / 2) ** 2);
	}
};
// Función llamada en el HTML
const alturaTrianguloIsosce = () => {
	const lado1 = parseFloat(document.getElementById('isolado1').value),
		lado2 = parseFloat(document.getElementById('isolado2').value),
		base = parseFloat(document.getElementById('isobase').value),
		altura = trianguloIsosceles(lado1, lado2, base);
	const result = document.getElementById('resultIso');
	if (altura != undefined) {
		// alert(altura)
		result.innerText = `La altura es de ${altura}`;
	} else {
		// alert('Lo siento, has ingresado un triangulo que no es isosceles')
		result.innerText = `Lo siento, has ingresado un triangulo que no es isosceles`;
	}
};
