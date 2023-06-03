let visited=[];
function SolveGraph(graph, start, target) {
  // Tu código aquí
  //primero nesesito saber si el parametro start existe como propiedad en graph.
  if(!Boolean(graph[start])){visited=[]; return false};
  //comprobamos si el nodo de inicio es = al nodo a destino
  if(start===target){visited=[]; return true}
//preguntamos si el visiteday no incluye start,si no lo incluye, lo pushea.
// Esto se hace para llevar un registro de los nodos encontrados en las ejecuciones.
    !visited.includes(start)&&visited.push(start)
//preguntamos si graph[start] incluye alguna de los valores anteriores
let bucleInfinit=visited.some(cur=>graph[start].includes(cur))
//si lo incluye significa que hay un blucle.
if(bucleInfinit){visited=[]; return false}
//preguntamos si el visiteday incluye el target
  if(graph[start].includes(target)){visited=[];return true};
//sigue la recursividad.
  return SolveGraph(graph,graph[start][graph[start].length-1],target)
  //se reseta el visiteday antes de retornar para que no afecte a la segunda funcion.
}

module.exports = SolveGraph;
