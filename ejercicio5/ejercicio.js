let arreglo=prompt("Ingrese la palabra").toLowerCase();
contador=0;
for (let index = 0; index < arreglo.length; index++) {
    if (arreglo[index]=== "a") {
        contador++;
    }
}
if (contador > 0) {
    console.log("Total son", contador);

} else {
    console.log("no tiene la letra a");

}