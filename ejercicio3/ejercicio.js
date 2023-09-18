let arreglo=prompt("Ingresar arreglo");
let ingresar=arreglo.split(",");
let opcion=parseInt(prompt("1. para eliminar \n2. para agregar  \n3. para imprimir "));

switch (opcion) {
    case 1:
        ingresar.shift();
        console.log("se elimino",ingresar);
        break;
    case 2:
        let nuevo=prompt("Ingrese un nuevo arreglo");
        ingresar.unshift(nuevo);
        console.log("se agrego el nuevo arreglo",ingresar);
        break;
    case 3:
        console.log(ingresar);
        break;
}














/*[]
\n
() 
""
= */