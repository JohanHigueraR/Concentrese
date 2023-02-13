var nivel1 = 20;
var nivel2 = 30;
var nivel3 = 40;
var unidades = document.getElementsByClassName("unidad");
var ArregloDesordenado = [];
function iniciarNivel(nivel) {
  /* Esta funcion crea los divs de las cartas dentro de un contenedor principal que tiene el id tabla */
  let tabla = document.getElementById("tabla");
    tabla.innerHTML = '';
  for (i = 0; i <= nivel - 1; i++) {
    /* nivel (declarado en variable global) es la cantidad de tarjetas que se van a cargar, en este caso es nivel 1 entonces el for itera 20 veces creando 20 divs */
    tabla.innerHTML +=
      '<div class="unidad cartaDisabled" id="carta' + i + '"></div>';
  }
  switch (nivel){
    case nivel1:
      tabla.classList.add("nivel1")
      break;
    case nivel2:
      tabla.classList.add("nivel2")
      break;
    case nivel3:
      tabla.classList.add("nivel3")
      break; 
    case nivel4: 
      tabla.classList.add("nivel4")
      break; 
  }
}
window.onload = iniciarNivel(nivel1); // con este comando la funcion se ejecuta instantaneamente apenas la pagina cargue

function CrearAleatorio(max) {
  /* Esta funcion me crea un arreglo desordenado de acuerdo al nivel seleccionado, en este caso es un arreglo de 20 posiciones con valores aleatorios */
  for (i = 0; ArregloDesordenado.length <= max - 1; i++) {
    /* ArregloDesordenado se inicia como un array vacio declarado globalmente al comienzo */
    let RandomNum = Math.floor(
      Math.random() * max
    ); /* RandomNum es la forma de crear un numero aleatorio teniendo en cuenta que max es el limite, en este caso 20 */
    if (ArregloDesordenado.includes(RandomNum)) {
      /* Se utiliza el if para que el arreglo no tenga valores repetidos el includes verifica si el numero(RandomNum) se encuentra en el arreglo(ArregloDesordenado)*/
    } else {
      ArregloDesordenado.push(RandomNum);
      /* Cuando se confirma que no es un numero repetido se agrega el valor añ ArregloDesordenado */
    }
  }
  return ArregloDesordenado; /* Devuelve el valor del arreglo que necesitaremos mas adelante */
}
function distribuir() {
  /* Esta funcion distribye las cartas de forma aleatoria, con la condicion que deben ser pares y sean distribuidas equitativamente para no tener muchas cartas de un mismo diseño */
  let ArrayRandom = CrearAleatorio(
    unidades.length
  ); /* llamamos la función anterior para tener un arreglo desordenado de 20 posiciones */
  /* Unidades esta declarado globalmente, es un array con todas las tarjetas creadas, en este caso 20 tarjetas */
  let Porcion = unidades.length / 5;
  /* Tengo 5 diseños de cartas, por lo tanto tomo el total de cartas (20) y las divido por la cantidad de diseños, para así tener una distribución equitativa */
  for (i = 0; i <= ArrayRandom.length - 1; i++) {
    let unidadEspecifica = document.getElementById(
      "carta" + ArrayRandom[i] + ""
    );
    /* unidadEspecifica me trae un div con un id totalmente aleatorio, debido a que el for itera 20 veces me trae las 20 tarjetas desordenadas */
    if (i <= Porcion - 1) {
      unidadEspecifica.classList.add("mario");
      /* Aca evaluo el valor de i, si esta entre la iteración 0 y la 4 le asigna la clase mario a las iteraciones correspondientes */
    } else if (i <= Porcion * 2 - 1) {
      unidadEspecifica.classList.add("honguito");
      /* Aca evaluo el valor de i, si esta entre la iteración 4 y la 8 le asigna la clase honguito a las iteraciones correspondientes */
    } else if (i <= Porcion * 3 - 1) {
      unidadEspecifica.classList.add("pacman");
      /* Aca evaluo el valor de i, si esta entre la iteración 8 y la 12 le asigna la clase pacman a las iteraciones correspondientes */
    } else if (i <= Porcion * 4 - 1) {
      unidadEspecifica.classList.add("carita");
      /* Aca evaluo el valor de i, si esta entre la iteración 12 y la 16 le asigna la clase carita a las iteraciones correspondientes */
    } else {
      unidadEspecifica.classList.add("moneda");
      /* Aca evaluo el valor de i, si esta entre la iteración 16 y la 20 le asigna la clase moneda a las iteraciones correspondientes */
    }
  }
}
distribuir();

function MostrarCarta() {
  for (i = 0; i <= unidades.length - 1; i++) {
    let carta = document.getElementById("carta" + i);
    carta.addEventListener("click", function () {
      carta.classList.remove("cartaDisabled");
      
    });
  }
}
MostrarCarta();

let contador = [];
let contadorAciertos = [];
function OcultarCarta() {
    for (i = 0; i <= unidades.length - 1; i++) {
      let carta = document.getElementById("carta" + i);
      carta.addEventListener("click", function PrimeraCarta() {
      if(contador[0] == carta && contador.length<2){
      }
      else{
        contador.push(carta);
      }
      if (contador.length == 2){
        let valMoneda1 = contador[0].classList.contains("moneda");
        let valMoneda2 = contador[1].classList.contains("moneda");
        let valMario1 = contador[0].classList.contains("mario");
        let valMario2 = contador[1].classList.contains("mario");
        let valPacman1 = contador[0].classList.contains("pacman");
        let valPacman2 = contador[1].classList.contains("pacman");
        let valCarita1 = contador[0].classList.contains("carita");
        let valCarita2 = contador[1].classList.contains("carita");
        let valHonguito1 = contador[0].classList.contains("honguito");
        let valHonguito2 = contador[1].classList.contains("honguito");
        if (valCarita1 == true && valCarita2 == true) {
          contadorAciertos.push(contador[0]);
          contadorAciertos.push(contador[1]);
          setTimeout(AgregarClaseAcierto,500)  
        }
        if (valHonguito1 == true && valHonguito2 == true) {
          contadorAciertos.push(contador[0]);
          contadorAciertos.push(contador[1]);
          setTimeout(AgregarClaseAcierto,500)
          
        }
        if (valPacman1 == true && valPacman2 == true) {
          contadorAciertos.push(contador[0]);
          contadorAciertos.push(contador[1]);
          setTimeout(AgregarClaseAcierto,500)
         
        }
        if (valMario1 == true && valMario2 == true) {
          contadorAciertos.push(contador[0]);
          contadorAciertos.push(contador[1]);
          setTimeout(AgregarClaseAcierto,500)
         
        }
        if (valMoneda1 == true && valMoneda2 == true) {
          contadorAciertos.push(contador[0]);
          contadorAciertos.push(contador[1]);
          setTimeout(AgregarClaseAcierto,500)
        } else {
            setTimeout(AgregarClaseError,500)     
        }
      }
      else if(contador.length>2){
        setTimeout(AgregarClaseError,10)
      }
    });
  }
}
OcultarCarta();
function AgregarClaseAcierto(){
    
        for (i = 0; i <= contadorAciertos.length-1; i++) {
          contadorAciertos[i].classList.add("cartaAcierto");
        }  
        contador=[]   
        contadorAciertos=[]  
}
function AgregarClaseError(){
        for (i = 0; i <= contador.length-1; i++) {
          contador[i].classList.add("cartaDisabled");
        }
        contador=[];
}
 
    
var time; 
var on = false; 
var seconds = 0 ;
var minutes = 0 ;
     
function startTime(){
seconds++;
time = setTimeout("startTime()",1000);
if(seconds > 59)  {seconds = 0; minutes++;}
document.getElementById("minutes").value = minutes + ' :';
// Mostar segundos
document.getElementById("seconds").value = seconds;// Mostar segundos
}
    
var Bandera = true;
function iniciarTiempo(){
  if(Bandera){
    for(i=0;i<= unidades.length-1;i++){
      let carta = document.getElementById("carta" + i);
      carta.addEventListener("click", function iniciar(){
        if(Bandera){
          startTime()
        }
        
        Bandera = false;
      })
    }
  }
    
}
iniciarTiempo()
var validador = [];
function pasarNivel(){
unidades = document.getElementsByClassName("unidad");
if(validador.length + 2 == unidades.length){
  document.getElementById("minutesModal").value = minutes + ' :';
// Mostar segundos
document.getElementById("secondsModal").value = seconds;// Mostar segundos
  
  $('#modalExito').modal('show');
  clearTimeout(time)

}
      for(i=0; i<=unidades.length-1; i++){
      if(unidades[i].classList.contains('cartaAcierto')){
        if(!validador.includes(i)){
          validador.push(i)
        }
      }
      else{
        
      }
    }
    
}
document.getElementById('tabla').addEventListener('click',pasarNivel)
document.getElementById('reiniciar').addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
  location.reload();
});
document.getElementById('reiniciarModal').addEventListener('click', _ => { // el _ es para indicar la ausencia de parametros
  location.reload();
});
document.getElementById("siguienteModal").addEventListener('click',function(){
  nivel1= nivel1 + 10;
  $('#modalExito').modal('hide'); // cerrar
  iniciarNivel(nivel1)
    
})


   
  



