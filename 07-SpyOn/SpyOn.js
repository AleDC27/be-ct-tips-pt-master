function spyOn(fn) {
  // Tu código aquí
  let count = 0,elements = [],values = [];
  const spy = (...arg) => {
    elements = [...elements, ...arg];
    let value=fn(...arg)
    values.push(value);
    count++;
    return value;
  };
  spy.getCallCount = ()=>count;
  spy.wasCalledWith = x =>elements.includes(x);
  spy.returned = x => values.includes(x);
  return spy;
}

module.exports = spyOn;
