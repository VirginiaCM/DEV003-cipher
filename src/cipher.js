const cipher = {

  encode : function (posiciones, text) {
    
    // condicional de los parámetros offset y text
    if(typeof posiciones !=='numero' || typeof text !== 'string') {
      throw new TypeError (); 
      
    }

    let actualPos = ""; // se crea una variable posiciones del alfabeto (0-65)
    let nuevaPos= ""; // se crea variable para aplicar la formula del algoritmo
    let textcodif= ""; // devuelve el resultado final

     
    
  
  }
  // ...
};

export default cipher;
