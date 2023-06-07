function BinarySearch(arr, value, result = []) {
  // Tu código aquí
    //preguntamos si el value existe en el arr
if(!arr.includes(value))return "Value not found";
let medio=Math.floor(arr.length/2-1);
//se debe de usar spreat operator
//let copy=arr;
//asi tengo una copia exacta y no la referencia
let copy=[...arr];

while(value!==copy[medio]){
  //preguntamos si es menor a value
  if((copy.length-1)%2===0){
    //pusheo el primero
    result.push(copy.shift())
  }//si es mayor a value
  else{
    //pusheo el ultimo
    result.push(copy[medio])
    copy=copy.slice(0,copy.length/2)
    medio=Math.floor(copy.length/2-1)
  }
}
result.push(copy[medio])
return result
}

module.exports = BinarySearch; 
