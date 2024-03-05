function rotarNumero() {
    var numero = prompt("Ingrese un número: ");
    
    // convertir el número a una cadena para manipular los dígitos
    var numeroStr = numero.toString();
    
    // obtener el último dígito y eliminarlo del número original
    var ultimoDigito = numeroStr.slice(-1);
    numeroStr = numeroStr.slice(0, -1);
    
    // concatenar el último dígito al principio del número
    var nuevoNumero = ultimoDigito + numeroStr;
    
    // mostrar el resultado en la consola
    console.log("Número original: " + numero);
    console.log("Número rotado: " + nuevoNumero);
}
rotarNumero();