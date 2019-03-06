/**
 * Initial ETC Codes
 */

// Array - difference: Implementation with Map
const difference = (array: any[], values: any[]) => {
  const arrayMap = new Map();
  const valuesMap = new Map(); 
  
  for (let i = 0, arrLeng = array.length; i < arrLeng; i++) {
    arrayMap.set(array[i], array[i]);
  }
  
  for (let j = 0, valuesLeng = values.length; j < valuesLeng; j++) {
    valuesMap.set(values[j], values[j]);
  }
  
  valuesMap.forEach(val => {
    if (val === arrayMap.get(val)) {
      arrayMap.delete(val);
    }
  });
  
  return [...arrayMap.values()];
};