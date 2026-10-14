// 1. Dato tipo string (texto)
const nombreUsuario = prompt("Por favor, ingresá tu nombre:");

// 2. Primer dato numérico (lo convertimos con parseInt o Number)
const anioNacimiento = parseInt(prompt("Ingresá tu año de nacimiento:"), 10);

// 3. Segundo dato numérico
const anioActual = parseInt(prompt("Ingresá el año actual:"), 10);
// --- 1. Operación aritmética simple ---
const edad = anioActual - anioNacimiento;

// --- 2. Transformación de texto y concatenación ---
// Opción recomendada: Template literals (con comillas invertidas `` y ${})
const mensajeBienvenida = `Hola ${nombreUsuario}, tenés aproximadamente ${edad} años.`;

// También válido usando el operador +:
// const mensajeBienvenida = "Hola " + nombreUsuario + ", tenés aproximadamente " + edad + " años.";
// Mostrar el resultado en un cuadro de diálogo y en la consola del navegador
alert(mensajeBienvenida);
console.log(mensajeBienvenida);
