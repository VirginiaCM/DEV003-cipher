const cipher = {

  encode : function (posiciones, text) {
    
    // condicional de los parámetros offset y text
    if(typeof posiciones !=='numero' || typeof text !== 'string') {
      throw new TypeError (); 

         
    }

    let actualPos = ""; // se crea una variable posiciones del alfabeto (0-65)
    let nuevaPos= ""; // se crea variable para aplicar la formula del algoritmo
    let textcodif= ""; // devuelve el resultado final

    //mediante un bucle for iteramos los elementos de text
    for(let i=0; text.length; i++){
      
      actualPos = text.charAt(i);

      //condicional para hallar posición ASCII
      if(actualPos >= 65 && actualPos <= 90){
        nuevaPos = (actualPos - 65 + posiciones) % 26 - 65; // aplicamos formula cipher

      } else {
        (actualPos < 65 || actualPos > 90);

        nuevaPos += actualPos;
      }

      textcodif += String.fromCharCode (nuevaPos);
    }

    return textcodif;

    
    
    
      
    
  
  }
  
};

export default cipher;
