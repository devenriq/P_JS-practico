//Una variable es una manera de almacenar código de manera dinámica. Sirve para reutilizar el elemento guardado dentro de esta
//Entre la declaración e inicialización de una variable está el uso o la falta de este de la variable
//Al sumar números se está haciendo una operación matemática. Al concatenar, se está añadiendo caracteres a un valor tipo string
//El operador suma "+"

//string
//string
//string
//number
//string
//boolean
//string
//number

const nombre = "Enrique";
const apellido = "Palomino";
const usuarioPlatzi = "enrigios";
const edad = 25;
const eMail = "octepc.97@gmail.com";
const mayorEdad = true;
const dineroAhorrado = 1000;
const deudas = 0;

const nombreYDinero = () => {
  console.log(
    `Hola. Soy ${nombre} ${apellido} y tengo ${
      dineroAhorrado - deudas
    } soles(ahorro - deuda)`
  );
};

nombreYDinero();

//Una función es un bloque de código cuyo propósito es realizar una tarea concreta que luego se puede reutilizar en distintas partes del código
//Cuando se necesite reutilizar cierta lógica, cuando se quiera un resultado específico
//Los parámetros son las variables que van dentro de los paréntesis de las funciones y los argumentos son los elementos que irán en el cuerpo de la función para cumplir cierta función

const name = "Enrique";
const lastname = "Palomino";
const completeName = name + lastname;
const nickname = "Enri";

const myself = () => {
  console.log(
    "Mi nombre es " +
      completeName +
      ", pero prefiero que me digas " +
      nickname +
      "."
  );
};

myself();

//Una manera de evaluar si cierta sentencia es correcta (true) o no (false)
//Existen básicamente tres: if, while, do...while. El primero ejecutará el código que se le pase si la condición se cumple. El segundo ejecutará el código mientras cierta condición sea verdadera. El tercero ejecutará el código mientras cierta condición sea verdadera; pero, a diferencia del anterior, este condicional lo hará al menos una vez
//Si. Se puede construir una función que evalúe un control de flujo

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus") {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
}

//Una manera de iterar sobre una determinada cantidad de datos
//for, for...in, for...of
//un loop infinito es cuando la condicional que debe parar dicho bucle es true de forma permanente; de manera que su ejecución es infinita
//Se puede hacer

// for (let i = 0; i < 5; i++) {
//   console.log("El valor de i es: " + i);
// }

// for (let i = 10; i >= 2; i--) {
//   console.log("El valor de i es: " + i);
// }

let i = 0;

while (i < 5) {
  console.log("El valor de i es: " + i);
  i++;
}
