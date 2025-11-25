/**
 * Calcular el área del círculo
 */
function area_circulo(){
    let r = document.getElementById("radio").value;
    let area = Math.PI * ( r * r );
    document.getElementById("area_cir").innerHTML = "El área del círculo es: " + area;
}
/**
 * Calcular el área de la cometa
 */
function area_cometa(){
    let D = document.getElementById("D").value;
    let d = document.getElementById("d").value;
    let area = ( D * d ) / 2;
    document.getElementById("area_com").innerHTML = "El área de la cometa es: " + area;
}
/**
 * Calcular el área del cuadrado
 */
function area_cuadrado(){
    let a = document.getElementById("lado").value;
    let area = a * a;
    document.getElementById("area_cua").innerHTML = "El área del cuadrado es: " + area;
}
/**
 * Calcular el área del paralelogramo
 */
function area_paralelogramo(){
    let b = document.getElementById("base").value;
    let h = document.getElementById("altura").value;
    let area = b * h;
    document.getElementById("area_parale").innerHTML = "El área del paralelogramo es: " + area;
}
/**
 * Calcular el área del rectángulo
 */
function area_rectangulo(){
    let b = document.getElementById("base").value;
    let a = document.getElementById("altura").value;
    let area = b * a;
    document.getElementById("area_rect").innerHTML = "El área del rectángulo es: " + area;
}
/**
 * Calcular el área del rombo
 */
function area_rombo(){
    let D = document.getElementById("D").value;
    let d = document.getElementById("d").value;
    let area = ( D * d ) / 2;
    document.getElementById("area_rom").innerHTML = "El área del rombo es: " + area;
}
/**
 * Calcular el área del trapecio
 */
function area_trapecio(){
    let B = document.getElementById("B").value;
    let b = document.getElementById("b").value;
    let h = document.getElementById("altura").value;
    let area = ((Number(B) + Number(b)) * h) / 2
    document.getElementById("area_trap").innerHTML = "El área del trapecio es: " + area;
}
/**
 * Calcular el área del triángulo
 */
function area_triangulo(){
    let b = document.getElementById("base").value;
    let h = document.getElementById("altura").value;
    let area = ( b * h ) / 2;
    document.getElementById("area_trian").innerHTML = "El área del triángulo es: " + area;
}