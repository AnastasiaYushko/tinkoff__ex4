/**
 * Напишите функцию meanMode(numbers), принимающую массив чисел numbers
 * и возвращающую true, если среднее значение числового ряда равно
 * числу (или любому из чисел), встречающемуся чаще остальных. Иначе
 * вернуть false.
 *
 * Если есть несколько чисел, встречающихся одинаковое количество раз,
 * и чаще всех остальных, считать входящий массив невалидным и
 * возвращать false.
 *
 * Пример:
 * meanMode([1]) === true
 * meanMode([4, 4, 4, 6, 2]) === true
 * meanMode([1, 2, 3]) === false
 * meanMode([1, 1, 1, 2, 5]) === false
 * meanMode([]) === false
 *
 * Больше примеров в тестах.
 *
 * @param  {number[]} numbers массив целых положительных чисел.
 * @return {boolean}
 */
export function meanMode(numbers) {
  let sum = 0;

  const myMap = new Map();

  for (const num of numbers) {
    sum += num;
    if (!myMap.has(num)) {
      myMap.set(num, 1);
    } else {
      myMap.set(num, myMap.get(num) + 1);
    }
  }

  const maxNum = Math.max.apply(null, Array.from(myMap.values()));

  const count = Array.from(myMap.values()).filter(x => x === maxNum).length;

  const frequentNum = [...myMap.keys()].find(key => myMap.get(key) === maxNum);

  if (count === 1 && frequentNum === sum / numbers.length) {
    return true;
  }

  return false;
}
