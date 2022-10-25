//area al cuadrado
//funciones
console.group("cuadrado");
const lado=5;
function areaCuadrado(lado){
    return lado*lado;
    }
    console.log(areaCuadrado(lado));
console.groupEnd();
//mostrar en HTML
//Calcular
function calcularAreaCuadrado(){
    const entrada=document.getElementById("InputCuadrado");
    const lado=entrada.value;
    const area=areaCuadrado(lado);
    alert(area);
    
}
//area de la esfera
console.group("esfera");
const PI=Math.PI;
const radio=4; 
function areaEsfera(radio){
    return 4*PI*radio*radio;
    }
    console.log(areaEsfera(radio));
console.groupEnd();
//mostrar en HTML
//Calcular
function calcularAreaEsfera(){
    const entrada=document.getElementById("InputEsfera");
    const radio=entrada.value;
    const areaE=areaEsfera(radio);
    alert(areaE);
    
}
