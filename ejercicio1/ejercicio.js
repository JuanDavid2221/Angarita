let edades = [];
for (let index = 0; index < 10; index++) {
  let edad = parseInt(prompt("Ingrese edad"));
  edades.push(edad);
}
let menor = Math.min.apply(null, edades);
let mayor = Math.max.apply(null, edades);
let suma = edades.reduce((a, b) => a + b);
let promedio = suma / edades.length;

console.log("La edad menor es", menor);
console.log("La edad mayor es", mayor);
console.log("El promedio de edades es", promedio);

/*[]
() 
""
= */