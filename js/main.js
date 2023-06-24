
function suma() {
    /*
    La variable a se encarga de capturar el primer valor
    La variable b se encarga de capturar el segundo valor
    La variable s realiza la operacion de suma de "a" y "b"
    */

    let a = 0;
    let b = 0;
    let s = 0;

    a = parseInt(prompt("Por favor, ingrese el primer valor: "));
    b = parseInt(prompt("Por favor, ingrese el segundo valor: "));
    s = a + b;

    alert("El resultado de la suma es " + s);
}
function opBasicas(){
    /*
    La variable a se encarga de recibir el primer valor
    La variable b se encarga de capturar el segundo valor 
    La variable s recibe las diferentes operaciones que se van a realizar
    */
   
    let a = 0;
    let b = 0;
    let s = 0;

    a = parseInt(prompt("Por favor, ingrese el primer valor: "));
    b = parseInt(prompt("Por favor, ingrese el segundo valor: "));
    s = a + b;

    alert("El resultado de la suma es " + s);
    /*
    En este momento cambiamos la formula matematica para convertirla en una operacion de resta que se guarda en la variable s y posteriormente es mostrada en pantalla
    */
    s = a - b;
    alert("El resultado de la resta es " + s);
    /*
    En este momento cambiamos la formula matematica para convertirla en una operacion de division que se guarda en la variable s y posteriormente es mostrada en pantalla
    */
    s = a / b;
    alert("El resultado de la division es " + s);
    /*
    En este momento cambiamos la formula matematica para convertirla en una operacion de multiplicacion que se guarda en la variable s y posteriormente es mostrada en pantalla
    */
    s = a * b;
    alert("El resultado de la multiplicacion es " + s);
}
function cuaNumero(){
    /*
    La variable a se encarga de capturar un valor
    La variable c guarda el resultado de la operacion realizada
    */

    let a = 0;
    let c = 0;

    a = parseInt(prompt("Ingrese el valor: "));
    c = a * a;

    alert("El cuadrado del numero " + a + " es: " + c);    
}
function aTriangulo(){
    /*
    La variable a se encarga de recibir la altura del triangulo
    La variable b se encarga de recibir la base del triangulo
    La variable area se encarga de guardar el resultado de la operacion matematica.
    */

    let b = 0;
    let a = 0;
    let area = 0;

    a = parseInt(prompt("Ingrese la altura del triangulo: "))
    b = parseInt(prompt("Ingrese la base del triangulo: "))

    area = (b * a) / 2;

    alert("El area del triangulo es " + area);
}
function InvCapital(){
    /*
    La variable i recibe la cantidad de dinero que el usuario desea invertir
    La varible a recibe el dato de la cantidad de años 
    La variable g recibe el resultado de la operacion matematica para calcular la ganancia
    */

    i = 0;
    a = 0;
    g = 0;

    i = parseint(prompt("Ingrese la cantidad de dinero que desea invertir: "));
    a = parseInt(prompt("Ingrese la cantidad de años: "));
    a = a*12
    g = i * (0.017 * a);

    alert("La ganancia es: " + g);
    /*
    En este momento vamos a usar variable g para guardar el dato de la inversion mas la ganancia y despues mostrarla en pantalla.
    */
    g = i + g;

    alert("La inversion mas la ganancia es: " + g)
}
function AñoNacimiento(){
    /*
    La variable e captura el dato de la edad del usuario
    La variable fa hace referencia a la fecha actual
    La variable r recice una el resultado de restar la fecha actual y la edad
    */

    e = 0;
    fa = 0;
    r = 0;

    e = parseInt(prompt("Ingrese su edad"));
    fa = parseInt(prompt("Ingrese la fecha actual: "));
    r = fa - e ;

    alert("Su fecha de nacimiento es: " +  r);
} 
function ConUnidades(){
    let metros = 0;
    let kilometros= 0;
    let pulgadas= 0;
    
    metros = parseInt(prompt("Ingrese la cantidad a convertir : "));
    kilometros = metros / 1000;
    pulgadas = metros * 39.37;

    alert('Esta unidad en kilometros es : ' + kilometros + ' Y en pulgadas es : ' + pulgadas);


}
function Mayorn(){
    let a = 0;
    let b = 0;
    
    a = parseInt(prompt("Ingrese el primer numero: "));
    b = parseInt(prompt("Ingrese el segundo valor: "));

    if( a > b){
        alert(a + " MAYOR QUE: > " + b);
    }else {
        alert(b + "MAYOR QUE " + a );
    } 
}
function Menorn(){
    let a = 0;
    let b = 0;
    let c = 0;

    a = parseInt(prompt("Ingrese el primer numero: "));
    b = parseInt(prompt("Ingrese el segundo valor: "));
    c = parseInt(prompt("Ingrese el tercer valor: "));

    if(a < b && a < c ){
        alert("El numero menor es: "  + a);
    }else if(b < a && b < c){
        alert("El numero menor es: " + b);
    }else if (c < a && c < b){
        alert("El numero menor es: " + c);
    }
}
function Descuento() {
    let val_compra = 0;
    let total = 0;
  
    val_compra = parseInt(prompt("Ingrese el valor de la compra: "));
  
  
    if (val_compra < 100000) {
      alert("Obtuvo un 10% de descuento");
      total = val_compra - (0.1 * val_compra);
    } else if (val_compra >= 100000 && val_compra <= 200000) {
      alert("Obtuvo un 30% de descuento");
      total = val_compra - (0.3 * val_compra);
    } else if (val_compra > 200000) {
      alert("Obtuvo un 50% de descuento");
      total = val_compra - (0.5 * val_compra);
    } else {
      alert("No se aplica descuento para el valor ingresado.");
      return; 
    }
  
    alert("El total a pagar es: " + total);
    alert("El total con el descuento es: " + total);
  }







