/* function intersection(arr1, arr2) {
  // Tu código aquí
  return arr1.filter(cur=>arr2.includes(cur))
} */

function intersection(arr1, arr2) {
  // Tu código aquí
  let all=[...arr1,...arr2];
  let duplicados=[];
  let unicos=new Set();
  
  for(let i=0;i<all.length;i++){
    if(unicos.has(all[i])){
      duplicados.push(all[i])
    }else{
      unicos.add(all[i])
    }
  }
  return duplicados;
}
intersection([1, 3, 5, 7, 10], [2, 3, 6, 8, 10, 20])//[3, 10],

intersection([1, 3, 4, 7], [2, 6, 8, 10, 20])//[]

intersection([7, 10, 3, 1, 5], [10, 6, 20, 3, 2, 8])//[3]

intersection([7, 10, 3, 1, 5], [10, 6, 20, 3, 2, 8])//[10]

module.exports = intersection;
