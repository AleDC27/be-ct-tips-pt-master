//solucion propia
function MaxValue(shares) {
  // Tu código aquí

  if (shares.length < 2) {
    return 0;
  }

  let profits = 0;
  let x=shares[0];
  for (let i = 0; i < shares.length; i++) {
    let current = shares[i];
    let next = shares[i + 1];
    if (current < next) profits += next - current;
  }

  return profits;
}
console.log(MaxValue([4, 3, 2, 5, 11])); //9
console.log(MaxValue([23, 7, 3, 4, 8, 6])); //5
console.log(MaxValue([-23, -7, -3, -4, -8, -6])); //5

module.exports = MaxValue;

//----------------------------Complejidad Temporal = O(N^2)-----------------
// //Solucion grupal  //Complejidad Temporal = O(N^2)
// function MaxValue(shares) {
//   // Tu código aquí
//   //en caso de que el array este vacio
//   if (shares.length < 2) return 0;

//   //tomamos la mayor ganancia
//   let mayorProfits = shares[1] - shares[0];
//   //nesesitamos tomar el indice actual y el siguienta para comparalos
//   //lo terminamos un injdice antes para que el del final lo tome el segundo for
//   for (let i = 0; i < shares.length - 1; i++) {
//     //lo empezamos un indice adelante para que no choque con el primero
//     for (let j = 1; j < shares.length; j++) {
//       //restamos el valor next por el current asumiendo que el mayor
//       let profits = shares[j] - shares[i];
//       if (profits > mayorProfits) mayorProfits = profits;
//     }
//   }
//   return mayorProfits;
//    //Complejidad Temporal = O(N^2)
// }
// console.log(MaxValue([4, 3, 2, 5, 11])); //9
// console.log(MaxValue([23, 7, 3, 4, 8, 6])); //5
// console.log(MaxValue([-23, -7, -3, -4, -8, -6]))//51

// module.exports = MaxValue;

//----------------------------Complejidad Temporal = O(N)-----------------

// function MaxValue(shares) {
//   // Tu código aquí
//   if (shares.length < 2) {
//     return 0;
//   }

//   let maxGanancia = 0;
//   let minPrice = shares[0];
//   for (let i = 1; i < shares.length; i++) {
//     let currentPrice = shares[i];
//     minPrice = Math.min(minPrice, currentPrice);
//     let potentialProfit = currentPrice - minPrice;
//     maxGanancia = Math.max(maxGanancia, potentialProfit);
//   }
//   return maxGanancia;

//   //Complejidad Temporal = O(N)
// }

// console.log(MaxValue([4, 3, 2, 5, 11])); //9
// console.log(MaxValue([23, 7, 3, 4, 8, 6])); //5
//console.log(MaxValue([-23, -7, -3, -4, -8, -6]))//51
