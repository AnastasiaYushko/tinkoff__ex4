/**
 * Напишите функцию mergeNumbers(number), складывающую
 * все цифры числа number до тех пор, пока не получится
 * однозначный результат.
 *
 * Пример:
 * mergeNumbers(1) === 1
 * mergeNumbers(10001) === 2
 * mergeNumbers(15334232) === 5
 * mergeNumbers(50349814743854) === 2
 *
 * @param number
 */
export function mergeNumbers(number) {
  function getSumNum(n) {
    let sum = 0;

    for (const symbol of n) {
      sum += Number(symbol);
    }
    return sum;
  }

  let sum = getSumNum(String(number));

  while (sum > 9) {
    sum = getSumNum(String(sum));
  }

  return sum;
}
