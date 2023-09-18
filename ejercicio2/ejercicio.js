let confirm;
let contador = 0;
let mayores = 0;
let menores = 0;
do {
    let nombre = prompt("Ingrese su nombre");
    let documento = parseFloat(prompt("Ingrese su documento"));
    let edad = parseFloat(prompt("Ingrese su edad"));
    confirm = prompt("Ingrese si, si desea agregar más datos");
    contador++;

    if (edad >= 18) {
        mayores++;
    } else {
        menores++;
    }

    console.log("Nombre", nombre, "\nDocumento", documento,"\nEdad",edad);
} while (confirm.toLowerCase()=== "si" );
console.log("numero de personas son",contador);
console.log("numero de personas mayores son",mayores);
console.log("numero de personas menores son",menores);

/*[]
\n
() 
""
= */