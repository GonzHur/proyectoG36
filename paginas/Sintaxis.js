console.log (4+7) //11
console.log("hola mundo")//hola mundo
console.log (4+"7")// 47
console.log (4*"7")//28

//datos prueba: numero, string, boolean, null, error indefinido, vector
numero=40
typeof numero
console.log(numero)
console.log(typeof(numero))
minombre="carlos m"
console.log(minombre)
console.log(typeof(minombre))
booleano=true
console.log(booleano)
console.log(typeof(booleano))
nulo=null
console.log(nulo)
console.log(typeof(nulo))
console.log(typeof carlos)
vector=[]
console.log(typeof(vector))
var edad=18
let estatura=1.96
console.log(edad)
console.log(estatura)
let tecnologias=["Python", "java", "HTML5", "CSS3"]
console.log(tecnologias)
console.log(tecnologias[2]) //imprime la posicion 2
let persona={
    nombre:"Carlos",
    edad:20    
}
console.log(persona)
console.log(typeof persona)
//operadores
let suma= 3+2
console.log(suma)
console.log(typeof suma)
let division= 3/2
console.log(division)
console.log(typeof division)
// operadores comparacion
let compara=3 ==="3"//compara dato y tipo de dato
console.log(compara)
let compara1=3 =="3"// compara solo el dato
console.log(compara1)
//operadores logicos
let compara2=5<6
let compara3=5>6
console.log(compara2&&compara3) //conector and &&
console.log(compara2||compara3) // conector or ||
console.log(compara2)
console.log(!compara2)
// condicionales
let nota = 3.9;
if (nota<3){
    calificacion="insuficiente"
}
else if (nota<4){
    calificacion="bien"
}
else if (nota<4.5||nota<4.9){
    calificacion="sobresaliente"
}
else {
    calificacion="excelente"
}
console.log(calificacion)
//switch
let nota1=2
switch(nota1){
    case 5: calificacion="excelente";
    break;
    case 4: calificacion="sobresaliente";
    break;
    case 3: calificacion="bien";
    break;
    case 2: calificacion="insuficiente";
    break;
    default:
        calificacion = "nota erronea";
}
console.log(calificacion)


