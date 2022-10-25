//Estructura de Datos y Ciclos (Array,for,while,do while)
let platos_tipicos=["cuy","asado huilense","mute","ajiaco","bandeja paisa","sancocho de pescado","mojarra frita"]
console.log(platos_tipicos)
console.log(platos_tipicos.length)
console.log(platos_tipicos[2])
platos_tipicos.pop()               //elimina el ultimo elemento
console.log(platos_tipicos)
platos_tipicos.push("trucha arcoiris")   //añadir elementos
console.log(platos_tipicos)
//ciclo for
for(let contador=0;contador<platos_tipicos.length;contador++){
    console.log(platos_tipicos[contador])
}
for(var plato of platos_tipicos){
    console.log(plato)
}
//funcion
function saludar(){
    return "hola";
}
//invocacion de la funcion
console.log(saludar());
let numero1=5;
let numero2=8;
function sumar(numero1,numero2){
    return numero1+numero2;
}
console.log(sumar(numero1,numero2))
console.log(sumar(20,30))


//while

function saludar(tripulante){

    console.log(`buenas noches,${tripulante}`);

}

let tripulantes=["mayerli","carlos","alvaro","corabed","gonzalo","deasy","hosman","jaime","jefferson","lina"];

let contador=0;

while(tripulantes.length>0){

    let tripulante=tripulantes.shift();

    saludar(tripulante);

}

//do while
let contador2=0;
do{
   saludar(tripulantes[contador2]) 
   contador2++;
   }
while (contador2<)

