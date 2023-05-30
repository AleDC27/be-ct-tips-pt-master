// // Función auxiliar para verificar si un paréntesis de apertura y un paréntesis de cierre forman un par válido
// function isMatchingPair(open, close) {
//   return (
//     (open === '(' && close === ')') ||
//     (open === '[' && close === ']') ||
//     (open === '{' && close === '}')
//   );
// }

// function HasBalancedBrackets(string) {
//   //Tu código aquí
//   //creamos un stack para guardar solo los brackets que abren
//   let stack=[];
//   //recorremos el string
//   for(let i=0;i<string.length;i++){
//   //creamos una variable para tomar el bracket
//     let char = string[i];
//   //en caso de ser la que inicia la pusheamos
//     if (char === '(' || char === '[' || char === '{') {
//       stack.push(char);
//     }//en otro caso la comparamos para ver si coincide
//      else if (stack.length === 0 || !isMatchingPair(stack.pop(), char)) {
//        //si no coincide da false
//         return false;
//     }
//   }
//   //si el stack no es cero es por que sobraron o faltaron brackets, seria 
//   //false , de lo contrario seria true
//   return stack.length===0;
// }

//solucion extra con regex
function HasBalancedBrackets(string) {
  const regex = /(\(\)|\[\]|\{\})/;
  while (regex.test(string)) {
    string = string.replace(regex, '');
  }
  return string.length === 0;
}

module.exports = HasBalancedBrackets;
