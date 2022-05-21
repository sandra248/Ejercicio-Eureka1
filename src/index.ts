let clave: string = "eureka";
let claveUsuario: string | null = prompt("Ingrese su clave");
let intentos: number = 0;

while (intentos < 3) {
  if (claveUsuario === clave) {
    console.log("Salio del programa");
    break;
  } else {
    intentos++;
    claveUsuario = prompt("CLAVE INCORRECTA, intentelo nuevamente");
  }
  if (intentos === 3 && claveUsuario !== clave) {
    console.log("USUARIO BLOQUEADO");
  }
}
