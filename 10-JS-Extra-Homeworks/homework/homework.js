// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var MatrizFinal=[];
  for(clave in objeto){
    MatrizFinal.push([clave,objeto[clave]]);
  }
  return MatrizFinal;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var Arr=[];
  for (var i=0; i<2*string.length; i++){
    if((Arr.includes([string[i],string.split(string[i]).length].toString()))){
      continue;
    }else{
      Arr.push([string[i],string.split(string[i]).length].toString());
  }
  }

const Objeto={};
for (var j=0; j<Arr.length-1;j++){
  Objeto[Arr[j][0]]=parseInt(Arr[j][2])-1;
}
return Objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayusculas='';
  var minusculas='';
  for(var i=0; i<s.length;i++){
    if(s[i]===s[i].toUpperCase()){
      mayusculas=mayusculas+s[i];
    } else{
      minusculas=minusculas+s[i];
    }
  }
  return mayusculas+minusculas;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var palabras=str.split(' ');
  var stringInvertidas="";
  for(var i=0; i< palabras.length; i++){
    var invertida='';
    for(var j=palabras[i].length-1;j>=0; j--){
      invertida=invertida+palabras[i][j];
    }
    stringInvertidas=stringInvertidas+' '+invertida;
  }
  return stringInvertidas.slice(1,stringInvertidas.length);
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numString=numero.toString();
  var numStringInvertido='';
  for(var i=numString.length-1;i>=0; i--){
    numStringInvertido=numStringInvertido+numString[i];
  }

  if(numString==numStringInvertido){
    return "Es capicua";
  }else{
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  function vuelveString(Array){
    var StringSolo=Array.reduce(function(acc,elemento){
    acc=acc+elemento;
    return acc;
    });
    return StringSolo;
  }
  var Sin_a=(cadena.split('a'));
  var String_Sin_a=vuelveString(Sin_a);
  
  var Sin_b=String_Sin_a.split('b');
  var String_Sin_b=vuelveString(Sin_b);
  var Sin_abc=String_Sin_b.split('c');
  
  return vuelveString(Sin_abc);
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
    for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; ++j){
      if(arr[i].length>arr[j].length){
        let auxiliar=arr[i];
        arr[i]=arr[j];
        arr[j]=auxiliar;
      }
  }
}
return arr;
}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var intercepto=[];
  for(var i=0; i<arreglo1.length; i++){
    for(var j=0; j<arreglo2.length;j++){
      if(arreglo1[i]==arreglo2[j]){
        intercepto.push(arreglo1[i]);
      }
    }
  }
  return intercepto;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

