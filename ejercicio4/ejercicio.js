let n1= parseFloat(prompt("ingrese un numero"));
let n2= parseFloat(prompt("ingrese otro numero"));
let opcion=parseInt (prompt("1. sumar \n2. restar  \n3. multiplicar \n4. dividir"));
switch (opcion) {
    case 1:
        let suma= n1+n2
        console.log("resultado es",suma);
        break;

    case 2: 
    let resta= n1-n2
    console.log("resultado es",resta);
    break;

    case 3: 
    let multiplicar= n1*n2
    console.log("resultado es",multiplicar);
    break;

    case 4: 
    let dividir= n1/n2
    console.log("resultado es",dividir);
    break;

    default:
        console.log("ingrese una opcion valida");
        break;
}