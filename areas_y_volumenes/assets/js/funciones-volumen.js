/**
 * Calcular el volumen del cilindro
 */
function volumen_cilindro(){
    let r = document.getElementById("radio").value;
    let h = document.getElementById("altura").value;
    let volumen = Math.PI * r * r * h;
    document.getElementById("vol_cilindro").innerHTML = "El volumen del cilindro es: " + volumen;
}
/**
 * Calcular el volumen del cono
 */
function volumen_cono(){
    let r = document.getElementById("radio").value;
    let h = document.getElementById("altura").value;
    let volumen = (Math.PI * r * r * h) / 3;
    document.getElementById("vol_cono").innerHTML = "El volumen del cono es: " + volumen;
}
/**
 * Calcular el volumen del cubo
 */
function volumen_cubo(){
    let a = document.getElementById("lado").value;
    let volumen = a * a * a;
    document.getElementById("vol_cubo").innerHTML = "El volumen del cubo es: " + volumen;
}
/**
 * Calcular el volumen de la esfera
 */
function volumen_esfera(){
    let r = document.getElementById("radio").value;
    let volumen = (4 / 3) * Math.PI * r * r * r;
    document.getElementById("vol_esfera").innerHTML = "El volumen de la esfera es: " + volumen;
}
/**
 * Calcular el volumen del paralelepípedo
 */
function volumen_paralelepipedo(){
    let l = document.getElementById("largo").value;
    let b = document.getElementById("base").value;
    let h = document.getElementById("altura").value;
    let volumen = l * b * h;
    document.getElementById("vol_paralelepipedo").innerHTML = "El volumen del paralelepipedo es: " + volumen;
}