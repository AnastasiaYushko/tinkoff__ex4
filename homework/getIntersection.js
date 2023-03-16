/**
 * Напишите функцию getIntersection(first, second), возвращающую
 * массив из общих значений массивов first и second.
 *
 * Результирующий массив должен быть отсортирован по возрастанию.
 *
 * Пример:
 * getIntersection([1, 3, 5, 7, 9], [1, 2, 3, 4]); //  [1, 3]
 * getIntersection([1, 1, 2], [2, 1, 1, 1]); // [1, 1, 2]
 *
 * @param  {number[]} first исходные массивы
 * @param  {number[]} second исходные массивы
 * @return {number[]} массив значений, отсортированный по возрастанию
 */
export function getIntersection(first, second) {
  const arrayIntersection = [];

  const firstArray = [...first];

  const secondArray = [...second];

  for (const i of firstArray) {
    const index = secondArray.indexOf(i);

    if (index !== -1) {
      arrayIntersection.push(i);
      delete secondArray[index];
    }
  }

  function compareNumeric(a, b) {
    if (a > b) { return 1; }
    if (a < b) { return -1; }
    return 0;
  }

  return arrayIntersection.sort(compareNumeric);
}
