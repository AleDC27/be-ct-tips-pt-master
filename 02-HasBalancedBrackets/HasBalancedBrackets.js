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


/*
//Yesica
function HasBalancedBrackets(string) {
	//Leo condición necesaria
  	// if (string.length % 2 !== 0) return false;
  const stack = [];
  const openingBrackets = ["[", "(", "{"];
  const closingBrackets = ["]", ")", "}"];
  const matchingBrackets = {
    "]": "[",
    ")": "(",
    "}": "{",
  };
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const topBracket = stack.pop();
      if (topBracket !== matchingBrackets[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
​
//John (tricked - No nos llames, nosotros te llamamos)✖️
function HasBalancedBrackets(string) {
  if (string.length === 0) return true;
    const newString = string.trim().split("");
    let l = newString.length;
    if (l % 2 !== 0) return false;
    for (let i = 0; i < l; i++) {
      let charCode = newString[i].charCodeAt();
      if (charCode === 41 || charCode === 93 || charCode === 125) {
        let prevCharCode = newString[i - 1].charCodeAt();
        switch (charCode) {
          case 41:
            return prevCharCode === 40;
          case 93:
            return prevCharCode === 91;
          case 125:
            return prevCharCode === 123;
          default:
            return false;
        }
      }
    }
  } 
​
//Claudio
function HasBalancedBrackets(string) {
  let stack = [];
  let brackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "{" || string[i] === "[" || string[i] === "(") {
      stack.push(string[i]);
    } else {
      let last = stack.pop();
      if (string[i] !== brackets[last]) {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true; 
}
​
//Alejo
function HasBalancedBrackets(string) {
  const regex = /(\(\)|\[\]|\{\})/;
  
  while (regex.test(string)) {
    string = string.replace(regex, '');
  }
  return string.length === 0;
}
module.exports = HasBalancedBrackets;
​
console.log(HasBalancedBrackets("{[]()}")); //(true);
// console.log(HasBalancedBrackets("{[(])}"))//(false);
// console.log(HasBalancedBrackets("{[("))//(false);
// console.log(HasBalancedBrackets("{[([{()[]{}}])]}"))//(true);
// console.log(HasBalancedBrackets("{[]}}"))//(false);
// console.log(HasBalancedBrackets("}{[]()}"))//(false);
*/ 
