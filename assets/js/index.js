// SECTION 1 MOSTRAR BORDE ROJO Y ELIMINAR BORDE ROJO
const imagen1 = document.querySelector("#img1"); // selecciona la imagen
imagen1.addEventListener("click", mostrarBorde); // evento de escucha click en la imagen1 con función
let border = false; // con let por ser variable

function mostrarBorde() {
  // función que hacer con if y else
  if (border == false) {
    // si variable border es false
    imagen1.style.border = "solid 2px red"; // muestra borde
    border = true;
  } else {
    // si no
    imagen1.style.border = "none"; // quita el borde
    border = false;
  }
}

// SECTION 2 USUARIO PUEDE INGRESAR HASTA 10 STICKERS
const in1 = document.querySelector("#in1"); // se selecciona id in1
const in2 = document.querySelector("#in2"); // se selecciona id in2
const in3 = document.querySelector("#in3"); // se selecciona id in3
const comprobar = document.querySelector("#btn1"); // se selecciona id btn1
const textoo = document.querySelector("#parrsticker"); // se selecciona de id parrsticker

comprobar.addEventListener("click", verificarSticker); // evento escucha click y ocupa funcion

function verificarSticker() {
  const v1 = Number(in1.value); // convertir a Number
  const v2 = Number(in2.value); // convertir a Number
  const v3 = Number(in3.value); // convertir a Number

  const sumar = v1 + v2 + v3; // para sumar

  if (v1 < 0 || v2 < 0 || v3 < 0) {
    // cualquiera de los tres números no pueden ser menores a 0, se comienza por el false
    return (textoo.innerHTML = "Los números deben ser mayores o igual a 0"); // con return se detiene, puede seguir o no
  }

  if (sumar > 10) {
    // si la suma es mayor a 10, desde 11 hacia arriba
    textoo.innerHTML = "Llevas demasiados stickers";
  } else {
    // si lleva <=10 stickers, de 0 a 10 stickers
    textoo.innerHTML = "Llevas " + sumar + " stickers";
  }
}

// SECTION 3 INGRESAR PASSWORD
const i1 = document.querySelector("#s1"); //select 1
const i2 = document.querySelector("#s2"); // select 2
const i3 = document.querySelector("#s3"); //select 3
const res = document.querySelector("#respuesta"); // para la respuesta
const bingreso = document.querySelector("#ing"); // boton de ingreso

bingreso.addEventListener("click", ingreso); // click boton de ingreso con funcion

function ingreso() {
  // funcion

  if (i1.value == 9 && i2.value == 1 && i3.value == 1) {
    // compara password 911
    res.innerHTML = "Password 1 correcto";
  } else if (i1.value == 7 && i2.value == 1 && i3.value == 4) {
    // compara password 714
    res.innerHTML = "Password 2 es correcto";
  } else {
    res.innerHTML = "Password incorrecto";
  }
}
