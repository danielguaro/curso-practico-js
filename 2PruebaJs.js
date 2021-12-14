/* 
  Variables y operaciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una variable y para qué sirve? 
    R/ Espacio en memoria en el que se almacena información

¿Cuál es la diferencia entre declarar e inicializar una variable?
    R/Declarar: separar un espacio en memoria.
        let variable;
    Inicializar: Indicar que se almacenará información de dicho espacio en memoria
        variable = 'soy una variable';

¿Cuál es la diferencia entre sumar números y concatenar strings?
    Sumar numeros: realizar una operación matematica,
        let sumar = 4+4 // 8
    concatenar: juntar dos o mas strings
        let concatenar = '4' + '4' // '44' 
¿Cuál operador me permite sumar o concatenar?
    El operador + 
2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

Nombre -->const, string
Apellido -->const, string
Nombre de usuario en Platzi -->let, string
Edad -->const, number
Correo electrónico -->const, string
Mayor de edad -->const, boolean
Dinero ahorrado -->let, number (float)
Deudas -->let, number (float)
3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

Nombre completo (nombre y apellido)
    const nombre = 'Daniel ';
    const apellido = 'Guarín';
    const nombreCompleto = nombre + apellido
Dinero real (dinero ahorrado menos deudas)
    let dinero = 50;
    let deudas = 10;
    let dineroReal = dinero - deuda;
Funciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una función? 
    R/ parte de código que calcula un valor o acción de forma independiente al resto del programa
¿Cuándo me sirve usar una función en mi código?
    R/ Cuando tengo código que es reiterativo en un programa
¿Cuál es la diferencia entre parámetros y argumentos de una función?
    R/ Parámetros: variables que defino como requeridas dentro de una función
       Argumentos: el valor que le indico a la variable establecida en la función
    function hola(parametros) {
        console.log(`hola ${parametro}`);
    }
    hola(argumento);
2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";
console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function fullNameAndNickn(name, lastname, nickname){
    console.log(`Mi nombre es ${name} ${lastname}, pero prefiero que me digas {$nickname}`)
}
fullNameAndNickn("Juan David", "Castro Gallego", "juandc");


Condicionales
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una condicional? 
    R/ una instrucción o un grupo de estas, que se ejecutarán según el resultado que se tenga
¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
    R/if-else: Recorre una serie de instrucciones hasta finalizarlas.
      switch: Recorre los casos que uno ingrese, pero si el primer caso es el que cumple, este para el recorrido y sale.
      operadores ternarios: similar al if else
¿Puedo combinar funciones y condicionales?
    R/ Si
Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:


switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

    R/
    const tipoDeSuscripcion = "Basic";
    if (tipoDeSuscripcion === 'Free'){
        console.log("Solo puedes tomar los cursos gratis");
    } else if (tipoDeSuscripcion === "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    } else if (tipoDeSuscripcion === "Expert") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    } else if (tipoDeSuscripcion === "ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    } else {
        console.log('Lo sentimos, no contamos con ese tipo de suscripción');
    }
3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
        if (tipoDeSuscripcion === 'Free'){
        console.log("Solo puedes tomar los cursos gratis");
    }  if (tipoDeSuscripcion === "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }  if (tipoDeSuscripcion === "Expert") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }  if (tipoDeSuscripcion === "ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    } 
Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

Ciclos
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un ciclo? 
    R/ Serie de instrucciones que se repiten hasta cumplir una condición.
¿Qué tipos de ciclos existen en JavaScript?
    R/ 2 , for, con sus derivados y while con sus derivados
¿Qué es un ciclo infinito y por qué es un problema?
    R/ciclos cuya condición no se puede cumplir nunca, son un problema por que consumen todos los recursos del equipo y como su nombre lo indica, no paran.
¿Puedo mezclar ciclos y condicionales?
    R/ Si
2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
    R/
    let i = 0
    while ( i < 5) {
        console.log("El valor de i es: " + i);
        i++;
    }
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
    R/
    let i = 10
    while (i >=2) {
        console.log("El valor de i es: " + i);
        i--;
    }
3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

Pista: puedes usar la función prompt de JavaScript.
    let suma = prompt('cuanto es 2 + 2: ');
    suma = Number(suma);
    while (suma != 4) {
        console.log('vuelve a intentarlo')
        suma = prompt('cuanto es 2 + 2: ');
        suma = Number(suma);
    }
    console.log('lo lograste!');

Listas
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un array? 
    R/ Espacio en memoria que puede almacenar una lista de información, representado por [], los cuales pueden ser Number, strg, objetos, booleans e incluso arrays dentro de arrays
¿Qué es un objeto? 
R/ Espacio en memoria que almacena key y keyvalues, representado por {}, los keyValue pueden ser Number, strg, objetos, booleans e incluso arrays
¿Cuándo es mejor usar objetos o arrays?
    R/ Según la necesidad y el tipo de proyecto a abordar, 
¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
    R/ Si
2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
    R/ 
      cualquierArray = ['primer','segundo','tercero'];
      function recibe(array){
        console.log(array[0])
      }
    recibe(cualquierArray);

3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

    R/
    cualquierArray = ['primer','segundo','tercero'];
    function recibe(array){
        for (dato of array) {
            console.log(dato)
        }
    }
    recibe(cualquierArray);

4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
*/
cualquierArray = ['primer','segundo','tercero'];
    function recibe(array){
        for (dato of array) {
            console.log(dato)
        }
    }
    recibe(cualquierArray);