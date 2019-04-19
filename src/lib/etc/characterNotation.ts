/**
 * @param str - The string to add character per unit.
 * @param unit -The number unit to seperate a given string.
 * @param character - The character to add in string per unit.
 * This function is created for the notation of money but, I added parameters for more usability.
 * It cuts a string by a unit from the length of string to insert a character.
 */

export const characterNotation = (str: string, unit: number, character: string) => {
  if (typeof str !== 'string') {
    return str;
  }

  const criteriaUnit = (Number(unit) && unit > 0) ? unit : 1;
  let criteriaIdx = str.length - criteriaUnit;

  while (criteriaIdx > 0) {
    const strLeng = str.length;
    str = `${str.substring(0, criteriaIdx)}${character}${str.substring(criteriaIdx, strLeng)}`;

    criteriaIdx -= criteriaUnit;
  }

  return str;
};